'use client'
import React, { useState } from 'react'

interface ReimbursementModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReimbursementModal({ isOpen, onClose }: ReimbursementModalProps) {
  const [form, setForm] = useState({
    date: '',
    type: 'travel',
    description: '',
    amount: ''
  })

  // hides the modal if closed
  if (!isOpen) return null

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Here you can handle submit, push to context, or call an API
    alert('Claim submitted: ' + JSON.stringify(form, null, 2))
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg max-w-sm w-full shadow-lg z-10">
        <h3 className="text-lg font-semibold mb-4">New Reimbursement Claim</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="border p-2 rounded w-full" required />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Type</label>
            <select name="type" value={form.type} onChange={handleChange} className="border p-2 rounded w-full">
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="equipment">Equipment</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Description</label>
            <input name="description" value={form.description} onChange={handleChange} className="border p-2 rounded w-full" required />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input name="amount" type="number" min={0} value={form.amount} onChange={handleChange} className="border p-2 rounded w-full" required />
          </div>
          <div className="flex gap-2 pt-2">
            <button type="submit" className="button bg-green-600 text-white rounded px-4 py-2">Submit</button>
            <button type="button" className="button bg-gray-300 rounded px-4 py-2" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
