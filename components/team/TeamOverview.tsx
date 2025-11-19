'use client'

import Card from '../ui/Card'
import { Users, Clock, Calendar } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  position: string
  department: string
  leaveBalance: string
  status: string
}

export default function TeamOverview() {
  const teamMembers: TeamMember[] = [
    { id: '1', name: 'Sarah Johnson', position: 'Senior Developer', department: 'Engineering', leaveBalance: '12 days', status: 'Active' },
    { id: '2', name: 'Michael Chen', position: 'UX Designer', department: 'Design', leaveBalance: '8 days', status: 'On Leave' },
    { id: '3', name: 'Emily Davis', position: 'QA Engineer', department: 'Engineering', leaveBalance: '15 days', status: 'Active' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold">Team Overview</h3>
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
              <Users size={20} />
            </div>
          </div>
          <div className="text-3xl font-bold text-primary mb-1">12</div>
          <p className="text-sm text-gray-600 dark:text-slate-400">Total team members</p>
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold">Pending Approvals</h3>
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
              <Clock size={20} />
            </div>
          </div>
          <div className="text-3xl font-bold text-primary mb-1">5</div>
          <p className="text-sm text-gray-600 dark:text-slate-400">Leave requests & timesheets</p>
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold">On Leave Today</h3>
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
              <Calendar size={20} />
            </div>
          </div>
          <div className="text-3xl font-bold text-primary mb-1">2</div>
          <p className="text-sm text-gray-600 dark:text-slate-400">Team members currently out</p>
        </Card>
      </div>

      <Card>
        <h3 className="text-xl font-semibold mb-6">Team Members</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-sm">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Position</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Department</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Leave Balance</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id} className="border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="py-3 px-4">{member.name}</td>
                  <td className="py-3 px-4">{member.position}</td>
                  <td className="py-3 px-4">{member.department}</td>
                  <td className="py-3 px-4">{member.leaveBalance}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      member.status === 'Active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {member.status}
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
