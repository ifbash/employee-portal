'use client'

import { announcements, getPinnedAnnouncements } from '@/lib/data/announcements'
import Card from '../ui/Card'
import { Pin, Megaphone } from 'lucide-react'

// Modern category color badges
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'company': return 'bg-cyan-100 text-cyan-800'
    case 'hr': return 'bg-green-100 text-green-800'
    case 'it': return 'bg-purple-100 text-purple-800'
    case 'events': return 'bg-pink-100 text-pink-700'
    case 'urgent': return 'bg-red-100 text-red-800 animate-pulse'
    default: return 'bg-sky-50 text-brand'
  }
}

// Priority icons
const getPriorityIcon = (priority: string) => {
  if (priority === 'urgent') return <span className="text-red-500 animate-pulse">🔴</span>
  if (priority === 'high') return <span className="text-orange-400">🟠</span>
  return ''
}

// Card layout for announcements
const AnnouncementCard = ({
  announcement,
  isPinned = false
}: {
  announcement: any,
  isPinned?: boolean
}) => (
  <Card
    className={`
      rounded-2xl shadow-md border
      ${isPinned ? 'border-brand bg-gradient-to-br from-brand/10 via-white/90 to-brand/5' : 'border-slate-100 hover:shadow-lg transition'}
    `}
  >
    <div className="flex flex-col gap-3 sm:flex-row justify-between items-start mb-2">
      <div className="flex items-center gap-3">
        {isPinned && <Pin size={22} className="text-brand animate-bounce" />}
        <h3 className="font-semibold text-lg text-brand flex items-center gap-1">
          {getPriorityIcon(announcement.priority)} {announcement.title}
        </h3>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(announcement.category)}`}>
        {announcement.category.toUpperCase()}
      </span>
    </div>

    <p className="text-lg text-gray-800 mb-2 leading-snug">{announcement.content}</p>

    <div className="flex justify-between items-center text-sm text-muted-foreground mt-2">
      <span>By <span className="font-semibold text-brand">{announcement.author}</span></span>
      <span className="font-mono">{announcement.date}</span>
    </div>

    {announcement.expiryDate && (
      <div className="mt-2 text-xs text-pink-700 font-medium">
        Expires: {announcement.expiryDate}
      </div>
    )}
  </Card>
)

export default function AnnouncementList() {
  const pinnedAnnouncements = getPinnedAnnouncements()
  const regularAnnouncements = announcements.filter(a => !a.isPinned)

  return (
    <div className="w-full max-w-3xl mx-auto px-3 py-8">
      <div className="mb-8 flex items-center gap-4">
        <span className="bg-brand/20 rounded-full p-4 shadow">
          <Megaphone size={32} className="text-brand" />
        </span>
        <div>
          <h2 className="text-3xl font-extrabold text-brand tracking-tight mb-0">Announcements</h2>
          <p className="text-muted-foreground text-base mt-2">
            Stay updated—company news and important info, always fresh.
          </p>
        </div>
      </div>

      {/* Pinned Announcements */}
      {pinnedAnnouncements.length > 0 && (
        <section className="mb-10">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-brand">
            <Pin size={22} className="text-brand animate-bounce" />
            <span>Pinned Announcements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pinnedAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} isPinned />
            ))}
          </div>
        </section>
      )}

      {/* Regular Announcements */}
      <section>
        <h3 className="text-lg font-semibold mb-4 text-brand">Recent Announcements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {regularAnnouncements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      </section>
    </div>
  )
}
