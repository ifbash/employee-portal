// components/layout/Header.tsx
'use client'

import { Bell } from 'lucide-react'
import RoleSelector from './RoleSelector'

interface HeaderProps {
  currentSection: string
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
}

export default function Header({ currentSection }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
        {sectionTitles[currentSection]}
      </h1>
      <div className="flex items-center gap-4">
        <RoleSelector />
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
          <Bell size={20} />
          <span className="hidden sm:inline">Notifications</span>
          <span className="bg-white text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            3
          </span>
        </button>
      </div>
    </header>
  )
}
