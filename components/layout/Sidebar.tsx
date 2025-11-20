'use client'
import {
  LayoutDashboard, FileText, BookOpen, Calendar, Clock, DollarSign, Heart, Receipt,
  Headphones, Award, GraduationCap, Megaphone, Users, ChevronLeft, ChevronRight,
  User, ListChecks, Group, ClipboardCheck, MessageSquare, MapPin, Briefcase, FolderOpen, HelpCircle, Globe
} from 'lucide-react'

interface SidebarProps {
  currentSection: string
  onSectionChange: (id: string) => void
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  mobile?: boolean
  onClose?: () => void
}

const navSections = [
  {
    modules: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'profile', label: 'My Profile', icon: User },
      { id: 'attendance', label: 'Attendance', icon: ListChecks },
      { id: 'directory', label: 'Directory', icon: Group },
      { id: 'documents', label: 'Documents', icon: FileText },
      { id: 'policies', label: 'Policies', icon: BookOpen },
      { id: 'calendar', label: 'Calendar & Leave', icon: Calendar },
      { id: 'holidays', label: 'Holiday List', icon: MapPin },
      { id: 'timesheet', label: 'Timesheet', icon: Clock },
      { id: 'forms', label: 'Forms & Requests', icon: ClipboardCheck },
      { id: 'payslips', label: 'Payslips', icon: DollarSign },
      { id: 'reimbursements', label: 'Reimbursements', icon: Receipt },
      { id: 'expenses', label: 'Expense Claims', icon: Briefcase },
      { id: 'benefits', label: 'Benefits & Insurance', icon: Heart },
      { id: 'helpdesk', label: 'IT Help Desk', icon: Headphones },
      { id: 'assets', label: 'Assets', icon: FolderOpen },
      { id: 'learning', label: 'Learning & Training', icon: GraduationCap },
      { id: 'resources', label: 'Resource Library', icon: FolderOpen },
      { id: 'announcements', label: 'Announcements', icon: Megaphone },
      { id: 'news', label: 'Company News', icon: Globe },
      { id: 'appreciate', label: 'Appreciate', icon: Award },
      { id: 'feedback', label: 'Feedback', icon: MessageSquare },
      { id: 'faq', label: 'FAQ', icon: HelpCircle },
      { id: 'team', label: 'Team Management', icon: Users }
    ]
  }
];

const HEADER_HEIGHT = 56; // px, adjust if your header is taller/shorter

export default function Sidebar({
  currentSection,
  onSectionChange,
  collapsed,
  setCollapsed,
  mobile = false,
  onClose
}: SidebarProps) {
  return (
    <>
      {mobile && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      )}
      <aside
        className={`
          fixed left-0 top-[56px] h-[calc(100vh-56px)] bg-white shadow-2xl z-50 transition-all duration-300
          ${mobile ? 'w-64' : collapsed ? 'w-16' : 'w-64'}
          ${mobile ? 'lg:hidden' : 'hidden lg:flex'}
        `}
      >
        <nav className="px-2 pt-2 overflow-y-auto">
          {navSections.map(section => (
            <div key={section.label} className="mb-1">
              <ul className="space-y-3">
                {section.modules.map(item => (
                  <li key={item.id}>
                    <button
                      className={`
                        w-full flex py-2 rounded-lg bg-white hover:bg-gray-50 transition group border-none shadow-none
                        ${collapsed ? 'justify-center items-center px-0 gap-0' : 'items-center gap-2 px-2'}
                        ${currentSection === item.id ? 'font-bold' : ''}
                      `}
                      style={{ background: 'none', boxShadow: 'none', border: 'none' }}
                      onClick={() => {
                        onSectionChange(item.id)
                        if (mobile) onClose?.()
                      }}
                      title={item.label}
                    >
                      <item.icon
                        size={18}
                        className="text-gray-400 group-hover:text-violet-700"
                      />
                      {!collapsed && (
                        <span className="text-sm font-medium text-transparent bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 bg-clip-text group-hover:from-violet-800 group-hover:to-cyan-700 transition-all duration-200 whitespace-nowrap">
                          {item.label}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {!mobile && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setCollapsed((c) => !c)}
                className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 text-white hover:opacity-90 rounded-full p-3 shadow transition-all"
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
              </button>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}
