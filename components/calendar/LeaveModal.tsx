// components/calendar/LeaveModal.tsx
'use client'

import { useState } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

interface LeaveModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeaveModal({ isOpen, onClose }: LeaveModalProps) {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.leaveType || !formData.startDate || !formData.endDate) {
      alert('Please fill in all required fields')
      return
    }

    // Here you would typically send the data to an API
    console.log('Leave request submitted:', formData)
    
    // Show success message
    alert('Leave request submitted successfully!')
    
    // Reset form and close modal
    setFormData({
      leaveType: '',
      startDate: '',
      endDate: '',
      reason: ''
    })
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request Leave">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Leave Type <span className="text-red-500">*</span>
          </label>
          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select leave type</option>
            <option value="annual">Annual Leave</option>
            <option value="sick">Sick Leave</option>
            <option value="wfh">Work From Home</option>
            <option value="personal">Personal Leave</option>
            <option value="unpaid">Unpaid Leave</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Start Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            End Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            min={formData.startDate}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Reason
          </label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows={3}
            placeholder="Please provide a reason for your leave request..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-400">
            <strong>Note:</strong> Your leave request will be sent to your manager for approval. 
            You will receive a notification once it has been reviewed.
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" className="flex-1">
            Submit Request
          </Button>
          <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}
