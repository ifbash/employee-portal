'use client'
import { useState } from 'react'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Dashboard from '@/components/dashboard/Dashboard'
import DocumentList from '@/components/documents/DocumentList'
import PolicyGrid from '@/components/policies/PolicyGrid'
import Calendar from '@/components/calendar/Calendar'
import TimesheetTable from '@/components/timesheet/TimesheetTable'
import PayslipTable from '@/components/payslips/PayslipTable'
import BenefitsGrid from '@/components/benefits/BenefitsGrid'
import TeamOverview from '@/components/team/TeamOverview'
import ReimbursementList from '@/components/reimbursements/ReimbursementList'
import TicketList from '@/components/helpdesk/TicketList'
import AppreciationWall from '@/components/appreciate/AppreciationWall'
import CourseGrid from '@/components/learning/CourseGrid'
import AnnouncementList from '@/components/announcements/AnnouncementList'

const sectionTitles = {
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
  // Add other title mappings as needed
}

export default function Page() {
  const [currentSection, setCurrentSection] = useState('dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':       return <Dashboard />
      case 'documents':       return <DocumentList />
      case 'policies':        return <PolicyGrid />
      case 'calendar':        return <Calendar />
      case 'timesheet':       return <TimesheetTable />
      case 'payslips':        return <PayslipTable />
      case 'benefits':        return <BenefitsGrid />
      case 'team':            return <TeamOverview />
      case 'reimbursements':  return <ReimbursementList />
      case 'helpdesk':        return <TicketList />
      case 'appreciate':      return <AppreciationWall />
      case 'learning':        return <CourseGrid />
      case 'announcements':   return <AnnouncementList />
      default:                return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header
        currentSection={sectionTitles[currentSection] || currentSection}
        setMobileNavOpen={setMobileNavOpen}
      />
      {mobileNavOpen && (
        <Sidebar
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
          collapsed={false}
          setCollapsed={() => {}}
          mobile
          onClose={() => setMobileNavOpen(false)}
        />
      )}
      <Sidebar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        mobile={false}
      />
      <div className={`transition-all duration-300 pt-14 ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}>
        <main className="p-8">{renderSection()}</main>
      </div>
    </div>
  )
}
