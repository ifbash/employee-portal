'use client'

import { useState } from 'react'
import { appreciations } from '@/lib/data/appreciations'
import Card from '../ui/Card'
import Button from '../ui/Button'
import AppreciationModal from './AppreciationModal'
import { Plus } from 'lucide-react'

export default function AppreciationWall() {
  const [showModal, setShowModal] = useState(false)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'thank-you': return '🙏'
      case 'great-work': return '⭐'
      case 'team-player': return '🤝'
      case 'innovative': return '💡'
      case 'leadership': return '👑'
      default: return '👏'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'thank-you': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'great-work': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'team-player': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'innovative': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'leadership': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <div className="mb-6">
        <Button onClick={() => setShowModal(true)}>
          <Plus size={16} className="mr-2" />
          Send Appreciation
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {appreciations.map((appreciation) => (
          <Card key={appreciation.id} className="relative">
            <div className="absolute top-4 right-4 text-3xl">
              {getTypeIcon(appreciation.type)}
            </div>
            <div className="pr-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-lg">{appreciation.toEmployeeName}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(appreciation.type)}`}>
                  {appreciation.type.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{appreciation.message}</p>
              <div className="text-sm text-gray-600 dark:text-slate-400">
                From: {appreciation.fromEmployeeName} • {appreciation.date}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <AppreciationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
