// components/policies/PolicyModal.tsx
'use client'

import Modal from '../ui/Modal'

interface Policy {
  id: string
  title: string
  icon: any
  description: string
  content: string
}

interface PolicyModalProps {
  isOpen: boolean
  onClose: () => void
  policy: Policy | null
}

export default function PolicyModal({ isOpen, onClose, policy }: PolicyModalProps) {
  if (!policy) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={policy.title}>
      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-4 text-gray-700 dark:text-gray-300">{policy.content}</p>
        
        <h4 className="font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          Overview
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          This policy outlines the guidelines and expectations for {policy.title.toLowerCase()}. 
          All employees are expected to familiarize themselves with and adhere to these policies.
        </p>

        <h4 className="font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          Key Points
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>All employees must comply with company policies at all times</li>
          <li>Violations may result in disciplinary action</li>
          <li>Policies are subject to periodic review and updates</li>
          <li>Questions should be directed to the HR department</li>
        </ul>

        <h4 className="font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          Scope and Applicability
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          This policy applies to all employees, contractors, and temporary workers. 
          It is effective immediately upon hire and remains in effect throughout the 
          duration of employment.
        </p>

        <h4 className="font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          Compliance and Enforcement
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          All employees are expected to maintain the highest standards of professional conduct. 
          Any violations of this policy should be reported to your direct supervisor or HR department.
        </p>

        <h4 className="font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">
          Additional Resources
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          For more information or clarification regarding this policy, please contact:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
          <li>HR Department: hr@company.com</li>
          <li>Employee Helpline: 1-800-HELP-NOW</li>
          <li>Internal Portal: policies.company.com</li>
        </ul>

        <div className="mt-8 p-4 bg-gray-100 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600">
          <p className="text-sm text-gray-600 dark:text-slate-400">
            <strong>Last Updated:</strong> November 2025<br />
            <strong>Policy Version:</strong> 2.0<br />
            <strong>Next Review Date:</strong> May 2026
          </p>
        </div>
      </div>
    </Modal>
  )
}
