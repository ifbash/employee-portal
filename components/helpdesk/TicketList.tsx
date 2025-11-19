'use client'

import { useState } from 'react'
import { tickets } from '@/lib/data/tickets'
import Card from '../ui/Card'
import Button from '../ui/Button'
import TicketModal from './TicketModal'
import { Plus } from 'lucide-react'

export default function TicketList() {
  const [showModal, setShowModal] = useState(false)
  const currentEmployeeId = 'EMP-2024-001'
  const myTickets = tickets.filter(t => t.employeeId === currentEmployeeId)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'closed': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">My Tickets</h3>
          <Button onClick={() => setShowModal(true)}>
            <Plus size={16} className="mr-2" />
            Create Ticket
          </Button>
        </div>

        <div className="space-y-4">
          {myTickets.map((ticket) => (
            <div key={ticket.id} className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-lg">{ticket.subject}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-slate-400">
                    {ticket.id} • {ticket.category} • Created: {ticket.createdDate}
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                  {ticket.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{ticket.description}</p>
              {ticket.assignedTo && (
                <p className="text-sm text-gray-600 dark:text-slate-400">Assigned to: {ticket.assignedTo}</p>
              )}
            </div>
          ))}
        </div>
      </Card>

      <TicketModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
