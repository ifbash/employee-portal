'use client'

import { useState } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Modal from '../ui/Modal'
import { Eye } from 'lucide-react'

interface Payslip {
  id: string
  period: string
  grossPay: number
  deductions: number
  netPay: number
}

export default function PayslipTable() {
  const [selectedPayslip, setSelectedPayslip] = useState<Payslip | null>(null)

  const payslips: Payslip[] = [
    { id: '1', period: 'October 2025', grossPay: 6500, deductions: 1430, netPay: 5070 },
    { id: '2', period: 'September 2025', grossPay: 6500, deductions: 1430, netPay: 5070 },
    { id: '3', period: 'August 2025', grossPay: 6500, deductions: 1430, netPay: 5070 },
  ]

  return (
    <div>
      <Card>
        <h3 className="text-xl font-semibold mb-6">Pay History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-sm">Pay Period</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Gross Pay</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Deductions</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Net Pay</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {payslips.map((slip) => (
                <tr key={slip.id} className="border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="py-3 px-4">{slip.period}</td>
                  <td className="py-3 px-4">${slip.grossPay.toFixed(2)}</td>
                  <td className="py-3 px-4">${slip.deductions.toFixed(2)}</td>
                  <td className="py-3 px-4 font-semibold">${slip.netPay.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs">
                      Paid
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button onClick={() => setSelectedPayslip(slip)}>
                      <Eye size={16} className="mr-2" />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {selectedPayslip && (
        <Modal isOpen={!!selectedPayslip} onClose={() => setSelectedPayslip(null)} title={`Payslip - ${selectedPayslip.period}`}>
          <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6">
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Employee Details</h4>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Employee ID:</strong> EMP-2024-001</p>
              <p><strong>Department:</strong> Engineering</p>
              <p><strong>Pay Period:</strong> {selectedPayslip.period}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Earnings</h4>
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-1">Base Salary</td>
                    <td className="text-right py-1">$6,000.00</td>
                  </tr>
                  <tr>
                    <td className="py-1">Performance Bonus</td>
                    <td className="text-right py-1">$500.00</td>
                  </tr>
                  <tr className="font-semibold border-t dark:border-slate-700">
                    <td className="py-2">Gross Pay</td>
                    <td className="text-right py-2">${selectedPayslip.grossPay.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">Deductions</h4>
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-1">Federal Tax</td>
                    <td className="text-right py-1">$980.00</td>
                  </tr>
                  <tr>
                    <td className="py-1">Social Security</td>
                    <td className="text-right py-1">$403.00</td>
                  </tr>
                  <tr>
                    <td className="py-1">Health Insurance</td>
                    <td className="text-right py-1">$47.00</td>
                  </tr>
                  <tr className="font-semibold border-t dark:border-slate-700">
                    <td className="py-2">Total Deductions</td>
                    <td className="text-right py-2">${selectedPayslip.deductions.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Net Pay</h4>
                <div className="text-2xl font-bold text-primary">${selectedPayslip.netPay.toFixed(2)}</div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button className="flex-1">Download PDF</Button>
              <Button variant="secondary" onClick={() => setSelectedPayslip(null)}>Close</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
