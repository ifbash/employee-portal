'use client'

import { Bell } from 'lucide-react'
import RoleSelector from './RoleSelector'

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

export default function Header({ currentSection, onHamburger }: { currentSection: string, onHamburger?: () => void }) {
  return (
    <header
      className="
        sticky top-0 z-30
        px-3 md:px-8 py-4
        flex justify-between items-center
        bg-gradient-to-r from-[#60a5fa] via-[#32B8C6] to-[#a78bfa]
        shadow-lg
        mb-0
      "
      id="main-header"
    >
      <div className="flex items-center gap-3">
        {/* Hamburger (mobile) */}
        {onHamburger && (
          <button
            className="md:hidden p-2 rounded-lg text-white focus:outline-none"
            onClick={onHamburger}
            aria-label="Open sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <h1 className="
          text-xl md:text-3xl font-extrabold text-white drop-shadow-lg tracking-tighter
          select-none font-[Nunito_Sans,sans-serif] truncate whitespace-nowrap
        ">
          {sectionTitles[currentSection] || ''}
        </h1>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <RoleSelector />
        <button
          className="
            relative flex items-center gap-2 px-3 py-2
            bg-white/10 text-white rounded-xl hover:bg-white/20
            transition-colors shadow
          "
          aria-label="View notifications"
        >
          <Bell size={20} />
          <span className="hidden sm:inline font-medium">Notifications</span>
          <span className="absolute -top-2 -right-2 bg-white text-brand rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold border border-brand/10 shadow">
            3
          </span>
        </button>
      </div>
    </header>
  )
}
