// lib/data/appreciations.ts

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

export const appreciations: Appreciation[] = [
  {
    id: '1',
    fromEmployeeId: 'EMP-2024-002',
    fromEmployeeName: 'Sarah Johnson',
    toEmployeeId: 'EMP-2024-001',
    toEmployeeName: 'John Doe',
    message: 'Thank you for helping me debug that critical production issue! Your expertise saved the day.',
    type: 'thank-you',
    date: 'Nov 18, 2025',
    isPublic: true
  },
  {
    id: '2',
    fromEmployeeId: 'EMP-2024-003',
    fromEmployeeName: 'Michael Chen',
    toEmployeeId: 'EMP-2024-001',
    toEmployeeName: 'John Doe',
    message: 'Outstanding work on the new dashboard design! The client loved it.',
    type: 'great-work',
    date: 'Nov 15, 2025',
    isPublic: true
  },
  {
    id: '3',
    fromEmployeeId: 'EMP-2024-004',
    fromEmployeeName: 'Emily Davis',
    toEmployeeId: 'EMP-2024-001',
    toEmployeeName: 'John Doe',
    message: 'Your leadership during the sprint planning was excellent. Great job keeping everyone on track!',
    type: 'leadership',
    date: 'Nov 12, 2025',
    isPublic: true
  },
  {
    id: '4',
    fromEmployeeId: 'EMP-2024-005',
    fromEmployeeName: 'David Martinez',
    toEmployeeId: 'EMP-2024-002',
    toEmployeeName: 'Sarah Johnson',
    message: 'Always willing to help team members. True team player!',
    type: 'team-player',
    date: 'Nov 10, 2025',
    isPublic: true
  },
  {
    id: '5',
    fromEmployeeId: 'EMP-2024-001',
    fromEmployeeName: 'John Doe',
    toEmployeeId: 'EMP-2024-003',
    toEmployeeName: 'Michael Chen',
    message: 'Innovative solution for the performance bottleneck. Brilliant thinking!',
    type: 'innovative',
    date: 'Nov 8, 2025',
    isPublic: true
  }
]

// Helper functions
export const getAppreciationById = (id: string): Appreciation | undefined => {
  return appreciations.find(a => a.id === id)
}

export const getAppreciationsForEmployee = (employeeId: string): Appreciation[] => {
  return appreciations.filter(a => a.toEmployeeId === employeeId)
}

export const getAppreciationsByEmployee = (employeeId: string): Appreciation[] => {
  return appreciations.filter(a => a.fromEmployeeId === employeeId)
}

export const getPublicAppreciations = (): Appreciation[] => {
  return appreciations.filter(a => a.isPublic)
}

export const getAppreciationsByType = (type: string): Appreciation[] => {
  return appreciations.filter(a => a.type === type)
}

export const addAppreciation = (appreciation: Omit<Appreciation, 'id' | 'date'>): Appreciation => {
  const newAppreciation: Appreciation = {
    ...appreciation,
    id: (appreciations.length + 1).toString(),
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  appreciations.push(newAppreciation)
  return newAppreciation
}

export const getAppreciationCount = (employeeId: string): number => {
  return getAppreciationsForEmployee(employeeId).length
}
