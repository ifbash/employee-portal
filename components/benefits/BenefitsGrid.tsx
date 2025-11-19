import Card from '../ui/Card'
import Button from '../ui/Button'
import { Heart, Eye, Shield, DollarSign, Gift } from 'lucide-react'

interface Benefit {
  icon: any
  title: string
  plan: string
  coverage: string
  premium: string
}

export default function BenefitsGrid() {
  const benefits: Benefit[] = [
    {
      icon: Heart,
      title: 'Health Insurance',
      plan: 'Premium Health Plan',
      coverage: 'Employee + Family',
      premium: '$350/month (70% employer paid)'
    },
    {
      icon: Eye,
      title: 'Vision Insurance',
      plan: 'Vision Plus',
      coverage: 'Employee Only',
      premium: '$25/month (100% employer paid)'
    },
    {
      icon: Shield,
      title: 'Life Insurance',
      plan: 'Term Life Insurance',
      coverage: '$500,000',
      premium: 'Fully employer paid'
    },
    {
      icon: DollarSign,
      title: '401(k) Retirement',
      plan: 'Your Contribution: 6%',
      coverage: 'Employer Match: 4%',
      premium: 'Current Balance: $45,230'
    },
    {
      icon: Gift,
      title: 'Other Benefits',
      plan: '• Gym membership discount',
      coverage: '• Professional development fund',
      premium: '• Employee assistance program'
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefits.map((benefit, idx) => {
        const Icon = benefit.icon
        return (
          <Card key={idx}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg">{benefit.title}</h3>
              <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                <Icon size={20} />
              </div>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <p><strong>Plan:</strong> {benefit.plan}</p>
              <p><strong>Coverage:</strong> {benefit.coverage}</p>
              <p><strong>Premium:</strong> {benefit.premium}</p>
            </div>
            <Button className="w-full">View Details</Button>
          </Card>
        )
      })}
    </div>
  )
}
