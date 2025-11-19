export type Role = 'employee' | 'manager' | 'hr'
export type Section = 
  | 'dashboard' 
  | 'documents' 
  | 'policies' 
  | 'calendar' 
  | 'timesheet' 
  | 'payslips' 
  | 'benefits' 
  | 'team'
  | 'reimbursements'    
  | 'helpdesk'         
  | 'appreciate'       
  | 'learning'         
  | 'announcements'

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

export interface Reimbursement {
  id: string
  employeeId: string
  employeeName: string
  type: 'travel' | 'meal' | 'equipment' | 'training' | 'other'
  amount: number
  date: string
  description: string
  receipt?: string
  status: 'pending' | 'approved' | 'rejected' | 'paid'
  submittedDate: string
  reviewedBy?: string
  reviewedDate?: string
}

// Help Desk
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

// Appreciation
export interface Appreciation {
  id: string
  fromEmployeeId: string
  fromEmployeeName: string
  toEmployeeId: string
  toEmployeeName: string
  message: string
  type: 'thank-you' | 'great-work' | 'team-player' | 'innovative' | 'leadership'
  date: string
  isPublic: boolean
}

// Learning & Training
export interface Course {
  id: string
  title: string
  provider: string
  category: string
  duration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  description: string
  enrolled: number
  rating: number
  thumbnail?: string
}

export interface Enrollment {
  id: string
  employeeId: string
  courseId: string
  enrolledDate: string
  progress: number
  status: 'in-progress' | 'completed' | 'not-started'
  completedDate?: string
}

// Announcements
export interface Announcement {
  id: string
  title: string
  content: string
  category: 'company' | 'hr' | 'it' | 'events' | 'urgent'
  priority: 'normal' | 'high' | 'urgent'
  author: string
  date: string
  isPinned: boolean
  expiryDate?: string
}