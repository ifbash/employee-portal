export type Activity = {
  id: string
  type: 'login' | 'document' | 'leave' | 'timesheet' | 'message' | 'policy'
  timestamp: string
  user: string
  summary: string
  avatarUrl?: string
}

// The 'as const' ensures correct literal string types!
export const activityFeed: Activity[] = [
  { id: 'a1', type: 'login', timestamp: new Date().toISOString(), user: 'Jane Smith', summary: 'Logged in from web portal' },
  { id: 'a2', type: 'document', timestamp: new Date().toISOString(), user: 'Basheer', summary: 'Uploaded NDA Agreement' },
  { id: 'a3', type: 'leave', timestamp: new Date().toISOString(), user: 'Tom R.', summary: 'Requested leave for Nov 20' },
  { id: 'a4', type: 'policy', timestamp: new Date().toISOString(), user: 'HR Admin', summary: 'Published new HR Policy Update' },
]
