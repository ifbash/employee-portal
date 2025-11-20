'use client'

import {
  FileText, Calendar, Clock, DollarSign, Heart, Users, LayoutDashboard, BookOpen,
  Headphones, Award, GraduationCap, Megaphone, Receipt, X
} from 'lucide-react'
import { useRole } from '@/lib/context/RoleContext'

interface SidebarProps {
  currentSection: string
  onSectionChange: (section: string) => void
  isOpen: boolean
  onClose: () => void
  isCollapsed: boolean
}

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

export default function Sidebar({
  currentSection,
  onSectionChange,
  isOpen,
  onClose,
  isCollapsed
}: SidebarProps) {
  const { role } = useRole()
  const allItems = role === 'employee' ? navItems : [...navItems, ...managerItems]

  const handleItemClick = (sectionId: string) => {
    onSectionChange(sectionId)
    onClose()
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`
          fixed left-0 top-0 h-screen bg-white text-gray-800 shadow-2xl z-50 transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'w-16' : 'w-64'}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg flex-shrink-0">
              <LayoutDashboard size={18} />
            </div>
            <div className={`transition-all duration-200 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'}`}>
              <h1 className="text-lg font-bold">Employee Portal</h1>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        {/* Navigation with pure gradient text and compact spacing */}
        <nav className="p-4">
          <ul className="space-y-1">
            {allItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                      transition-all
                      ${isCollapsed ? "justify-center" : ""}
                      group
                      bg-transparent
                      shadow-none
                      border-none
                    `}
                    title={isCollapsed ? item.label : ''}
                    style={{ background: 'none', boxShadow: 'none', border: 'none' }}
                  >
                    <Icon
                      size={20}
                      className="flex-shrink-0 text-gray-400 group-hover:text-violet-700"
                    />
                    <span
                      className={`
                        text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text font-medium
                        group-hover:from-violet-800 group-hover:via-blue-700 group-hover:to-cyan-700
                        transition-all duration-200 whitespace-nowrap
                        ${isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}
                      `}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  )
}
