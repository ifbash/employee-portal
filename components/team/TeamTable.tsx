// components/team/TeamTable.tsx
'use client'

interface TeamMember {
  id: string
  name: string
  position: string
  department: string
  leaveBalance: string
  status: 'active' | 'on-leave'
}

interface TeamTableProps {
  members: TeamMember[]
}

export default function TeamTable({ members }: TeamTableProps) {
  const getStatusColor = (status: string) => {
    return status === 'active'
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  }

  const getStatusLabel = (status: string) => {
    return status === 'active' ? 'Active' : 'On Leave'
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b dark:border-slate-700">
            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">
              Name
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">
              Position
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">
              Department
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">
              Leave Balance
            </th>
            <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr
              key={member.id}
              className="border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              <td className="py-3 px-4 text-gray-900 dark:text-gray-100">
                {member.name}
              </td>
              <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                {member.position}
              </td>
              <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                {member.department}
              </td>
              <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                {member.leaveBalance}
              </td>
              <td className="py-3 px-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                  {getStatusLabel(member.status)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {members.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-slate-400">
          <p>No team members found</p>
        </div>
      )}
    </div>
  )
}
