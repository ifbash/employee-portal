// lib/data/payslips.ts

export interface Payslip {
  id: string
  employeeId: string
  employeeName: string
  period: string
  periodStart: string
  periodEnd: string
  grossPay: number
  deductions: number
  netPay: number
  status: 'paid' | 'pending' | 'processing'
  payDate: string
}

export interface PayslipDetail {
  earnings: {
    baseSalary: number
    bonus: number
    overtime: number
    commission: number
  }
  deductions: {
    federalTax: number
    stateTax: number
    socialSecurity: number
    medicare: number
    healthInsurance: number
    retirement401k: number
    other: number
  }
}

export const payslips: Payslip[] = [
  {
    id: '1',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    period: 'October 2025',
    periodStart: 'Oct 1, 2025',
    periodEnd: 'Oct 31, 2025',
    grossPay: 6500.00,
    deductions: 1430.00,
    netPay: 5070.00,
    status: 'paid',
    payDate: 'Nov 1, 2025'
  },
  {
    id: '2',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    period: 'September 2025',
    periodStart: 'Sep 1, 2025',
    periodEnd: 'Sep 30, 2025',
    grossPay: 6500.00,
    deductions: 1430.00,
    netPay: 5070.00,
    status: 'paid',
    payDate: 'Oct 1, 2025'
  },
  {
    id: '3',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    period: 'August 2025',
    periodStart: 'Aug 1, 2025',
    periodEnd: 'Aug 31, 2025',
    grossPay: 6500.00,
    deductions: 1430.00,
    netPay: 5070.00,
    status: 'paid',
    payDate: 'Sep 1, 2025'
  },
  {
    id: '4',
    employeeId: 'EMP-2024-001',
    employeeName: 'John Doe',
    period: 'July 2025',
    periodStart: 'Jul 1, 2025',
    periodEnd: 'Jul 31, 2025',
    grossPay: 7000.00,
    deductions: 1540.00,
    netPay: 5460.00,
    status: 'paid',
    payDate: 'Aug 1, 2025'
  },
  {
    id: '5',
    employeeId: 'EMP-2024-002',
    employeeName: 'Sarah Johnson',
    period: 'October 2025',
    periodStart: 'Oct 1, 2025',
    periodEnd: 'Oct 31, 2025',
    grossPay: 7500.00,
    deductions: 1650.00,
    netPay: 5850.00,
    status: 'paid',
    payDate: 'Nov 1, 2025'
  },
  {
    id: '6',
    employeeId: 'EMP-2024-003',
    employeeName: 'Michael Chen',
    period: 'October 2025',
    periodStart: 'Oct 1, 2025',
    periodEnd: 'Oct 31, 2025',
    grossPay: 6800.00,
    deductions: 1496.00,
    netPay: 5304.00,
    status: 'paid',
    payDate: 'Nov 1, 2025'
  }
]

export const payslipDetails: Record<string, PayslipDetail> = {
  '1': {
    earnings: {
      baseSalary: 6000.00,
      bonus: 500.00,
      overtime: 0.00,
      commission: 0.00
    },
    deductions: {
      federalTax: 980.00,
      stateTax: 0.00,
      socialSecurity: 403.00,
      medicare: 0.00,
      healthInsurance: 47.00,
      retirement401k: 0.00,
      other: 0.00
    }
  }
}

export const getPayslipById = (id: string): Payslip | undefined => {
  return payslips.find(payslip => payslip.id === id)
}

export const getPayslipsByEmployee = (employeeId: string): Payslip[] => {
  return payslips.filter(payslip => payslip.employeeId === employeeId)
}

export const getPayslipDetail = (id: string): PayslipDetail | undefined => {
  return payslipDetails[id]
}

export const getLatestPayslip = (employeeId: string): Payslip | undefined => {
  const employeePayslips = getPayslipsByEmployee(employeeId)
  return employeePayslips.sort((a, b) => 
    new Date(b.payDate).getTime() - new Date(a.payDate).getTime()
  )[0]
}

export const calculateYearToDateEarnings = (employeeId: string, year: number = 2025): number => {
  const employeePayslips = getPayslipsByEmployee(employeeId)
  return employeePayslips
    .filter(p => p.period.includes(year.toString()))
    .reduce((total, p) => total + p.grossPay, 0)
}

export const calculateYearToDateDeductions = (employeeId: string, year: number = 2025): number => {
  const employeePayslips = getPayslipsByEmployee(employeeId)
  return employeePayslips
    .filter(p => p.period.includes(year.toString()))
    .reduce((total, p) => total + p.deductions, 0)
}
