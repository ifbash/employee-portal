// components/timesheet/WeeklySummary.tsx
'use client'

import Card from '../ui/Card'

interface WeeklySummaryProps {
  totalHours?: number
  billableHours?: number
  overtimeHours?: number
  targetHours?: number
}

export default function WeeklySummary({ 
  totalHours = 38.5, 
  billableHours = 35.0, 
  overtimeHours = 0.0,
  targetHours = 40.0
}: WeeklySummaryProps) {
  
  const hoursRemaining = targetHours - totalHours
  const percentComplete = (totalHours / targetHours) * 100
  const billablePercent = totalHours > 0 ? (billableHours / totalHours) * 100 : 0

  return (
    <Card>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Week Summary
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-sm text-gray-600 dark:text-slate-400 mb-1">
            Total Hours
          </div>
          <div className="text-3xl font-bold text-primary">
            {totalHours.toFixed(1)}
          </div>
          <div className="text-xs text-gray-500 dark:text-slate-500 mt-1">
            Target: {targetHours.toFixed(0)} hrs
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-600 dark:text-slate-400 mb-1">
            Billable
          </div>
          <div className="text-3xl font-bold text-primary">
            {billableHours.toFixed(1)}
          </div>
          <div className="text-xs text-gray-500 dark:text-slate-500 mt-1">
            {billablePercent.toFixed(0)}% of total
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-600 dark:text-slate-400 mb-1">
            Overtime
          </div>
          <div className="text-3xl font-bold text-primary">
            {overtimeHours.toFixed(1)}
          </div>
          <div className="text-xs text-gray-500 dark:text-slate-500 mt-1">
            Hours over {targetHours.toFixed(0)}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Weekly Progress
          </span>
          <span className="text-sm text-gray-600 dark:text-slate-400">
            {percentComplete.toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(percentComplete, 100)}%` }}
          />
        </div>
        {hoursRemaining > 0 && (
          <p className="text-xs text-gray-500 dark:text-slate-500 mt-2">
            {hoursRemaining.toFixed(1)} hours remaining to reach target
          </p>
        )}
        {totalHours >= targetHours && (
          <p className="text-xs text-green-600 dark:text-green-400 mt-2">
            ✓ Weekly target achieved!
          </p>
        )}
      </div>
    </Card>
  )
}
