'use client'

import { useState } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

export default function Calendar() {
  const [showLeaveModal, setShowLeaveModal] = useState(false)

  const daysInMonth = 30
  const startDay = 4 // November 2025 starts on Saturday
  const calendarDays = []

  // Add empty cells
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="invisible" />)
  }

  // Add days
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === 18
    const hasEvent = [24, 25, 26].includes(day)
    
    calendarDays.push(
      <div
        key={day}
        className={`aspect-square border rounded-lg p-2 text-center cursor-pointer transition-all
          ${isToday ? 'bg-primary text-white' : 'hover:bg-gray-50 dark:hover:bg-slate-700'}
          ${hasEvent && !isToday ? 'bg-primary/10 border-primary' : 'border-gray-200 dark:border-slate-700'}
        `}
      >
        {day}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">November 2025</h3>
          <Button onClick={() => setShowLeaveModal(true)}>Request Leave</Button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-semibold text-sm py-2">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {calendarDays}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold mb-4">Upcoming Leave</h3>
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
            <div className="font-semibold">Dec 24-26, 2025</div>
            <div className="text-sm text-gray-600 dark:text-slate-400">Christmas Break</div>
            <div className="mt-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs">
                Approved
              </span>
            </div>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
            <div className="font-semibold">Dec 31, 2025</div>
            <div className="text-sm text-gray-600 dark:text-slate-400">New Year's Eve</div>
            <div className="mt-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-xs">
                Pending
              </span>
            </div>
          </div>
        </div>
      </Card>

      <Modal isOpen={showLeaveModal} onClose={() => setShowLeaveModal(false)} title="Request Leave">
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Leave Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800">
              <option>Select leave type</option>
              <option>Annual Leave</option>
              <option>Sick Leave</option>
              <option>Work From Home</option>
              <option>Personal Leave</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Start Date</label>
            <input type="date" className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 font-medium">End Date</label>
            <input type="date" className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Reason</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg" rows={3} />
          </div>
          <div className="flex gap-3">
            <Button className="flex-1">Submit Request</Button>
            <Button variant="secondary" onClick={() => setShowLeaveModal(false)}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
