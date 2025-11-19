// components/ui/Table.tsx
import { ReactNode } from 'react'

interface TableProps {
  children: ReactNode
  className?: string
}

interface TableHeaderProps {
  children: ReactNode
  className?: string
}

interface TableBodyProps {
  children: ReactNode
  className?: string
}

interface TableRowProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

interface TableHeadProps {
  children: ReactNode
  className?: string
}

interface TableCellProps {
  children: ReactNode
  className?: string
}

export function Table({ children, className = '' }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full ${className}`}>
        {children}
      </table>
    </div>
  )
}

export function TableHeader({ children, className = '' }: TableHeaderProps) {
  return (
    <thead className={className}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className = '' }: TableBodyProps) {
  return (
    <tbody className={className}>
      {children}
    </tbody>
  )
}

export function TableRow({ children, className = '', onClick }: TableRowProps) {
  return (
    <tr 
      className={`border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </tr>
  )
}

export function TableHead({ children, className = '' }: TableHeadProps) {
  return (
    <th className={`text-left py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300 ${className}`}>
      {children}
    </th>
  )
}

export function TableCell({ children, className = '' }: TableCellProps) {
  return (
    <td className={`py-3 px-4 text-gray-900 dark:text-gray-100 ${className}`}>
      {children}
    </td>
  )
}
