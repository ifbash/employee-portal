'use client'

import { useRole } from '@/lib/context/RoleContext'
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
  const { role } = useRole()
  const [currentSection, setCurrentSection] = useState('dashboard')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Sidebar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      
      <Header 
        currentSection={currentSection} 
        onMenuClick={() => setIsMenuOpen(true)}
      />
      
      <main className="p-8">
        {renderSection()}
      </main>
    </div>
  )
}
