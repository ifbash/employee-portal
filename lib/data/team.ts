// lib/data/team.ts

export interface TeamMember {
  id: string
  employeeId: string
  name: string
  email: string
  position: string
  department: string
  manager: string
  joinDate: string
  leaveBalance: string
  status: 'active' | 'on-leave'
  phone?: string
  location?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    employeeId: 'EMP-2024-002',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    position: 'Senior Developer',
    department: 'Engineering',
    manager: 'Jane Manager',
    joinDate: 'Mar 15, 2023',
    leaveBalance: '12 days',
    status: 'active',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY'
  },
  {
    id: '2',
    employeeId: 'EMP-2024-003',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    position: 'UX Designer',
    department: 'Design',
    manager: 'Jane Manager',
    joinDate: 'Jun 1, 2023',
    leaveBalance: '8 days',
    status: 'on-leave',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA'
  },
  {
    id: '3',
    employeeId: 'EMP-2024-004',
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    position: 'QA Engineer',
    department: 'Engineering',
    manager: 'Jane Manager',
    joinDate: 'Aug 20, 2023',
    leaveBalance: '15 days',
    status: 'active',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX'
  },
  {
    id: '4',
    employeeId: 'EMP-2024-005',
    name: 'David Martinez',
    email: 'david.martinez@company.com',
    position: 'Frontend Developer',
    department: 'Engineering',
    manager: 'Jane Manager',
    joinDate: 'Jan 10, 2024',
    leaveBalance: '10 days',
    status: 'active',
    phone: '+1 (555) 456-7890',
    location: 'Seattle, WA'
  },
  {
    id: '5',
    employeeId: 'EMP-2024-006',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@company.com',
    position: 'Product Manager',
    department: 'Product',
    manager: 'Jane Manager',
    joinDate: 'Nov 5, 2023',
    leaveBalance: '14 days',
    status: 'active',
    phone: '+1 (555) 567-8901',
    location: 'Boston, MA'
  },
  {
    id: '6',
    employeeId: 'EMP-2024-007',
    name: 'Robert Taylor',
    email: 'robert.taylor@company.com',
    position: 'DevOps Engineer',
    department: 'Engineering',
    manager: 'Jane Manager',
    joinDate: 'Apr 12, 2024',
    leaveBalance: '18 days',
    status: 'active',
    phone: '+1 (555) 678-9012',
    location: 'Denver, CO'
  },
  {
    id: '7',
    employeeId: 'EMP-2024-008',
    name: 'Amanda White',
    email: 'amanda.white@company.com',
    position: 'UI Designer',
    department: 'Design',
    manager: 'Jane Manager',
    joinDate: 'Feb 28, 2024',
    leaveBalance: '11 days',
    status: 'active',
    phone: '+1 (555) 789-0123',
    location: 'Chicago, IL'
  },
  {
    id: '8',
    employeeId: 'EMP-2024-009',
    name: 'James Wilson',
    email: 'james.wilson@company.com',
    position: 'Backend Developer',
    department: 'Engineering',
    manager: 'Jane Manager',
    joinDate: 'May 15, 2024',
    leaveBalance: '20 days',
    status: 'active',
    phone: '+1 (555) 890-1234',
    location: 'Portland, OR'
  },
  {
    id: '9',
    employeeId: 'EMP-2024-010',
    name: 'Jennifer Brown',
    email: 'jennifer.brown@company.com',
    position: 'Data Analyst',
    department: 'Analytics',
    manager: 'Jane Manager',
    joinDate: 'Jul 8, 2024',
    leaveBalance: '16 days',
    status: 'active',
    phone: '+1 (555) 901-2345',
    location: 'Miami, FL'
  },
  {
    id: '10',
    employeeId: 'EMP-2024-011',
    name: 'Christopher Lee',
    email: 'christopher.lee@company.com',
    position: 'Scrum Master',
    department: 'Engineering',
    manager: 'Jane Manager',
    joinDate: 'Sep 1, 2024',
    leaveBalance: '13 days',
    status: 'active',
    phone: '+1 (555) 012-3456',
    location: 'Atlanta, GA'
  },
  {
    id: '11',
    employeeId: 'EMP-2024-012',
    name: 'Jessica Garcia',
    email: 'jessica.garcia@company.com',
    position: 'Marketing Specialist',
    department: 'Marketing',
    manager: 'Jane Manager',
    joinDate: 'Oct 10, 2024',
    leaveBalance: '9 days',
    status: 'active',
    phone: '+1 (555) 123-4568',
    location: 'Los Angeles, CA'
  },
  {
    id: '12',
    employeeId: 'EMP-2024-013',
    name: 'Matthew Rodriguez',
    email: 'matthew.rodriguez@company.com',
    position: 'Security Engineer',
    department: 'Security',
    manager: 'Jane Manager',
    joinDate: 'Dec 1, 2023',
    leaveBalance: '17 days',
    status: 'active',
    phone: '+1 (555) 234-5679',
    location: 'Phoenix, AZ'
  }
]

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id)
}

export const getTeamMembersByDepartment = (department: string): TeamMember[] => {
  return teamMembers.filter(member => member.department === department)
}

export const getTeamMembersByStatus = (status: 'active' | 'on-leave'): TeamMember[] => {
  return teamMembers.filter(member => member.status === status)
}

export const getTeamMembersByManager = (manager: string): TeamMember[] => {
  return teamMembers.filter(member => member.manager === manager)
}

export const getDepartments = (): string[] => {
  return Array.from(new Set(teamMembers.map(member => member.department)))
}

export const getTeamStats = () => {
  const totalMembers = teamMembers.length
  const activeMembers = teamMembers.filter(m => m.status === 'active').length
  const onLeave = teamMembers.filter(m => m.status === 'on-leave').length
  const departments = getDepartments().length

  return {
    total: totalMembers,
    active: activeMembers,
    onLeave,
    departments
  }
}
