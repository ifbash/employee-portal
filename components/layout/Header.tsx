'use client'

import { Bell, Moon, Sun, Menu } from 'lucide-react'
import { useRole } from '@/lib/context/RoleContext'
import { useState } from 'react'

interface HeaderProps {
  currentSection: string
  onMenuClick: () => void
}

const sectionTitles: Record<string, string> = {
  dashboard: 'Dashboard',
  documents: 'Employee Documents Hub',
  policies: 'HR Policies & Knowledge Base',
  calendar: 'Calendar & Leave Management',
  timesheet: 'Timesheet',
  payslips: 'Payslips',
  benefits: 'Benefits & Insurance',
  team: 'Team Management',
  reimbursements: 'Reimbursements',
  helpdesk: 'Help Desk',
  appreciate: 'Appreciate',
  learning: 'Learning & Training',
  announcements: 'Announcements',
}

export default function Header({ currentSection, onMenuClick }: HeaderProps) {
  const { role, setRole } = useRole()
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {sectionTitles[currentSection] || 'Dashboard'}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Role Selector */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'employee' | 'manager' | 'hr')}
            className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100"
          >
            <option value="employee">View as: Employee</option>
            <option value="manager">View as: Manager</option>
            <option value="hr">View as: HR</option>
          </select>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <button
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg relative"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
