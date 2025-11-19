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
 
export const reimbursements: Reimbursement[] = [
  {
    id: '1',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    type: 'travel',
    amount: 450.00,
    date: 'Nov 10, 2025',
    description: 'Client meeting in Boston - Flight and hotel',
    receipt: 'receipt_001.pdf',
    status: 'approved',
    submittedDate: 'Nov 12, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 13, 2025'
  },
  {
    id: '2',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    type: 'meal',
    amount: 85.50,
    date: 'Nov 15, 2025',
    description: 'Team lunch with clients',
    receipt: 'receipt_002.pdf',
    status: 'pending',
    submittedDate: 'Nov 16, 2025'
  },
  {
    id: '3',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    type: 'equipment',
    amount: 299.99,
    date: 'Nov 5, 2025',
    description: 'Wireless keyboard and mouse',
    receipt: 'receipt_003.pdf',
    status: 'paid',
    submittedDate: 'Nov 6, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Nov 7, 2025'
  },
  {
    id: '4',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    type: 'training',
    amount: 599.00,
    date: 'Oct 28, 2025',
    description: 'AWS Certification course',
    receipt: 'receipt_004.pdf',
    status: 'approved',
    submittedDate: 'Oct 30, 2025',
    reviewedBy: 'Jane Manager',
    reviewedDate: 'Oct 31, 2025'
  }
]
 
// Helper functions
export const getReimbursementById = (id: string): Reimbursement | undefined => {
  return reimbursements.find(r => r.id === id)
}
 
export const getReimbursementsByEmployee = (employeeId: string): Reimbursement[] => {
  return reimbursements.filter(r => r.employeeId === employeeId)
}
 
export const getReimbursementsByStatus = (status: string): Reimbursement[] => {
  return reimbursements.filter(r => r.status === status)
}
 
export const addReimbursement = (reimbursement: Omit<Reimbursement, 'id' | 'submittedDate'>): Reimbursement => {
  const newReimbursement: Reimbursement = {
    ...reimbursement,
    id: (reimbursements.length + 1).toString(),
    submittedDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  reimbursements.push(newReimbursement)
  return newReimbursement
}
 
export const getTotalReimbursements = (employeeId: string): number => {
  return getReimbursementsByEmployee(employeeId)
    .reduce((total, r) => total + r.amount, 0)
}