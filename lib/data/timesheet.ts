// lib/data/timesheet.ts

export interface TimesheetEntry {
  id: string
  employeeId: string
  employeeName: string
  date: string
  project: string
  task: string
  hours: number
  billable: boolean
  status: 'pending' | 'approved' | 'rejected'
  submittedDate: string
  reviewedBy?: string
  reviewedDate?: string
}

export const timesheetEntries: TimesheetEntry[] = [
  {
    id: '1',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    date: 'Nov 18, 2025',
    project: 'ServiceNow Implementation',
    task: 'Development',
    hours: 8.0,
    billable: true,
    status: 'pending',
    submittedDate: 'Nov 18, 2025'
  },
  {
    id: '2',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    date: 'Nov 15, 2025',
    project: 'Internal Portal',
    task: 'Testing',
    hours: 7.5,
    billable: false,
    status: 'approved',
    submittedDate: 'Nov 15, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 16, 2025'
  },
  {
    id: '3',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    date: 'Nov 14, 2025',
    project: 'CRM Integration',
    task: 'Design',
    hours: 8.0,
    billable: true,
    status: 'approved',
    submittedDate: 'Nov 14, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 15, 2025'
  },
  {
    id: '4',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    date: 'Nov 13, 2025',
    project: 'ServiceNow Implementation',
    task: 'Meeting',
    hours: 6.5,
    billable: true,
    status: 'approved',
    submittedDate: 'Nov 13, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 14, 2025'
  },
  {
    id: '5',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    date: 'Nov 12, 2025',
    project: 'Analytics Dashboard',
    task: 'Development',
    hours: 8.5,
    billable: true,
    status: 'approved',
    submittedDate: 'Nov 12, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 13, 2025'
  },
  {
    id: '6',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    date: 'Nov 11, 2025',
    project: 'Mobile App Development',
    task: 'Code Review',
    hours: 8.0,
    billable: false,
    status: 'approved',
    submittedDate: 'Nov 11, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 12, 2025'
  },
  {
    id: '7',
    employeeId: 'EMP-2024-002',
    employeeName: 'Sarah Johnson',
    date: 'Nov 18, 2025',
    project: 'ServiceNow Implementation',
    task: 'Development',
    hours: 8.0,
    billable: true,
    status: 'approved',
    submittedDate: 'Nov 18, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 18, 2025'
  }
]

export const getTimesheetById = (id: string): TimesheetEntry | undefined => {
  return timesheetEntries.find(entry => entry.id === id)
}

export const getTimesheetsByEmployee = (employeeId: string): TimesheetEntry[] => {
  return timesheetEntries.filter(entry => entry.employeeId === employeeId)
}

export const getTimesheetsByStatus = (status: 'pending' | 'approved' | 'rejected'): TimesheetEntry[] => {
  return timesheetEntries.filter(entry => entry.status === status)
}

export const getTimesheetsByProject = (project: string): TimesheetEntry[] => {
  return timesheetEntries.filter(entry => entry.project === project)
}

export const getTimesheetsByDateRange = (employeeId: string, startDate: Date, endDate: Date): TimesheetEntry[] => {
  return timesheetEntries.filter(entry => {
    const entryDate = new Date(entry.date)
    return entry.employeeId === employeeId && entryDate >= startDate && entryDate <= endDate
  })
}

export const getPendingTimesheets = (): TimesheetEntry[] => {
  return timesheetEntries.filter(entry => entry.status === 'pending')
}

export const addTimesheetEntry = (entry: Omit<TimesheetEntry, 'id' | 'submittedDate'>): TimesheetEntry => {
  const newEntry: TimesheetEntry = {
    ...entry,
    id: (timesheetEntries.length + 1).toString(),
    submittedDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  timesheetEntries.push(newEntry)
  return newEntry
}

export const updateTimesheetStatus = (
  id: string, 
  status: 'approved' | 'rejected',
  reviewedBy: string
): TimesheetEntry | undefined => {
  const entry = timesheetEntries.find(e => e.id === id)
  if (entry) {
    entry.status = status
    entry.reviewedBy = reviewedBy
    entry.reviewedDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  return entry
}

export const calculateWeeklySummary = (employeeId: string) => {
  const now = new Date()
  const weekStart = new Date(now.setDate(now.getDate() - now.getDay()))
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekStart.getDate() + 6)

  const weekEntries = getTimesheetsByDateRange(employeeId, weekStart, weekEnd)
  
  const totalHours = weekEntries.reduce((sum, entry) => sum + entry.hours, 0)
  const billableHours = weekEntries.filter(e => e.billable).reduce((sum, entry) => sum + entry.hours, 0)
  const targetHours = 40.0
  const overtimeHours = Math.max(0, totalHours - targetHours)

  return {
    totalHours,
    billableHours,
    overtimeHours,
    targetHours
  }
}

export const getProjectList = (): string[] => {
  return Array.from(new Set(timesheetEntries.map(entry => entry.project)))
}
