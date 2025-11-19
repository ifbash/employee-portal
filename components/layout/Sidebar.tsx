// components/layout/Sidebar.tsx
'use client'

import { FileText, Calendar, Clock, DollarSign, Heart, Users, LayoutDashboard, BookOpen, Headphones, Award, GraduationCap, Megaphone, Receipt } from 'lucide-react'
import { useRole } from '@/lib/hooks/useRole'

interface SidebarProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ currentSection, onSectionChange }: SidebarProps) {
  const { role } = useRole()


  const navItems = [
{ id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
{ id: 'documents', label: 'Employee Documents', icon: FileText },
{ id: 'policies', label: 'HR Policies', icon: BookOpen },
{ id: 'calendar', label: 'Calendar & Leave', icon: Calendar },
{ id: 'timesheet', label: 'Timesheet', icon: Clock },
{ id: 'payslips', label: 'Payslips', icon: DollarSign },
{ id: 'benefits', label: 'Benefits & Insurance', icon: Heart },
{ id: 'reimbursements', label: 'Reimbursements', icon: Receipt },
{ id: 'helpdesk', label: 'Help Desk', icon: Headphones },
{ id: 'appreciate', label: 'Appreciate', icon: Award },
{ id: 'learning', label: 'Learning & Training', icon: GraduationCap },
{ id: 'announcements', label: 'Announcements', icon: Megaphone },
  ]

  const managerItems = [
    { id: 'team', label: 'Team Management', icon: Users },
  ]

  const allItems = role === 'employee' ? navItems : [...navItems, ...managerItems]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700">
      <div className="p-6 border-b border-gray-200 dark:border-slate-700">
        <div className="flex items-center gap-2 text-primary text-2xl font-semibold">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
          Portal
        </div>
      </div>

      <div className="p-4 mx-4 my-4 bg-cream-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700">
        <div className="font-semibold">John Doe</div>
        <div className="text-sm text-gray-600 dark:text-slate-500">john.doe@company.com</div>
        <div className="mt-2 inline-block px-3 py-1 bg-primary text-white text-xs rounded-full">
          {role === 'employee' ? 'Employee' : role === 'manager' ? 'Manager' : 'HR Admin'}
        </div>
      </div>

      <nav className="p-4">
        {allItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 cursor-pointer transition-all ${
                currentSection === item.id
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
