'use client'

import { courses } from '@/lib/data/courses'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { Clock, Users, Star } from 'lucide-react'

export default function CourseGrid() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Available Courses</h2>
        <p className="text-gray-600 dark:text-slate-400">
          Expand your skills with our curated learning library
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                  {course.difficulty.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-primary mb-2">{course.provider}</p>
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-3">
                {course.description}
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{course.enrolled} enrolled</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} fill="currentColor" />
                  <span>{course.rating}</span>
                </div>
              </div>
              <Button className="w-full">Enroll Now</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
