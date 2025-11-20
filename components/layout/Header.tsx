'use client'
import Link from 'next/link'
import { Bell, Sun, Moon, AppWindow, User } from 'lucide-react'
import { useRole } from '@/lib/context/RoleContext'
import { useState } from 'react'

interface HeaderProps {
  onAllAppsClick: () => void
  currentSection: string
}

export default function Header({ onAllAppsClick, currentSection }: HeaderProps) {
  const { role, setRole } = useRole()
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => {
    setIsDark(v => !v)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/95 dark:bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/85 transition">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[56px] px-4">
        {/* Logo + All Apps button */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex-shrink-0">
            <img src="/images/logo.png" alt="Company Logo" className="h-10 w-auto" />
          </Link>
          <button
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Open App Navigator"
            onClick={onAllAppsClick}
            title="All Applications"
          >
            <AppWindow size={24} className="text-violet-700" />
          </button>
          <div className="ml-4 text-2xl font-bold text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text">
            {currentSection}
          </div>
        </div>
        {/* Right menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="ml-3">
            <button className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center border border-slate-200 dark:border-slate-600">
              <User size={20} className="text-slate-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
