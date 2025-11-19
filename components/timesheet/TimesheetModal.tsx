// components/timesheet/TimesheetModal.tsx
'use client'

import { useState } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

interface TimesheetModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TimesheetModal({ isOpen, onClose }: TimesheetModalProps) {
  const [formData, setFormData] = useState({
    date: '',
    project: '',
    task: '',
    hours: '',
    billable: 'yes'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.date || !formData.project || !formData.task || !formData.hours) {
      alert('Please fill in all required fields')
      return
    }

    // Validate hours
    const hours = parseFloat(formData.hours)
    if (isNaN(hours) || hours <= 0 || hours > 24) {
      alert('Please enter valid hours (0-24)')
      return
    }

    // Here you would typically send the data to an API
    console.log('Timesheet entry submitted:', formData)
    
    // Show success message
    alert('Timesheet entry logged successfully!')
    
    // Reset form and close modal
    setFormData({
      date: '',
      project: '',
      task: '',
      hours: '',
      billable: 'yes'
    })
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Log Hours">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            max={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Project <span className="text-red-500">*</span>
          </label>
          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select project</option>
            <option value="servicenow">ServiceNow Implementation</option>
            <option value="portal">Internal Portal</option>
            <option value="crm">CRM Integration</option>
            <option value="dashboard">Analytics Dashboard</option>
            <option value="mobile">Mobile App Development</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Task Description <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="e.g., Development, Testing, Design, Meeting"
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Hours <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="hours"
            value={formData.hours}
            onChange={handleChange}
            step="0.5"
            min="0"
            max="24"
            placeholder="e.g., 8.0 or 4.5"
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-slate-500">
            Enter hours in 0.5 increments (e.g., 0.5, 1.0, 1.5, 2.0...)
          </p>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Billable
          </label>
          <select
            name="billable"
            value={formData.billable}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="yes">Yes - Billable</option>
            <option value="no">No - Non-Billable</option>
          </select>
        </div>

        <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-400">
            <strong>Note:</strong> Timesheet entries will be submitted to your manager for approval. 
            Please ensure all hours logged are accurate.
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" className="flex-1">
            Submit
          </Button>
          <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}
