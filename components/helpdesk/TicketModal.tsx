'use client'

import { useState } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

interface TicketModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TicketModal({ isOpen, onClose }: TicketModalProps) {
  const [formData, setFormData] = useState({
    category: '',
    priority: 'medium',
    subject: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Ticket submitted:', formData)
    alert('Support ticket created successfully!')
    setFormData({ category: '', priority: 'medium', subject: '', description: '' })
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Support Ticket">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select category</option>
            <option value="IT">IT Support</option>
            <option value="HR">HR</option>
            <option value="Facilities">Facilities</option>
            <option value="Payroll">Payroll</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Priority <span className="text-red-500">*</span>
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Brief description of the issue"
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Provide detailed information about your issue..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" className="flex-1">Create Ticket</Button>
          <Button type="button" variant="secondary" onClick={onClose} className="flex-1">Cancel</Button>
        </div>
      </form>
    </Modal>
  )
}
