'use client'

import { announcements, getPinnedAnnouncements } from '@/lib/data/announcements'
import Card from '../ui/Card'
import { Pin, Megaphone } from 'lucide-react'

export default function AnnouncementList() {
  const pinnedAnnouncements = getPinnedAnnouncements()
  const regularAnnouncements = announcements.filter(a => !a.isPinned)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'company': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'hr': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'it': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'events': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
      case 'urgent': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityIcon = (priority: string) => {
    if (priority === 'urgent') return '🔴'
    if (priority === 'high') return '🟠'
    return ''
  }

  const AnnouncementCard = ({ announcement, isPinned = false }: { announcement: any, isPinned?: boolean }) => (
    <Card className={`${isPinned ? 'border-2 border-primary' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          {isPinned && <Pin size={20} className="text-primary" />}
          <h3 className="font-semibold text-lg">
            {getPriorityIcon(announcement.priority)} {announcement.title}
          </h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`}>
          {announcement.category.toUpperCase()}
        </span>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-3">{announcement.content}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-600 dark:text-slate-400">
        <span>By {announcement.author}</span>
        <span>{announcement.date}</span>
      </div>
      
      {announcement.expiryDate && (
        <div className="mt-2 text-xs text-gray-500 dark:text-slate-500">
          Expires: {announcement.expiryDate}
        </div>
      )}
    </Card>
  )

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <Megaphone size={32} className="text-primary" />
        <div>
          <h2 className="text-2xl font-semibold">Announcements</h2>
          <p className="text-gray-600 dark:text-slate-400">
            Stay updated with company news and important information
          </p>
        </div>
      </div>

      {pinnedAnnouncements.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Pin size={20} className="text-primary" />
            Pinned Announcements
          </h3>
          <div className="space-y-4">
            {pinnedAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} isPinned />
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Announcements</h3>
        <div className="space-y-4">
          {regularAnnouncements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      </div>
    </div>
  )
}
