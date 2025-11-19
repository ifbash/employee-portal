// lib/context/RoleContext.tsx
'use client'

import React, { createContext, useState, ReactNode } from 'react'
import { useRole } from '@/lib/hooks/useRole'

// You may adjust the type as per your needs
type Role = 'employee' | 'manager' | 'hr' | ''
type RoleContextType = {
  role: Role
  setRole: (role: Role) => void
}

export const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('')

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  )
}
