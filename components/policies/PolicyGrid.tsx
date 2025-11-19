'use client'

import { useState } from 'react'
import Card from '../ui/Card'
import Modal from '../ui/Modal'
import { BookOpen, Briefcase, Home, Lock, CreditCard, Shield } from 'lucide-react'

interface Policy {
  id: string
  title: string
  icon: any
  description: string
  content: string
}

export default function PolicyGrid() {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null)

  const policies: Policy[] = [
    {
      id: '1',
      title: 'Code of Conduct',
      icon: BookOpen,
      description: 'Employee behavior and ethics guidelines',
      content: 'This policy outlines the expected behavior and ethical standards for all employees...'
    },
    {
      id: '2',
      title: 'Leave Policy',
      icon: Briefcase,
      description: 'Annual leave, sick leave, and WFH policies',
      content: 'Employees are entitled to various types of leave...'
    },
    {
      id: '3',
      title: 'Remote Work Policy',
      icon: Home,
      description: 'Guidelines for working from home',
      content: 'Remote work is permitted with manager approval...'
    },
    {
      id: '4',
      title: 'Data Security',
      icon: Lock,
      description: 'Information security and data protection',
      content: 'All employees must protect confidential information...'
    },
    {
      id: '5',
      title: 'Expense Policy',
      icon: CreditCard,
      description: 'Business expense guidelines and reimbursement',
      content: 'Business expenses must be pre-approved...'
    },
    {
      id: '6',
      title: 'Anti-Harassment',
      icon: Shield,
      description: 'Workplace harassment prevention policy',
      content: 'We maintain a zero-tolerance policy for harassment...'
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy) => {
          const Icon = policy.icon
          return (
            <Card key={policy.id} onClick={() => setSelectedPolicy(policy)} className="cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">{policy.title}</h3>
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                  <Icon size={20} />
                </div>
              </div>
              <p className="text-gray-600 dark:text-slate-400 mb-3">{policy.description}</p>
              <p className="text-sm text-primary">Click to read →</p>
            </Card>
          )
        })}
      </div>

      {selectedPolicy && (
        <Modal isOpen={!!selectedPolicy} onClose={() => setSelectedPolicy(null)} title={selectedPolicy.title}>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">{selectedPolicy.content}</p>
            <h4 className="font-semibold mt-6 mb-2">Professional Conduct</h4>
            <p>All employees are expected to maintain the highest standards of professional conduct at all times.</p>
            <h4 className="font-semibold mt-6 mb-2">Workplace Behavior</h4>
            <p>Employees must treat colleagues, clients, and partners with respect and professionalism.</p>
          </div>
        </Modal>
      )}
    </div>
  )
}
