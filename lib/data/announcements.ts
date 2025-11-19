// lib/data/announcements.ts

export interface Announcement {
  id: string
  title: string
  content: string
  category: 'company' | 'hr' | 'it' | 'events' | 'urgent'
  priority: 'normal' | 'high' | 'urgent'
  author: string
  date: string
  isPinned: boolean
  expiryDate?: string
}

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Company Holiday Party - December 20th',
    content: 'Join us for our annual holiday celebration! RSVP by December 15th. Location: Grand Ballroom, 6 PM - 10 PM',
    category: 'events',
    priority: 'high',
    author: 'HR Team',
    date: 'Nov 18, 2025',
    isPinned: true,
    expiryDate: 'Dec 20, 2025'
  },
  {
    id: '2',
    title: 'System Maintenance - November 25th',
    content: 'Scheduled maintenance will occur from 2 AM - 6 AM EST. Some systems may be unavailable during this time.',
    category: 'it',
    priority: 'urgent',
    author: 'IT Department',
    date: 'Nov 17, 2025',
    isPinned: true,
    expiryDate: 'Nov 25, 2025'
  },
  {
    id: '3',
    title: 'New Health Insurance Options Available',
    content: 'Review our enhanced health insurance plans for 2026. Open enrollment period starts December 1st.',
    category: 'hr',
    priority: 'high',
    author: 'HR Team',
    date: 'Nov 15, 2025',
    isPinned: false,
    expiryDate: 'Dec 31, 2025'
  },
  {
    id: '4',
    title: 'Q4 All-Hands Meeting',
    content: 'Join us for the Q4 results presentation and 2026 planning session. Thursday, November 28th at 3 PM (Virtual)',
    category: 'company',
    priority: 'high',
    author: 'Executive Team',
    date: 'Nov 12, 2025',
    isPinned: false,
    expiryDate: 'Nov 28, 2025'
  },
  {
    id: '5',
    title: 'Office Gym Opening January 2026',
    content: 'Excited to announce our new on-site fitness center opening in January! Free for all employees.',
    category: 'company',
    priority: 'normal',
    author: 'Facilities Team',
    date: 'Nov 10, 2025',
    isPinned: false
  }
]

// Helper functions
export const getAnnouncementById = (id: string): Announcement | undefined => {
  return announcements.find(a => a.id === id)
}

export const getPinnedAnnouncements = (): Announcement[] => {
  return announcements.filter(a => a.isPinned)
}

export const getAnnouncementsByCategory = (category: string): Announcement[] => {
  return announcements.filter(a => a.category === category)
}

export const getAnnouncementsByPriority = (priority: string): Announcement[] => {
  return announcements.filter(a => a.priority === priority)
}

export const getActiveAnnouncements = (): Announcement[] => {
  const now = new Date()
  return announcements.filter(a => {
    if (!a.expiryDate) return true
    const expiryDate = new Date(a.expiryDate)
    return expiryDate >= now
  })
}

export const getUrgentAnnouncements = (): Announcement[] => {
  return announcements.filter(a => a.priority === 'urgent')
}

export const addAnnouncement = (announcement: Omit<Announcement, 'id' | 'date'>): Announcement => {
  const newAnnouncement: Announcement = {
    ...announcement,
    id: (announcements.length + 1).toString(),
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  announcements.push(newAnnouncement)
  return newAnnouncement
}

export const pinAnnouncement = (id: string): Announcement | undefined => {
  const announcement = announcements.find(a => a.id === id)
  if (announcement) {
    announcement.isPinned = true
  }
  return announcement
}

export const unpinAnnouncement = (id: string): Announcement | undefined => {
  const announcement = announcements.find(a => a.id === id)
  if (announcement) {
    announcement.isPinned = false
  }
  return announcement
}
