'use client'

import { useState } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Modal from '../ui/Modal'
import { FileText, Download, Upload } from 'lucide-react'

interface Document {
  id: string
  name: string
  uploadDate: string
}

export default function DocumentList() {
  const [showUploadModal, setShowUploadModal] = useState(false)
  
  const documents: Document[] = [
    { id: '1', name: 'Employment Contract', uploadDate: 'Jan 15, 2024' },
    { id: '2', name: 'NDA Agreement', uploadDate: 'Jan 15, 2024' },
    { id: '3', name: 'Tax Declaration Form', uploadDate: 'Apr 1, 2024' },
    { id: '4', name: 'Performance Review 2024', uploadDate: 'Jun 30, 2024' },
  ]

  return (
    <div>
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">My Documents</h3>
          <Button onClick={() => setShowUploadModal(true)}>
            <Upload size={16} className="mr-2" />
            Upload Document
          </Button>
        </div>

        <div className="space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div>
                  <div className="font-semibold">{doc.name}</div>
                  <div className="text-sm text-gray-600 dark:text-slate-400">Uploaded: {doc.uploadDate}</div>
                </div>
              </div>
              <Button variant="secondary">
                <Download size={16} className="mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <Modal isOpen={showUploadModal} onClose={() => setShowUploadModal(false)} title="Upload Document">
        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Document Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800">
              <option>Select document type</option>
              <option>Identification Document</option>
              <option>Certificate</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">File</label>
            <input type="file" className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg" rows={3} />
          </div>
          <div className="flex gap-3">
            <Button className="flex-1">Upload</Button>
            <Button variant="secondary" onClick={() => setShowUploadModal(false)}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
