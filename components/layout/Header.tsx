'use client'
import Link from 'next/link'
import {
  Bell, Sun, Moon, User, ChevronDown,
  Calendar, Clock, Users, DollarSign, Heart, FileText, ClipboardCheck,
  FolderOpen, GraduationCap, Headphones, Megaphone, Star, Globe
} from 'lucide-react'
import { useState } from 'react'

const menuData = [
  {
    id: 'work',
    label: 'WORK',
    modules: [
      { label: 'Attendance', icon: Clock, href: '/attendance' },
      { label: 'Calendar & Leave', icon: Calendar, href: '/calendar' },
      { label: 'Timesheet', icon: Clock, href: '/timesheet' },
      { label: 'Holiday List', icon: Calendar, href: '/holidays' },
      { label: 'Team Management', icon: Users, href: '/team' }
    ]
  },
  {
    id: 'pay',
    label: 'PAY & BENEFITS',
    modules: [
      { label: 'Payslips', icon: DollarSign, href: '/payslips' },
      { label: 'Expense Claims', icon: ClipboardCheck, href: '/expenses' },
      { label: 'Reimbursements', icon: ClipboardCheck, href: '/reimbursements' },
      { label: 'Benefits & Insurance', icon: Heart, href: '/benefits' }
    ]
  },
  {
    id: 'docs',
    label: 'DOCS & REQUESTS',
    modules: [
      { label: 'Documents', icon: FileText, href: '/documents' },
      { label: 'Policies', icon: FileText, href: '/policies' },
      { label: 'Forms & Requests', icon: ClipboardCheck, href: '/forms' },
      { label: 'FAQ', icon: ClipboardCheck, href: '/faq' }
    ]
  },
  {
    id: 'resources',
    label: 'RESOURCES & LEARNING',
    modules: [
      { label: 'Resource Library', icon: FolderOpen, href: '/resources' },
      { label: 'Learning & Training', icon: GraduationCap, href: '/learning' }
    ]
  },
  {
    id: 'support',
    label: 'SUPPORT',
    modules: [
      { label: 'IT Help Desk', icon: Headphones, href: '/helpdesk' },
      { label: 'Assets', icon: FolderOpen, href: '/assets' },
      { label: 'Feedback', icon: Megaphone, href: '/feedback' }
    ]
  },
  {
    id: 'engage',
    label: 'ENGAGE & ANNOUNCE',
    modules: [
      { label: 'Announcements', icon: Megaphone, href: '/announcements' },
      { label: 'Company News', icon: Globe, href: '/news' },
      { label: 'Appreciate', icon: Star, href: '/appreciate' }
    ]
  },
  {
    id: 'profile',
    label: 'PROFILE',
    modules: [
      { label: 'Dashboard', icon: User, href: '/dashboard' },
      { label: 'My Profile', icon: User, href: '/profile' },
      { label: 'Directory', icon: Users, href: '/directory' }
    ]
  }
]

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const toggleTheme = () => {
    setIsDark(v => !v)
    document.documentElement.classList.toggle('dark')
  }

  const menuWidth = "175px" // exact visual size for menu items
  const menuHeight = "44px"
  const iconSize = 22

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 dark:bg-slate-900/80">
      <div className="flex items-center justify-between h-[56px] px-5">
        {/* Logo: aligned left, no extra portal text */}
        <Link href="/dashboard" className="h-12 flex items-center mr-3">
          <img src="/images/logo.png" alt="Company Logo" className="h-10 w-auto" />
        </Link>
        {/* Menu: ALL SAME SIZE, gradient text, no bg */}
        <nav className="flex items-center gap-[10px] justify-center flex-1">
          {menuData.map(group => (
            <div key={group.id} className="relative"
              onMouseEnter={() => setOpenMenu(group.id)}
              onMouseLeave={() => setOpenMenu(null)}
              style={{ width: menuWidth, minWidth: menuWidth, height: menuHeight, display: "flex", justifyContent: "center" }}
            >
              <button
                type="button"
                style={{ width: menuWidth, height: menuHeight, minWidth: menuWidth }}
                className={`flex items-center justify-center gap-2 text-base font-extrabold uppercase transition
                  border-none outline-none
                  text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600
                  ${openMenu === group.id ? "opacity-90" : "opacity-100"}
                `}
              >
                {group.label}
                <ChevronDown size={18} />
              </button>
              {/* Dropdown: same width, column listing, gradient text */}
              {openMenu === group.id && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 mt-2 rounded-xl shadow-lg border bg-white dark:bg-slate-900 z-50"
                  style={{ width: menuWidth, minWidth: menuWidth, padding: "7px 0" }}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <div className="flex flex-col">
                    {group.modules.map(mod =>
                      <Link
                        key={mod.label}
                        href={mod.href}
                        className="flex items-center gap-3 px-3 py-[10px] hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-cyan-700 hover:via-blue-700 hover:to-violet-900 font-extrabold text-base transition"
                        onClick={() => setOpenMenu(null)}
                        style={{ width: menuWidth }}
                      >
                        <mod.icon size={iconSize} className="mr-1" />
                        <span>{mod.label}</span>
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* Icons right, round, gradient, no border, compact sizing */}
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme}
            className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white"
            aria-label="Toggle theme"
            style={{ minWidth: "40px", minHeight: "40px" }}
          >
            {isDark ? <Sun size={20}/> : <Moon size={20}/> }
          </button>
          <button className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white relative" style={{ minWidth: "40px", minHeight: "40px" }}>
            <Bell size={20}/>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"/>
          </button>
          <Link href="/profile">
            <button className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white" style={{ minWidth: "40px", minHeight: "40px" }}>
              <User size={20}/>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
