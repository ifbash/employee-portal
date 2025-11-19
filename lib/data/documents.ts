// lib/data/documents.ts

export interface Document {
  id: string
  name: string
  type: string
  uploadDate: string
  size?: string
  url?: string
}

export const documents: Document[] = [
  {
    id: '1',
    name: 'Employment Contract',
    type: 'Contract',
    uploadDate: 'Jan 15, 2024',
    size: '245 KB',
    url: '#'
  },
  {
    id: '2',
    name: 'NDA Agreement',
    type: 'Agreement',
    uploadDate: 'Jan 15, 2024',
    size: '189 KB',
    url: '#'
  },
  {
    id: '3',
    name: 'Tax Declaration Form',
    type: 'Tax Form',
    uploadDate: 'Apr 1, 2024',
    size: '156 KB',
    url: '#'
  },
  {
    id: '4',
    name: 'Performance Review 2024',
    type: 'Review',
    uploadDate: 'Jun 30, 2024',
    size: '312 KB',
    url: '#'
  },
  {
    id: '5',
    name: 'Passport Copy',
    type: 'Identification',
    uploadDate: 'Jan 10, 2024',
    size: '1.2 MB',
    url: '#'
  },
  {
    id: '6',
    name: 'Driver License',
    type: 'Identification',
    uploadDate: 'Jan 10, 2024',
    size: '876 KB',
    url: '#'
  },
  {
    id: '7',
    name: 'Educational Certificates',
    type: 'Certificate',
    uploadDate: 'Jan 12, 2024',
    size: '2.4 MB',
    url: '#'
  },
  {
    id: '8',
    name: 'Health Insurance Card',
    type: 'Insurance',
    uploadDate: 'Feb 1, 2024',
    size: '543 KB',
    url: '#'
  },
  {
    id: '9',
    name: 'Emergency Contact Form',
    type: 'Form',
    uploadDate: 'Jan 15, 2024',
    size: '98 KB',
    url: '#'
  },
  {
    id: '10',
    name: 'Bank Details',
    type: 'Financial',
    uploadDate: 'Jan 15, 2024',
    size: '124 KB',
    url: '#'
  }
]

export const getDocumentById = (id: string): Document | undefined => {
  return documents.find(doc => doc.id === id)
}

export const getDocumentsByType = (type: string): Document[] => {
  return documents.filter(doc => doc.type === type)
}

export const getDocumentTypes = (): string[] => {
  return Array.from(new Set(documents.map(doc => doc.type)))
}

export const addDocument = (document: Omit<Document, 'id'>): Document => {
  const newDocument: Document = {
    ...document,
    id: (documents.length + 1).toString()
  }
  documents.push(newDocument)
  return newDocument
}
