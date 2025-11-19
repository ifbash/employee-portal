// lib/data/benefits.ts

export interface Benefit {
  id: string
  name: string
  type: string
  coverage: string
  premium: string
  icon: string
}

export const benefits: Benefit[] = [
  {
    id: '1',
    name: 'Health Insurance',
    type: 'Medical',
    coverage: 'Employee + Family',
    premium: '$350/month (70% employer paid)',
    icon: 'heart'
  },
  {
    id: '2',
    name: 'Vision Insurance',
    type: 'Vision',
    coverage: 'Employee Only',
    premium: '$25/month (100% employer paid)',
    icon: 'eye'
  },
  {
    id: '3',
    name: 'Dental Insurance',
    type: 'Dental',
    coverage: 'Employee + Family',
    premium: '$50/month (80% employer paid)',
    icon: 'smile'
  },
  {
    id: '4',
    name: 'Life Insurance',
    type: 'Life',
    coverage: '$500,000',
    premium: 'Fully employer paid',
    icon: 'shield'
  },
  {
    id: '5',
    name: '401(k) Retirement',
    type: 'Retirement',
    coverage: 'Employer Match: 4%',
    premium: 'Current Balance: $45,230',
    icon: 'dollar-sign'
  },
  {
    id: '6',
    name: 'Disability Insurance',
    type: 'Disability',
    coverage: 'Short & Long Term',
    premium: 'Fully employer paid',
    icon: 'shield-check'
  },
  {
    id: '7',
    name: 'FSA Account',
    type: 'Healthcare Spending',
    coverage: 'Up to $3,050/year',
    premium: 'Pre-tax contribution',
    icon: 'credit-card'
  },
  {
    id: '8',
    name: 'Employee Assistance',
    type: 'Mental Health',
    coverage: 'Counseling & Support',
    premium: 'Fully employer paid',
    icon: 'heart-handshake'
  },
  {
    id: '9',
    name: 'Gym Membership',
    type: 'Wellness',
    coverage: 'Local gym access',
    premium: '$30/month (50% discount)',
    icon: 'dumbbell'
  },
  {
    id: '10',
    name: 'Education Reimbursement',
    type: 'Professional Development',
    coverage: 'Up to $5,000/year',
    premium: 'Courses & certifications',
    icon: 'graduation-cap'
  },
  {
    id: '11',
    name: 'Commuter Benefits',
    type: 'Transportation',
    coverage: 'Transit & parking',
    premium: 'Pre-tax deduction',
    icon: 'bus'
  },
  {
    id: '12',
    name: 'Other Perks',
    type: 'Additional Benefits',
    coverage: '• Remote work flexibility\n• Unlimited PTO\n• Company events',
    premium: 'Various benefits included',
    icon: 'gift'
  }
]

export const getBenefitById = (id: string): Benefit | undefined => {
  return benefits.find(benefit => benefit.id === id)
}

export const getBenefitsByType = (type: string): Benefit[] => {
  return benefits.filter(benefit => benefit.type === type)
}

export const getBenefitTypes = (): string[] => {
  return Array.from(new Set(benefits.map(benefit => benefit.type)))
}
