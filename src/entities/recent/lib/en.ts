import { RecentProject } from '@/entities/recent/model/RecentProject'

export const recentPorjectsItemsEn: RecentProject[] = [
  {
    id: '1',
    title: 'Partner Relationship Management System (PRMS)',
    shortDescription:
      'Registration, document management, approvals, electronic signatures, loan issuance',
    description: [
      'A bank employee registers the organization and creates the Agreement in the UI. The Agreement is then approved by the managers.',
      'After approval, the Agreement is ready to be signed by the parties. The signing takes place online using an electronic digital signature (EDS) and a certification authority.',
      'All data and relevant documents are now available in electronic format, and the bank is ready to work with the Partner.',
    ],
    components: [
      'Forms',
      'Lists',
      'Filtering and sorting',
      'Role model and access control',
      'User action approval workflows',
    ],
  },
  {
    id: '2',
    title: 'Loan Processing Pipeline',
    shortDescription: 'Loan application, deal registration and execution',
    description: [
      'An employee creates a loan application by entering the client’s details, product parameters, and loan terms.',
      'At specific stages of the application processing, integration with scoring systems is performed. These systems determine whether the loan can be granted to the client.',
      'If the decision is positive, a deal is created, and the bank is ready to issue the loan.',
    ],
    components: [
      'Forms with scoring integration',
      'Lists',
      'Filtering and sorting',
      'Role model and access control',
    ],
  },
  {
    id: '3',
    title: 'This website mydomain.dev',
    shortDescription: 'Developer’s personal website',
    description: [
      'This section provides a brief overview of my professional experience and the projects I have been working on recently.',
      'The website also serves as an experimental platform for testing new tools and development approaches.',
    ],
    components: [
      'NextJS',
      'SSR and SSG',
      'Multiple themes',
      'Multilingual support',
    ],
  },
]
