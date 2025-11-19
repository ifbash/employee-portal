// lib/data/tickets.ts

export interface Ticket {
  id: string
  employeeId: string
  employeeName: string
  category: 'IT' | 'HR' | 'Facilities' | 'Payroll' | 'Other'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  subject: string
  description: string
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  createdDate: string
  updatedDate: string
  assignedTo?: string
  resolution?: string
}

export const tickets: Ticket[] = [
  {
    id: 'TKT-001',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    category: 'IT',
    priority: 'high',
    subject: 'Cannot access VPN',
    description: 'Getting connection timeout error when trying to connect to office VPN',
    status: 'in-progress',
    createdDate: 'Nov 18, 2025',
    updatedDate: 'Nov 18, 2025',
    assignedTo: 'IT Support Team'
  },
  {
    id: 'TKT-002',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    category: 'HR',
    priority: 'medium',
    subject: 'Update emergency contact',
    description: 'Need to update my emergency contact information',
    status: 'resolved',
    createdDate: 'Nov 15, 2025',
    updatedDate: 'Nov 16, 2025',
    assignedTo: 'HR Team',
    resolution: 'Emergency contact information updated successfully'
  },
  {
    id: 'TKT-003',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    category: 'Facilities',
    priority: 'low',
    subject: 'Office AC not working',
    description: 'Air conditioning in conference room B is not functioning',
    status: 'closed',
    createdDate: 'Nov 10, 2025',
    updatedDate: 'Nov 12, 2025',
    assignedTo: 'Facilities Team',
    resolution: 'AC repaired and functioning normally'
  }
]

// Helper functions
export const getTicketById = (id: string): Ticket | undefined => {
  return tickets.find(t => t.id === id)
}

export const getTicketsByEmployee = (employeeId: string): Ticket[] => {
  return tickets.filter(t => t.employeeId === employeeId)
}

export const getTicketsByStatus = (status: string): Ticket[] => {
  return tickets.filter(t => t.status === status)
}

export const getTicketsByCategory = (category: string): Ticket[] => {
  return tickets.filter(t => t.category === category)
}

export const getOpenTickets = (employeeId: string): Ticket[] => {
  return tickets.filter(t => 
    t.employeeId === employeeId && 
    (t.status === 'open' || t.status === 'in-progress')
  )
}

export const addTicket = (ticket: Omit<Ticket, 'id' | 'createdDate' | 'updatedDate'>): Ticket => {
  const newTicket: Ticket = {
    ...ticket,
    id: `TKT-${String(tickets.length + 1).padStart(3, '0')}`,
    createdDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }),
    updatedDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  tickets.push(newTicket)
  return newTicket
}

export const updateTicketStatus = (
  id: string, 
  status: Ticket['status'],
  resolution?: string
): Ticket | undefined => {
  const ticket = tickets.find(t => t.id === id)
  if (ticket) {
    ticket.status = status
    ticket.updatedDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
    if (resolution) {
      ticket.resolution = resolution
    }
  }
  return ticket
}
