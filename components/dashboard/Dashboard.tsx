'use client'

import { useRole } from '@/lib/hooks/useRole'
import { Calendar, Clock, DollarSign, Heart, TrendingUp, AlertCircle, Users } from 'lucide-react'

export default function Dashboard() {
  const { role } = useRole()

  // Quick Actions
  const quickActions = [
    {
      icon: Calendar,
      label: 'Request Leave',
      description: 'Apply and track approval.',
      onClick: () => alert('Request Leave clicked')
    },
    {
      icon: Clock,
      label: 'Log Hours',
      description: 'Fill your timesheet.',
      onClick: () => alert('Log Hours clicked')
    },
    {
      icon: DollarSign,
      label: 'Payslips',
      description: 'Download and review payslips.',
      onClick: () => alert('Payslips clicked')
    },
    {
      icon: Heart,
      label: 'Benefits',
      description: 'View insurance & perks.',
      onClick: () => alert('Benefits clicked')
    }
  ]

  // Stat Cards
  const employeeStats = [
    {
      title: 'Leave Balance',
      value: '15 days',
      hint: 'Refreshed now',
      icon: TrendingUp
    },
    {
      title: 'Hours This Week',
      value: '38.5 hrs',
      hint: 'Target: 40',
      icon: Clock
    },
    {
      title: 'Pending Approvals',
      value: '2 Pending',
      hint: 'Awaiting action',
      icon: AlertCircle
    },
  ]
  const managerStats = [
    ...employeeStats,
    {
      title: 'Team Size',
      value: '12',
      hint: 'Direct reports',
      icon: Users
    }
  ]
  const stats = role === 'employee' ? employeeStats : managerStats

  // Activities
  const activities = [
    { id: '1', date: 'Nov 15, 2025', activity: 'Annual Leave Request', type: 'Leave', status: 'pending' },
    { id: '2', date: 'Nov 12, 2025', activity: 'Timesheet Submitted', type: 'Timesheet', status: 'approved' },
    { id: '3', date: 'Nov 10, 2025', activity: 'October Payslip', type: 'Payroll', status: 'approved' },
    { id: '4', date: 'Nov 8, 2025', activity: 'WFH Request', type: 'Leave', status: 'approved' },
    { id: '5', date: 'Nov 5, 2025', activity: 'Document Upload', type: 'Documents', status: 'approved' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-900'
      case 'approved': return 'bg-emerald-100 text-emerald-900'
      case 'rejected': return 'bg-red-100 text-red-900'
      default: return 'bg-slate-100 text-gray-700'
    }
  }

  return (
    <div className="w-full px-2 md:px-6 py-6 max-w-7xl mx-auto">
      {/* Quick Actions */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action, idx) => {
            const Icon = action.icon
            return (
              <button
                key={idx}
                onClick={action.onClick}
                className="group rounded-2xl p-6 bg-white border border-gray-100 shadow hover:shadow-lg flex flex-col items-center hover:bg-gray-50 transition-all"
              >
                {/* Gradient Circle Icon */}
                <span className="w-12 h-12 mb-2 bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 flex items-center justify-center rounded-full text-white text-xl group-hover:scale-105 transition">
                  <Icon size={26} />
                </span>
                {/* Gradient Label */}
                <span className="text-base font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:to-cyan-700 transition">
                  {action.label}
                </span>
                <span className="text-xs text-gray-500 mt-2 text-center">{action.description}</span>
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
            <div
              key={idx}
              className="rounded-2xl p-6 flex flex-col gap-2 shadow-md border border-gray-100 bg-white relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text">
                  {stat.title}
                </span>
                <span className="p-2 bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 rounded-lg shadow text-white text-lg">
                  <Icon size={24} />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text mt-2 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.hint}</div>
            </div>
          )
        })}
      </div>

      {/* Recent Activities */}
      <div className="rounded-2xl shadow-md border border-gray-100 bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-white px-6 py-4">
          <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text">
            Recent Activity
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead>
              <tr className="text-gray-500 uppercase text-xs font-bold tracking-widest">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Activity</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-blue-50 transition">
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
      </div>
    </div>
  )
}
