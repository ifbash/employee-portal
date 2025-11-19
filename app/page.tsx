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


export default function Home() {
  const [currentSection, setCurrentSection] = useState('dashboard')

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
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex min-h-screen bg-cream-50 dark:bg-slate-900">
      <Sidebar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="flex-1 ml-64 p-8">
        <Header currentSection={currentSection} />
        {renderSection()}
      </main>
    </div>
  )
}
