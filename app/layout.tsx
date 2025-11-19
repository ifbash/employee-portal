import type { Metadata } from 'next'
import './globals.css'
import { RoleProvider } from '@/lib/context/RoleContext'

export const metadata: Metadata = {
  title: 'Employee Portal - Internal Dashboard',
  description: 'Internal employee portal for document management, HR policies, and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RoleProvider>
          {children}
        </RoleProvider>
      </body>
    </html>
  )
}
