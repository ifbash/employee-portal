'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
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

export default function Home() {
  const [currentSection, setCurrentSection] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard />
      case 'documents':
        return <DocumentList />
      case 'policies':
        return <PolicyGrid />
      case 'calendar':
        return <Calendar />
      case 'timesheet':
        return <TimesheetTable />
      case 'payslips':
        return <PayslipTable />
      case 'benefits':
        return <BenefitsGrid />
      case 'team':
        return <TeamOverview />
      case 'reimbursements':
        return <ReimbursementList />
      case 'helpdesk':
        return <TicketList />
      case 'appreciate':
        return <AppreciationWall />
      case 'learning':
        return <CourseGrid />
      case 'announcements':
        return <AnnouncementList />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background">
      {/* Mobile Sidebar Overlay */}
      <Sidebar
        currentSection={currentSection}
        onSectionChange={(id) => {
          setCurrentSection(id)
          setSidebarOpen(false)
        }}
        // Show only on mobile
        className={`fixed z-40 top-0 left-0 h-full md:hidden 
            transition-transform duration-200
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
      />
      {/* Desktop Sidebar */}
      <Sidebar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        className="hidden md:block fixed left-0 top-0 h-screen w-56 z-30" // matches ml-56 below
      />

      {/* Main content and header */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-56 transition-all">
        <Header
          currentSection={currentSection}
          onHamburger={() => setSidebarOpen(!sidebarOpen)}
        />
        <main
          className="
            w-full max-w-6xl mx-auto flex-1 px-3 pt-5 pb-12 md:px-8 md:pt-10 md:pb-0
            bg-cream-50 dark:bg-slate-900
            transition-colors duration-150
          "
          role="main"
          aria-labelledby="main-header"
        >
          {renderSection()}
        </main>
      </div>
      {/* Page overlay when sidebar is open (mobile), for click-outside close */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm block md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
