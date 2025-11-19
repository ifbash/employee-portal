'use client'
import { useState } from 'react'
import { reimbursements } from '@/lib/data/reimbursements'
import Card from '../ui/Card'
import Button from '../ui/Button' // Or replace with <button ...>
import ReimbursementModal from './ReimbursementModal'
import { Plus } from 'lucide-react'

export default function ReimbursementList() {
  const [showModal, setShowModal] = useState(false)
  const currentEmployeeId = 'EMP-2024-001'
  const myReimbursements = reimbursements.filter(r => r.employeeId === currentEmployeeId)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'paid':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatAmount = (amount: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

  return (
    <div>
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">My Reimbursements</h3>
          <Button onClick={() => setShowModal(true)}>
            <Plus size={16} className="mr-2" />
            Submit Claim
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Description</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {myReimbursements.map((reimbursement) => (
                <tr key={reimbursement.id} className="border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="py-3 px-4">{reimbursement.date}</td>
                  <td className="py-3 px-4 capitalize">{reimbursement.type}</td>
                  <td className="py-3 px-4">{reimbursement.description}</td>
                  <td className="py-3 px-4 font-semibold">
                    {formatAmount(reimbursement.amount)}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(reimbursement.status)}`}>
                      {reimbursement.status.charAt(0).toUpperCase() + reimbursement.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <ReimbursementModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
