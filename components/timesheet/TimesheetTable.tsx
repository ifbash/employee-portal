'use client'

import { useState } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

interface TimesheetEntry {
  id: string
  date: string
  project: string
  task: string
  hours: number
  status: string
}

export default function TimesheetTable() {
  const [showModal, setShowModal] = useState(false)

  const entries: TimesheetEntry[] = [
    { id: '1', date: 'Nov 18, 2025', project: 'ServiceNow Implementation', task: 'Development', hours: 8.0, status: 'Approved' },
    { id: '2', date: 'Nov 17, 2025', project: 'ServiceNow Implementation', task: 'Testing', hours: 7.5, status: 'Approved' },
    { id: '3', date: 'Nov 16, 2025', project: 'Internal Portal', task: 'UI Design', hours: 8.0, status: 'Pending' },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Weekly Timesheet</h3>
          <Button onClick={() => setShowModal(true)}>Log Hours</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Project</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Task</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Hours</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="py-3 px-4">{entry.date}</td>
                  <td className="py-3 px-4">{entry.project}</td>
                  <td className="py-3 px-4">{entry.task}</td>
                  <td className="py-3 px-4">{entry.hours}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      entry.status === 'Approved' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {entry.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="secondary">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold mb-4">Week Summary</h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-gray-600 dark:text-slate-400">Total Hours</div>
            <div className="text-3xl font-bold text-primary">38.5</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 dark:text-slate-400">Billable</div>
            <div className="text-3xl font-bold text-primary">35.0</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 dark:text-slate-400">Overtime</div>
            <div className="text-3xl font-bold text-primary">0.0</div>
          </div>
        </div>
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Log Hours">
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Date</label>
            <input type="date" className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Project</label>
            <select className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800">
              <option>Select project</option>
              <option>ServiceNow Implementation</option>
              <option>Internal Portal</option>
              <option>CRM Integration</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Task Description</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Hours</label>
            <input type="number" step="0.5" className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg" />
          </div>
          <div className="flex gap-3">
            <Button className="flex-1">Submit</Button>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
