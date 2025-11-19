// lib/data/policies.ts

export interface Policy {
  id: string
  title: string
  category: string
  icon: string
  description: string
  content: string
  lastUpdated: string
  version: string
  nextReview: string
}

export const policies: Policy[] = [
  {
    id: '1',
    title: 'Code of Conduct',
    category: 'Ethics & Behavior',
    icon: 'book-open',
    description: 'Employee behavior and ethics guidelines',
    content: 'This policy outlines the expected behavior and ethical standards for all employees. All employees are expected to conduct themselves in a professional manner, treat colleagues with respect, and maintain the highest standards of integrity in all business dealings.',
    lastUpdated: 'November 2025',
    version: '2.0',
    nextReview: 'May 2026'
  },
  {
    id: '2',
    title: 'Leave Policy',
    category: 'Time Off',
    icon: 'briefcase',
    description: 'Annual leave, sick leave, and WFH policies',
    content: 'Employees are entitled to various types of leave including annual leave, sick leave, and work-from-home arrangements. All leave requests must be submitted through the employee portal and approved by your direct manager.',
    lastUpdated: 'November 2025',
    version: '1.8',
    nextReview: 'May 2026'
  },
  {
    id: '3',
    title: 'Remote Work Policy',
    category: 'Work Arrangements',
    icon: 'home',
    description: 'Guidelines for working from home',
    content: 'Remote work is permitted with manager approval. Employees working remotely must maintain regular communication with their team, be available during core business hours, and ensure they have a suitable home office setup.',
    lastUpdated: 'October 2025',
    version: '3.1',
    nextReview: 'April 2026'
  },
  {
    id: '4',
    title: 'Data Security',
    category: 'Security & Compliance',
    icon: 'lock',
    description: 'Information security and data protection',
    content: 'All employees must protect confidential information and company data. This includes using strong passwords, not sharing login credentials, reporting security incidents immediately, and following all data handling procedures.',
    lastUpdated: 'November 2025',
    version: '2.5',
    nextReview: 'February 2026'
  },
  {
    id: '5',
    title: 'Expense Policy',
    category: 'Financial',
    icon: 'credit-card',
    description: 'Business expense guidelines and reimbursement',
    content: 'Business expenses must be pre-approved and properly documented. All expense claims should be submitted within 30 days with valid receipts. Reimbursement will be processed within two pay periods.',
    lastUpdated: 'September 2025',
    version: '1.6',
    nextReview: 'March 2026'
  },
  {
    id: '6',
    title: 'Anti-Harassment',
    category: 'Workplace Safety',
    icon: 'shield',
    description: 'Workplace harassment prevention policy',
    content: 'We maintain a zero-tolerance policy for harassment of any kind. All employees have the right to work in an environment free from harassment, discrimination, and retaliation. Any incidents should be reported immediately to HR.',
    lastUpdated: 'November 2025',
    version: '2.2',
    nextReview: 'May 2026'
  },
  {
    id: '7',
    title: 'Health & Safety',
    category: 'Workplace Safety',
    icon: 'heart-pulse',
    description: 'Workplace health and safety guidelines',
    content: 'Employee health and safety is our top priority. All employees must follow safety procedures, report hazards, and participate in required safety training. Emergency procedures are posted throughout the workplace.',
    lastUpdated: 'August 2025',
    version: '1.9',
    nextReview: 'February 2026'
  },
  {
    id: '8',
    title: 'Professional Development',
    category: 'Learning & Growth',
    icon: 'graduation-cap',
    description: 'Training and education opportunities',
    content: 'We encourage continuous learning and professional development. Employees may request training courses, certifications, and conference attendance. Educational reimbursement is available up to $5,000 per year.',
    lastUpdated: 'October 2025',
    version: '1.4',
    nextReview: 'April 2026'
  }
]

export const getPolicyById = (id: string): Policy | undefined => {
  return policies.find(policy => policy.id === id)
}

export const getPoliciesByCategory = (category: string): Policy[] => {
  return policies.filter(policy => policy.category === category)
}

export const getPolicyCategories = (): string[] => {
  return Array.from(new Set(policies.map(policy => policy.category)))
}

export const searchPolicies = (query: string): Policy[] => {
  const lowerQuery = query.toLowerCase()
  return policies.filter(policy => 
    policy.title.toLowerCase().includes(lowerQuery) ||
    policy.description.toLowerCase().includes(lowerQuery) ||
    policy.content.toLowerCase().includes(lowerQuery)
  )
}
