// components/dashboard/QuickActions.tsx
'use client'

import Card from '../ui/Card'
import { Calendar, Clock, DollarSign, Heart } from 'lucide-react'

export default function QuickActions() {
  const quickActions = [
    { 
      icon: Calendar, 
      label: 'Request Leave', 
      description: 'Apply for time off',
      onClick: () => console.log('Request Leave clicked')
    },
    { 
      icon: Clock, 
      label: 'Log Hours', 
      description: 'Submit timesheet',
      onClick: () => console.log('Log Hours clicked')
    },
    { 
      icon: DollarSign, 
      label: 'View Payslips', 
      description: 'Download pay stubs',
      onClick: () => console.log('View Payslips clicked')
    },
    { 
      icon: Heart, 
      label: 'Benefits', 
      description: 'Insurance & perks',
      onClick: () => console.log('Benefits clicked')
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {quickActions.map((action, idx) => {
        const Icon = action.icon
        return (
          <Card 
            key={idx} 
            className="text-center hover:border-primary cursor-pointer transition-all"
            onClick={action.onClick}
          >
            <div className="w-12 h-12 mx-auto mb-3 bg-primary text-white rounded-full flex items-center justify-center">
              <Icon size={24} />
            </div>
            <h3 className="font-semibold mb-1">{action.label}</h3>
            <p className="text-sm text-gray-600 dark:text-slate-400">{action.description}</p>
          </Card>
        )
      })}
    </div>
  )
}
