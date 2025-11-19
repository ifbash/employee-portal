'use client'

import { useRole } from '@/lib/hooks/useRole'

export default function RoleSelector() {
  const { role, setRole } = useRole()

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value as any)}
      className="
        px-4 py-2 border border-brand/30 dark:border-slate-600 rounded-lg
        bg-white dark:bg-slate-800
        text-brand dark:text-white
        font-semibold
        focus:outline-none focus:ring-2 focus:ring-[#32B8C6]
        transition-colors cursor-pointer
        shadow
      "
      aria-label="Choose role"
    >
      <option value="employee">View as: Employee</option>
      <option value="manager">View as: Manager</option>
      <option value="hr">View as: HR Admin</option>
    </select>
  )
}
