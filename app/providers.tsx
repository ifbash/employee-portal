// lib/providers.tsx
'use client'

import { ReactNode } from 'react'
import { RoleProvider } from './context/RoleContext'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <RoleProvider>
      {children}
    </RoleProvider>
  )
}
