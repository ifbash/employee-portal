'use client'

import { useState, useRef, useEffect } from 'react'
import { Bell, Moon, Sun, Search, ChevronDown } from 'lucide-react'
import { useRole } from '@/lib/context/RoleContext'

interface ModernHeaderProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

const servicesMenu = {
  categories: [
    {
      id: 'work',
      label: 'Work',
      icon: '💼',
      items: [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'timesheet', label: 'Timesheet' },
        { id: 'calendar', label: 'Calendar & Leave' }
      ]
    },
    {
      id: 'pay',
      label: 'Pay & Benefits',
      icon: '💰',
      items: [
        { id: 'payslips', label: 'Payslips' },
        { id: 'benefits', label: 'Benefits & Insurance' }
      ]
    },
    {
      id: 'docs',
      label: 'Docs & Requests',
      icon: '📄',
      items: [
        { id: 'documents', label: 'My Documents' },
        { id: 'reimbursements', label: 'Reimbursements' }
      ]
    },
    {
      id: 'resources',
      label: 'Resources & Learning',
      icon: '📚',
      items: [
        { id: 'policies', label: 'HR Policies' },
        { id: 'learning', label: 'Learning & Training' }
      ]
    },
    {
      id: 'support',
      label: 'Support',
      icon: '🎧',
      items: [
        { id: 'helpdesk', label: 'Help Desk' }
      ]
    },
    {
      id: 'engage',
      label: 'Engage & Announce',
      icon: '📢',
      items: [
        { id: 'announcements', label: 'Announcements' },
        { id: 'appreciate', label: 'Appreciate' },
        { id: 'team', label: 'Team Management' }
      ]
    }
  ]
}

export default function ModernHeader({ currentSection, onSectionChange }: ModernHeaderProps) {
  const { role, setRole } = useRole()
  const [isDark, setIsDark] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsServicesOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700" ref={menuRef}>
      {/* Single Line Navigation */}
      <div className="px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left Side: Logo + My Services */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">EP</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">Employee Portal</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">TechCorp Inc.</p>
              </div>
            </div>

            {/* My Services Button */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="px-6 py-2 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:bg-slate-800 dark:hover:from-slate-700 dark:hover:to-slate-700 border border-gray-200 dark:border-slate-700 text-sm font-semibold rounded-full flex items-center gap-2 shadow hover:shadow-lg transition-all duration-300"
              >
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
                  MY SERVICES
                </span>
                <ChevronDown
                  size={16}
                  className={"bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent transition-transform duration-300 " + (isServicesOpen ? "rotate-180" : "")}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden animate-fadeIn">
                  <div className="grid grid-cols-3 gap-4 p-6">
                    {servicesMenu.categories.map((category) => (
                      <div key={category.id} className="space-y-2">
                        {/* Category Header */}
                        <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-slate-700">
                          <span className="text-xl">{category.icon}</span>
                          <h3 className="font-bold text-sm text-gray-900 dark:text-white">{category.label}</h3>
                        </div>
                        {/* Category Items */}
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleItemClick(item.id)}
                              className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-300 ${
                                currentSection === item.id
                                  ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-700 border border-blue-200 dark:border-cyan-700 shadow-lg'
                                  : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-slate-700 dark:hover:to-slate-700 hover:border-blue-100 dark:hover:border-cyan-800'
                              }`}
                            >
                              <div className="font-medium text-sm bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                {item.label}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="flex items-center gap-2">
            {/* Role Selector */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as 'employee' | 'manager' | 'hr')}
              className="px-3 py-1.5 text-sm border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 hover:border-blue-300 dark:hover:border-cyan-600 transition-colors duration-300"
            >
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
              <option value="hr">HR</option>
            </select>
            {/* Search */}
            <button className="p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-slate-700 dark:hover:to-slate-700 rounded-lg transition-all duration-300">
              <Search size={18} className="text-gray-600 dark:text-gray-400" />
            </button>
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-slate-700 dark:hover:to-slate-700 rounded-lg transition-all duration-300">
              {isDark ? <Sun size={18} className="text-gray-400" /> : <Moon size={18} className="text-gray-600" />}
            </button>
            {/* Notifications */}
            <button className="p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-slate-700 dark:hover:to-slate-700 rounded-lg relative transition-all duration-300">
              <Bell size={18} className="text-gray-600 dark:text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            {/* User Profile */}
            <div className="flex items-center gap-2 pl-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <span className="text-white font-semibold text-sm">J</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
