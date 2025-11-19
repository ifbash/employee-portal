// components/calendar/LeaveList.tsx
'use client'

import Card from '../ui/Card'

interface LeaveRequest {
  id: string
  startDate: string
  endDate: string
  type: string
  status: 'pending' | 'approved' | 'rejected'
  reason?: string
}

export default function LeaveList() {
  const leaveRequests: LeaveRequest[] = [
    {
      id: '1',
      startDate: 'Dec 24, 2025',
      endDate: 'Dec 26, 2025',
      type: 'Annual Leave',
      status: 'approved',
      reason: 'Christmas Break'
    },
    {
      id: '2',
      startDate: 'Dec 31, 2025',
      endDate: 'Dec 31, 2025',
      type: 'Annual Leave',
      status: 'pending',
      reason: "New Year's Eve"
    },
    {
      id: '3',
      startDate: 'Nov 15, 2025',
      endDate: 'Nov 15, 2025',
      type: 'Work From Home',
      status: 'approved',
      reason: 'Personal appointment'
    },
    {
      id: '4',
      startDate: 'Nov 8, 2025',
      endDate: 'Nov 8, 2025',
      type: 'Sick Leave',
      status: 'approved',
      reason: 'Medical appointment'
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  return (
    <Card>
      <h3 className="text-xl font-semibold mb-4">My Leave Requests</h3>
      <div className="space-y-3">
        {leaveRequests.map((leave) => (
          <div
            key={leave.id}
            className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 hover:border-primary transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-semibold text-gray-900 dark:text-gray-100">
                  {leave.startDate === leave.endDate 
                    ? leave.startDate 
                    : `${leave.startDate} - ${leave.endDate}`
                  }
                </div>
                <div className="text-sm text-gray-600 dark:text-slate-400 mt-1">
                  {leave.type}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(leave.status)}`}>
                {getStatusLabel(leave.status)}
              </span>
            </div>
            {leave.reason && (
              <div className="text-sm text-gray-600 dark:text-slate-400 mt-2">
                <span className="font-medium">Reason:</span> {leave.reason}
              </div>
            )}
          </div>
        ))}
      </div>

      {leaveRequests.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-slate-400">
          <p>No leave requests found</p>
          <p className="text-sm mt-2">Click "Request Leave" to submit a new request</p>
        </div>
      )}
    </Card>
  )
}
