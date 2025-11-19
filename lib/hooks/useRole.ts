// lib/hooks/useRole.ts
'use client'

import { useContext } from 'react'
import { RoleContext } from '@/lib/context/RoleContext'

export function useRole() {
  const context = useContext(RoleContext)
  
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  
  return context
}
