// lib/data/leave.ts

export interface LeaveRequest {
  id: string
  employeeId: string
  employeeName: string
  type: 'annual' | 'sick' | 'wfh' | 'personal' | 'unpaid'
  startDate: string
  endDate: string
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  submittedDate: string
  reviewedBy?: string
  reviewedDate?: string
}

export const leaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    type: 'annual',
    startDate: 'Dec 24, 2025',
    endDate: 'Dec 26, 2025',
    reason: 'Christmas Break',
    status: 'approved',
    submittedDate: 'Nov 10, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 11, 2025'
  },
  {
    id: '2',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    type: 'annual',
    startDate: 'Dec 31, 2025',
    endDate: 'Dec 31, 2025',
    reason: "New Year's Eve",
    status: 'pending',
    submittedDate: 'Nov 15, 2025'
  },
  {
    id: '3',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    type: 'wfh',
    startDate: 'Nov 15, 2025',
    endDate: 'Nov 15, 2025',
    reason: 'Personal appointment',
    status: 'approved',
    submittedDate: 'Nov 12, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 13, 2025'
  },
  {
    id: '4',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    type: 'sick',
    startDate: 'Nov 8, 2025',
    endDate: 'Nov 8, 2025',
    reason: 'Medical appointment',
    status: 'approved',
    submittedDate: 'Nov 7, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 7, 2025'
  },
  {
    id: '5',
    employeeId: 'EMP-2024-002',
    employeeName: 'Sarah Johnson',
    type: 'annual',
    startDate: 'Dec 20, 2025',
    endDate: 'Jan 2, 2026',
    reason: 'Holiday vacation',
    status: 'approved',
    submittedDate: 'Oct 15, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Oct 16, 2025'
  },
  {
    id: '6',
    employeeId: 'EMP-2024-003',
    employeeName: 'Michael Chen',
    type: 'sick',
    startDate: 'Nov 18, 2025',
    endDate: 'Nov 19, 2025',
    reason: 'Flu symptoms',
    status: 'pending',
    submittedDate: 'Nov 18, 2025'
  }
]

export const getLeaveById = (id: string): LeaveRequest | undefined => {
  return leaveRequests.find(leave => leave.id === id)
}

export const getLeavesByEmployee = (employeeId: string): LeaveRequest[] => {
  return leaveRequests.filter(leave => leave.employeeId === employeeId)
}

export const getLeavesByStatus = (status: 'pending' | 'approved' | 'rejected'): LeaveRequest[] => {
  return leaveRequests.filter(leave => leave.status === status)
}

export const getLeavesByType = (type: string): LeaveRequest[] => {
  return leaveRequests.filter(leave => leave.type === type)
}

export const getPendingLeaves = (): LeaveRequest[] => {
  return leaveRequests.filter(leave => leave.status === 'pending')
}

export const addLeaveRequest = (leave: Omit<LeaveRequest, 'id' | 'submittedDate'>): LeaveRequest => {
  const newLeave: LeaveRequest = {
    ...leave,
    id: (leaveRequests.length + 1).toString(),
    submittedDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  leaveRequests.push(newLeave)
  return newLeave
}

export const updateLeaveStatus = (
  id: string, 
  status: 'approved' | 'rejected',
  reviewedBy: string
): LeaveRequest | undefined => {
  const leave = leaveRequests.find(l => l.id === id)
  if (leave) {
    leave.status = status
    leave.reviewedBy = reviewedBy
    leave.reviewedDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  return leave
}

export const getLeaveTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    'annual': 'Annual Leave',
    'sick': 'Sick Leave',
    'wfh': 'Work From Home',
    'personal': 'Personal Leave',
    'unpaid': 'Unpaid Leave'
  }
  return labels[type] || type
}
