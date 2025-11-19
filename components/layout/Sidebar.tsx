'use client'

import {
  FileText, Calendar, Clock, DollarSign, Heart, Users, LayoutDashboard,
  BookOpen, Headphones, Award, GraduationCap, Megaphone, Receipt, LogOut
} from 'lucide-react'
import { useRole } from '@/lib/hooks/useRole'

interface SidebarProps {
  currentSection: string
  onSectionChange: (section: string) => void
  className?: string // For mobile toggle/layout control
}

export default function Sidebar({ currentSection, onSectionChange, className = "" }: SidebarProps) {
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
    { id: 'logout', label: 'Leave ifBash', icon: LogOut },
  ];
  const managerItems = [
    { id: 'team', label: 'Team Management', icon: Users }
  ];
  const allItems = role === 'employee'
    ? navItems
    : [...navItems, ...managerItems]

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen w-56 z-30
        bg-gradient-to-b from-[#60a5fa] via-[#fcfcf9] to-[#a78bfa]
        dark:from-[#1A6873] dark:via-[#262828] dark:to-[#664fa5]
        border-r border-slate-200 dark:border-slate-700 shadow-md
        flex flex-col py-4 px-1
        overflow-y-auto scrollbar-thin scrollbar-thumb-brand/30
        transition-transform duration-200
        ${className}
      `}
    >
      <nav className="flex-1 flex flex-col gap-0.5 pt-2">
        {allItems.map((item) => {
          const Icon = item.icon
          const active = currentSection === item.id
          return (
            <button
              type="button"
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`
                group flex items-center gap-3 px-3 py-2 rounded-lg w-full font-semibold text-[1rem] tracking-tight
                transition-all duration-120 cursor-pointer
                ${active
                  ? 'bg-[#32B8C6] text-white shadow'
                  : 'hover:bg-[#e6f9fc] dark:hover:bg-[#1A6873]/40 text-brand dark:text-white'
                }
                font-[Inter,sans-serif]
              `}
              style={{
                letterSpacing: '0.05em',
                fontWeight: active ? 700 : 500,
              }}
            >
              <span className={`
                p-1.5 rounded-md transition
                ${active
                ? 'bg-white text-brand'
                : 'bg-brand/10 group-hover:bg-brand/20'
                }
              `}>
                <Icon size={19} />
              </span>
              <span className="truncate">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
