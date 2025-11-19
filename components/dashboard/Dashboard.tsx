'use client'
 
import { useRole } from '@/lib/context/RoleContext'
import Card from '../ui/Card'
import { Calendar, Clock, DollarSign, Heart, TrendingUp, AlertCircle, Users } from 'lucide-react'
 
export default function Dashboard() {
  const { role } = useRole()
 
  // Quick Actions
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
 
  // Stats Cards
  const employeeStats = [
    {
      title: 'Leave Balance',
      value: '15 days',
      description: 'Available leave remaining this year',
      icon: TrendingUp
    },
    {
      title: 'Hours This Week',
      value: '38.5 hrs',
      description: 'Target: 40 hours per week',
      icon: Clock
    },
    {
      title: 'Pending Approvals',
      value: '2',
      description: 'Leave requests awaiting approval',
      icon: AlertCircle
    },
  ]
 
  const managerStats = [
    ...employeeStats,
    {
      title: 'Team Size',
      value: '12',
      description: 'Direct reports under your management',
      icon: Users
    },
  ]
 
  const stats = role === 'employee' ? employeeStats : managerStats
 
  // Recent Activities
  const activities = [
    {
      id: '1',
      date: 'Nov 15, 2025',
      activity: 'Annual Leave Request',
      type: 'Leave',
      status: 'pending' as const
    },
    {
      id: '2',
      date: 'Nov 12, 2025',
      activity: 'Timesheet Submitted',
      type: 'Timesheet',
      status: 'approved' as const
    },
    {
      id: '3',
      date: 'Nov 10, 2025',
      activity: 'October Payslip',
      type: 'Payroll',
      status: 'approved' as const
    },
    {
      id: '4',
      date: 'Nov 8, 2025',
      activity: 'WFH Request',
      type: 'Leave',
      status: 'approved' as const
    },
    {
      id: '5',
      date: 'Nov 5, 2025',
      activity: 'Document Upload',
      type: 'Documents',
      status: 'approved' as const
    },
  ]
 
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }
 
  return (
<div>
      {/* Quick Actions */}
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
 
      {/* Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
<Card key={idx}>
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-gray-700 dark:text-gray-300">{stat.title}</h3>
<div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
<Icon size={20} />
</div>
</div>
<div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
<p className="text-sm text-gray-600 dark:text-slate-400">{stat.description}</p>
</Card>
          )
        })}
</div>
 
      {/* Recent Activities */}
<Card>
<h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b dark:border-slate-700">
<th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
<th className="text-left py-3 px-4 font-semibold text-sm">Activity</th>
<th className="text-left py-3 px-4 font-semibold text-sm">Type</th>
<th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
</tr>
</thead>
<tbody>
              {activities.map((activity) => (
<tr 
                  key={activity.id} 
                  className="border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
>
<td className="py-3 px-4">{activity.date}</td>
<td className="py-3 px-4">{activity.activity}</td>
<td className="py-3 px-4">{activity.type}</td>
<td className="py-3 px-4">
<span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
</span>
</td>
</tr>
              ))}
</tbody>
</table>
</div>
</Card>
</div>
  )
}