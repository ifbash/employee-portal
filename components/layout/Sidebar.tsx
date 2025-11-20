'use client'

import { FileText, Calendar, Clock, DollarSign, Heart, Users, LayoutDashboard, BookOpen, Headphones, Award, GraduationCap, Megaphone, Receipt, X } from 'lucide-react'
import { useRole } from '@/lib/context/RoleContext'

interface SidebarProps {
  currentSection: string
  onSectionChange: (section: string) => void
  isOpen: boolean
  onClose: () => void
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

export default function Sidebar({ currentSection, onSectionChange, isOpen, onClose }: SidebarProps) {
  const { role } = useRole()
  
  const allItems = role === 'employee' ? navItems : [...navItems, ...managerItems]

  const handleItemClick = (sectionId: string) => {
    onSectionChange(sectionId)
    // Removed onClose() - sidebar stays open
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sliding Menu */}
      <aside 
        className={`fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <LayoutDashboard size={18} />
            </div>
            <div>
              <h1 className="text-lg font-bold">Employee Portal</h1>
              <p className="text-xs text-slate-400">TechCorp Inc.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <p className="text-xs font-semibold text-slate-400 px-3 mb-3">Navigation</p>
          <ul className="space-y-1">
            {allItems.map((item) => {
              const Icon = item.icon
              const isActive = currentSection === item.id
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      isActive
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
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
