'use client'

import { useRole } from '@/lib/hooks/useRole'
import Card from '../ui/Card'
import { Calendar, Clock, DollarSign, Heart, TrendingUp, AlertCircle, Users } from 'lucide-react'

export default function Dashboard() {
  const { role } = useRole()

  const quickActions = [
    {
      icon: Calendar,
      label: 'Request Leave',
      description: 'Apply in seconds and track approvals.',
      onClick: () => alert('Request Leave clicked')
    },
    {
      icon: Clock,
      label: 'Log Hours',
      description: 'Submit and edit your timesheet easily.',
      onClick: () => alert('Log Hours clicked')
    },
    {
      icon: DollarSign,
      label: 'Payslips',
      description: 'View, download, or share salary docs.',
      onClick: () => alert('Payslips clicked')
    },
    {
      icon: Heart,
      label: 'Benefits',
      description: 'Explore your insurance and perks.',
      onClick: () => alert('Benefits clicked')
    },
  ]

  // Stat Cards: Add/modify these for each role
  const employeeStats = [
    {
      title: 'Leave Balance',
      value: '15 days',
      hint: 'Updated live',
      icon: TrendingUp,
      accent: 'from-cyan-300 to-brand'
    },
    {
      title: 'This Week',
      value: '38.5 hrs',
      hint: 'Target 40 hrs',
      icon: Clock,
      accent: 'from-violet-200 to-brand'
    },
    {
      title: 'Approvals',
      value: '2 Pending',
      hint: 'You have new actions',
      icon: AlertCircle,
      accent: 'from-yellow-200 to-brand'
    },
  ]

  const managerStats = [
    ...employeeStats,
    {
      title: 'Team Size',
      value: '12',
      hint: 'Direct reports',
      icon: Users,
      accent: 'from-green-200 to-brand'
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
      status: 'pending'
    },
    {
      id: '2',
      date: 'Nov 12, 2025',
      activity: 'Timesheet Submitted',
      type: 'Timesheet',
      status: 'approved'
    },
    {
      id: '3',
      date: 'Nov 10, 2025',
      activity: 'October Payslip',
      type: 'Payroll',
      status: 'approved'
    },
    {
      id: '4',
      date: 'Nov 8, 2025',
      activity: 'WFH Request',
      type: 'Leave',
      status: 'approved'
    },
    {
      id: '5',
      date: 'Nov 5, 2025',
      activity: 'Document Upload',
      type: 'Documents',
      status: 'approved'
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-900'
      case 'approved':
        return 'bg-emerald-100 text-emerald-900'
      case 'rejected':
        return 'bg-red-100 text-red-900'
      default:
        return 'bg-slate-100 text-gray-700'
    }
  }

  return (
    <div className="w-full px-2 md:px-6 py-6 max-w-7xl mx-auto">
      {/* Quick Actions */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-5 text-brand">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action, idx) => {
            const Icon = action.icon
            return (
              <button
                key={idx}
                onClick={action.onClick}
                className="group bg-gradient-to-r from-brand via-cyan-400 to-brand-light
                  rounded-xl p-4 h-full flex flex-col items-center shadow-md hover:scale-[1.04] transition-all duration-150 focus:outline-none"
              >
                <span className="w-12 h-12 bg-white flex items-center justify-center text-brand rounded-full shadow group-hover:bg-brand-light group-hover:text-white transition-all">
                  <Icon size={26} />
                </span>
                <span className="mt-3 text-lg font-semibold">{action.label}</span>
                <p className="text-xs text-slate-800/80 mt-1 text-center max-w-[130px]">{action.description}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card
              key={idx}
              className={`rounded-2xl p-6 flex flex-col gap-2 shadow-md from-white bg-gradient-to-br ${stat.accent}`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[1.06rem] text-brand font-bold">{stat.title}</span>
                <span className="p-2 bg-gradient-to-tr from-brand via-cyan-300 to-white rounded-lg shadow text-white text-lg">
                  <Icon size={24} />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-brand mt-2 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.hint}</div>
            </Card>
          )
        })}
      </div>

      {/* Recent Activities */}
      <Card className="rounded-2xl p-0 overflow-hidden shadow-md">
        <div className="bg-gradient-to-tr from-brand-light via-sky-100 to-white px-6 py-4">
          <h3 className="text-xl font-bold text-brand">Recent Activity</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead>
              <tr className="text-brand uppercase text-xs font-bold tracking-widest border-b">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Activity</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-cyan-50 transition">
                  <td className="py-2 px-4">{activity.date}</td>
                  <td className="py-2 px-4">{activity.activity}</td>
                  <td className="py-2 px-4">{activity.type}</td>
                  <td className="py-2 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(activity.status)}`}>
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
