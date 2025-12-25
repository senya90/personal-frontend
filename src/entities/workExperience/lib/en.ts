import { WorkExperience } from '@/entities/workExperience/model/WorkExperience'

export const workExperienceEn: WorkExperience[] = [
  {
    id: '1',
    date: '2021-2025',
    title: 'OTP Bank',
    position: 'Senior Frontend Developer',
    description: [
      `Designed and implemented the frontend architecture for an internal partner registration and document management system (microfrontend architecture using single-spa, Feature-Sliced Design — FSD). Led the project from prototype to MVP and further scaled it to a production release, fully replacing a legacy system. Reduced the time from partner registration to issuing the first loan by more than 10×.`,
      `Implemented a role-based access control system with ~10 roles and around 100 permissions, configured via Keycloak.`,
      `Responsible for production releases and deployment rollout.`,
      `Conducted code reviews and technical interviews; mentored an intern and a junior developer; participated in onboarding new team members.`,
      `Maintained and extended existing applications and plugins; developed a credit pipeline; reduced technical debt.`,
    ],
    stack: [
      'React',
      'Redux (RTK, RTK Query)',
      'Styled Components',
      'Formik',
      'Yup',
      'Jest/React testing library',
    ],
  },
  {
    id: '2',
    date: '2019 - 2020',
    title: 'Smartplayer',
    position: 'Middle Frontend Developer',
    description: [
      `Development of a CMS for video broadcast management. Tech stack: React, Redux, MobX, TypeScript, SASS/SCSS, Bootstrap, Flexbox.`,
      `Development of a Smart Player application for Smart TV (LG webOS). Tech stack: React, RxJS, IndexedDB (Dexie), OOP.`,
      `Development and maintenance of web widgets built with React.`,
    ],
    stack: ['React', 'Redux', 'MobX', 'Socket IO', 'WebOS (LG)', 'RxJs'],
  },
  {
    id: '3',
    date: '2017 - 2019',
    title: 'Dial web / freelance',
    position: 'Middle Frontend Developer',
    description: [
      `Frontend development of websites, landing pages, and web applications. Collaboration with a web studio dialweb.ru and freelance project work.`,
    ],
    stack: ['HTML (Ejs, Pug)', 'CSS/LESS/SCSS', 'Markup', 'JQuery'],
  },
  {
    id: '4',
    date: '2016 - 2017',
    title: 'Solution web',
    position: 'Junior Frontend Developer',
    description: [
      `UI development based on design mockups.`,
      `Responsive and cross-browser layout implementation.`,
    ],
    stack: ['HTML', 'CSS', 'Markup'],
  },
]
