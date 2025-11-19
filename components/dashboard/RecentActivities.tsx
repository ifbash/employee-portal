'use client'

import React from 'react'
import { Card, CardProps } from '@/components/ui/Card'
import { activityFeed } from '@/lib/mockData' // optional: replace with real data source
import { Clock, Calendar, MessageSquare, User } from 'lucide-react'

type Activity = {
  id: string
  type: 'login' | 'document' | 'leave' | 'timesheet' | 'message' | 'policy'
  timestamp: string // ISO string
  user: string
  summary: string
  avatarUrl?: string
}

interface RecentActivitiesProps extends CardProps {
  limit?: number
  title?: string
}

function formatTimeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

function iconForType(type: Activity['type']) {
  switch (type) {
    case 'login':
      return <User size={16} />
    case 'document':
      return <Calendar size={16} />
    case 'leave':
      return <Clock size={16} />
    case 'timesheet':
      return <Calendar size={16} />
    case 'message':
      return <MessageSquare size={16} />
    case 'policy':
      return <Calendar size={16} />
    default:
      return <Clock size={16} />
  }
}

export default function RecentActivities({
  limit = 8,
  title = 'Recent Activities',
  className = '',
  ...rest
}: RecentActivitiesProps) {
  // If you have a real data source, replace the mock data with a fetch/context source.
  const activities: Activity[] = (activityFeed as Activity[])?.slice(0, limit) ?? []

  // Fallback if no data provided
  const items = activities.length
    ? activities
    : [
        {
          id: 'a1',
          type: 'login',
          timestamp: new Date().toISOString(),
          user: 'Jane Smith',
          summary: 'Logged in from web portal',
        },
      ]

  return (
    <Card className={`p-4 ${className}`} {...rest}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-slate-100">{title}</h3>
        <span className="text-xs text-gray-500 dark:text-slate-400">
          {items.length} items
        </span>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-slate-700">
        {items.map((a) => (
          <li key={a.id} className="flex items-start py-3">
            <div className="flex-shrink-0 mr-3 w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
              {iconForType(a.type)}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800 dark:text-slate-100">
                  {a.user}
                </span>
                <span className="text-xs text-gray-500 dark:text-slate-400 ml-2">
                  {formatTimeAgo(a.timestamp)}
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-slate-400">
                {a.summary}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
