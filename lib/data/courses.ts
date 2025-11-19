// lib/data/courses.ts

export interface Course {
  id: string
  title: string
  provider: string
  category: string
  duration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  description: string
  enrolled: number
  rating: number
  thumbnail?: string
}

export interface Enrollment {
  id: string
  employeeId: string
  courseId: string
  enrolledDate: string
  progress: number
  status: 'in-progress' | 'completed' | 'not-started'
  completedDate?: string
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced TypeScript',
    provider: 'Udemy',
    category: 'Development',
    duration: '12 hours',
    difficulty: 'advanced',
    description: 'Master advanced TypeScript concepts including generics, decorators, and type guards.',
    enrolled: 45,
    rating: 4.8
  },
  {
    id: '2',
    title: 'Leadership Fundamentals',
    provider: 'LinkedIn Learning',
    category: 'Leadership',
    duration: '6 hours',
    difficulty: 'intermediate',
    description: 'Develop essential leadership skills for managing teams and projects effectively.',
    enrolled: 78,
    rating: 4.6
  },
  {
    id: '3',
    title: 'AWS Solutions Architect',
    provider: 'A Cloud Guru',
    category: 'Cloud Computing',
    duration: '20 hours',
    difficulty: 'intermediate',
    description: 'Prepare for AWS Solutions Architect certification with hands-on labs.',
    enrolled: 92,
    rating: 4.9
  },
  {
    id: '4',
    title: 'UX Design Principles',
    provider: 'Coursera',
    category: 'Design',
    duration: '8 hours',
    difficulty: 'beginner',
    description: 'Learn fundamental UX design principles and best practices.',
    enrolled: 56,
    rating: 4.7
  },
  {
    id: '5',
    title: 'Data Analytics with Python',
    provider: 'DataCamp',
    category: 'Data Science',
    duration: '15 hours',
    difficulty: 'intermediate',
    description: 'Master data analysis using Python, Pandas, and NumPy.',
    enrolled: 63,
    rating: 4.5
  },
  {
    id: '6',
    title: 'Agile Project Management',
    provider: 'Scrum Alliance',
    category: 'Project Management',
    duration: '10 hours',
    difficulty: 'beginner',
    description: 'Learn Scrum framework and agile methodologies for project management.',
    enrolled: 88,
    rating: 4.8
  }
]

export const enrollments: Enrollment[] = [
  {
    id: '1',
    employeeId: 'EMP-2024-001',
    courseId: '1',
    enrolledDate: 'Nov 1, 2025',
    progress: 65,
    status: 'in-progress'
  },
  {
    id: '2',
    employeeId: 'EMP-2024-001',
    courseId: '4',
    enrolledDate: 'Oct 15, 2025',
    progress: 100,
    status: 'completed',
    completedDate: 'Nov 10, 2025'
  }
]

// Helper functions
export const getCourseById = (id: string): Course | undefined => {
  return courses.find(c => c.id === id)
}

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter(c => c.category === category)
}

export const getCoursesByDifficulty = (difficulty: string): Course[] => {
  return courses.filter(c => c.difficulty === difficulty)
}

export const getCoursesByProvider = (provider: string): Course[] => {
  return courses.filter(c => c.provider === provider)
}

export const getTopRatedCourses = (minRating: number = 4.5): Course[] => {
  return courses.filter(c => c.rating >= minRating).sort((a, b) => b.rating - a.rating)
}

export const getEnrollmentsByEmployee = (employeeId: string): Enrollment[] => {
  return enrollments.filter(e => e.employeeId === employeeId)
}

export const isEnrolled = (employeeId: string, courseId: string): boolean => {
  return enrollments.some(e => e.employeeId === employeeId && e.courseId === courseId)
}

export const enrollCourse = (employeeId: string, courseId: string): Enrollment => {
  const newEnrollment: Enrollment = {
    id: (enrollments.length + 1).toString(),
    employeeId,
    courseId,
    enrolledDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }),
    progress: 0,
    status: 'not-started'
  }
  enrollments.push(newEnrollment)
  return newEnrollment
}

export const updateProgress = (enrollmentId: string, progress: number): Enrollment | undefined => {
  const enrollment = enrollments.find(e => e.id === enrollmentId)
  if (enrollment) {
    enrollment.progress = progress
    if (progress === 100) {
      enrollment.status = 'completed'
      enrollment.completedDate = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    } else if (progress > 0) {
      enrollment.status = 'in-progress'
    }
  }
  return enrollment
}
