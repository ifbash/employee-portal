// components/payslips/PayslipModal.tsx
'use client'

import Modal from '../ui/Modal'
import Button from '../ui/Button'

interface Payslip {
  id: string
  period: string
  grossPay: number
  deductions: number
  netPay: number
}

interface PayslipModalProps {
  isOpen: boolean
  onClose: () => void
  payslip: Payslip | null
}

export default function PayslipModal({ isOpen, onClose, payslip }: PayslipModalProps) {
  if (!payslip) return null

  const earnings = [
    { label: 'Base Salary', amount: 6000.00 },
    { label: 'Performance Bonus', amount: 500.00 },
  ]

  const deductions = [
    { label: 'Federal Tax', amount: 980.00 },
    { label: 'Social Security', amount: 403.00 },
    { label: 'Health Insurance', amount: 47.00 },
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Payslip - ${payslip.period}`}>
      <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-6">
        {/* Employee Details */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Employee Details</h4>
          <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Employee ID:</strong> EMP-2024-001</p>
            <p><strong>Department:</strong> Engineering</p>
            <p><strong>Pay Period:</strong> {payslip.period}</p>
          </div>
        </div>

        {/* Earnings */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Earnings</h4>
          <table className="w-full text-sm">
            <tbody>
              {earnings.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 dark:border-slate-700 last:border-0">
                  <td className="py-2 text-gray-700 dark:text-gray-300">{item.label}</td>
                  <td className="text-right py-2 text-gray-900 dark:text-gray-100">
                    ${item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold border-t-2 border-gray-300 dark:border-slate-600">
                <td className="py-2 text-gray-900 dark:text-gray-100">Gross Pay</td>
                <td className="text-right py-2 text-gray-900 dark:text-gray-100">
                  ${payslip.grossPay.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Deductions */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Deductions</h4>
          <table className="w-full text-sm">
            <tbody>
              {deductions.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 dark:border-slate-700 last:border-0">
                  <td className="py-2 text-gray-700 dark:text-gray-300">{item.label}</td>
                  <td className="text-right py-2 text-gray-900 dark:text-gray-100">
                    ${item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold border-t-2 border-gray-300 dark:border-slate-600">
                <td className="py-2 text-gray-900 dark:text-gray-100">Total Deductions</td>
                <td className="text-right py-2 text-gray-900 dark:text-gray-100">
                  ${payslip.deductions.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Net Pay */}
        <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Net Pay</h4>
            <div className="text-2xl font-bold text-primary">
              ${payslip.netPay.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <Button className="flex-1">Download PDF</Button>
          <Button variant="secondary" onClick={onClose} className="flex-1">
            Close
          </Button>
        </div>
      </div>
    </Modal>
  )
}
