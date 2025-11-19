// components/documents/UploadModal.tsx
'use client'

import { useState } from 'react'
import Modal from '../ui/Modal'
import Button from '../ui/Button'

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const [formData, setFormData] = useState({
    documentType: '',
    description: '',
    file: null as File | null
  })

  const [fileName, setFileName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.documentType || !formData.file) {
      alert('Please fill in all required fields')
      return
    }

    // Here you would typically upload the file to a server
    console.log('Document upload:', {
      type: formData.documentType,
      description: formData.description,
      fileName: formData.file.name,
      fileSize: formData.file.size
    })
    
    // Show success message
    alert('Document uploaded successfully!')
    
    // Reset form and close modal
    setFormData({
      documentType: '',
      description: '',
      file: null
    })
    setFileName('')
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({
        ...formData,
        file: file
      })
      setFileName(file.name)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Document">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Document Type <span className="text-red-500">*</span>
          </label>
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="">Select document type</option>
            <option value="identification">Identification Document</option>
            <option value="certificate">Certificate</option>
            <option value="contract">Contract</option>
            <option value="tax-form">Tax Form</option>
            <option value="review">Performance Review</option>
            <option value="nda">NDA Agreement</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            File <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary-hover cursor-pointer"
              required
            />
          </div>
          {fileName && (
            <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
              Selected: {fileName}
            </p>
          )}
          <p className="mt-2 text-xs text-gray-500 dark:text-slate-500">
            Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
          </p>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Description (Optional)
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            placeholder="Add any additional notes about this document..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-400">
            <strong>Note:</strong> Uploaded documents are stored securely and will be reviewed by HR. 
            Please ensure all information is accurate and up-to-date.
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" className="flex-1">
            Upload Document
          </Button>
          <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}
