// components/layout/RoleSelector.tsx
'use client'

import { useRole } from '@/lib/context/RoleContext'

export default function RoleSelector() {
  const { role, setRole } = useRole()

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value as any)}
      className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors cursor-pointer"
    >
      <option value="employee">View as: Employee</option>
      <option value="manager">View as: Manager</option>
      <option value="hr">View as: HR Admin</option>
    </select>
  )
}
