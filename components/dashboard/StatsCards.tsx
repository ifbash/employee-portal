// components/dashboard/StatsCards.tsx
'use client'

import Card from '../ui/Card'
import { useRole } from '@/lib/hooks/useRole'


interface StatCard {
  title: string
  value: string
  description: string
  icon: string
}

export default function StatsCards() {
  const { role } = useRole()

  const employeeStats: StatCard[] = [
    {
      title: 'Leave Balance',
      value: '15 days',
      description: 'Available leave remaining this year',
      icon: '📊'
    },
    {
      title: 'Hours This Week',
      value: '38.5 hrs',
      description: 'Target: 40 hours per week',
      icon: '⏰'
    },
    {
      title: 'Pending Approvals',
      value: '2',
      description: 'Leave requests awaiting approval',
      icon: '⚠️'
    },
  ]

  const managerStats: StatCard[] = [
    ...employeeStats,
    {
      title: 'Team Size',
      value: '12',
      description: 'Direct reports under your management',
      icon: '👥'
    },
  ]

  const stats = role === 'employee' ? employeeStats : managerStats

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <Card key={idx}>
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300">{stat.title}</h3>
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-xl">
              {stat.icon}
            </div>
          </div>
          <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
          <p className="text-sm text-gray-600 dark:text-slate-400">{stat.description}</p>
        </Card>
      ))}
    </div>
  )
}
