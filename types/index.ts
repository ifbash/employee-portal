export type Role = 'employee' | 'manager' | 'hr'

export interface User {
  id: string
  name: string
  email: string
  role: Role
  department: string
}

export interface Document {
  id: string
  name: string
  type: string
  uploadDate: string
  url?: string
}

export interface Policy {
  id: string
  title: string
  category: string
  icon: string
  description: string
  content: string
}

export interface LeaveRequest {
  id: string
  type: string
  startDate: string
  endDate: string
  reason: string
  status: 'pending' | 'approved' | 'rejected'
}

export interface TimesheetEntry {
  id: string
  date: string
  project: string
  task: string
  hours: number
  status: 'pending' | 'approved' | 'rejected'
}

export interface Payslip {
  id: string
  period: string
  grossPay: number
  deductions: number
  netPay: number
  status: string
  details: {
    earnings: Array<{ label: string; amount: number }>
    deductions: Array<{ label: string; amount: number }>
  }
}

export interface Benefit {
  id: string
  name: string
  type: string
  coverage: string
  premium: string
  icon: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  department: string
  leaveBalance: string
  status: 'active' | 'on-leave'
}
