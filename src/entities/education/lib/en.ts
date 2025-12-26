import { Education } from '@/entities/education/model/Education'

export const educationItemsEn: Education[] = [
  {
    id: '1',
    title:
      'Murom Institute (branch) of Vladimir State University named after A.G. and N.G. Stoletovs',
    period: { from: '2011', to: '2015' },
    field: {
      faculty: 'Information Technology',
      specialization: 'Information Systems',
    },
    degree: 'Higher',
    description:
      'Fundamental knowledge of computer science: databases, networks, web, probability theory, programming paradigms, algorithm theory, AI, design and architecture of information systems, and much more.',
    finalWork: {
      title:
        'Diploma Project. Development of a geographic information system for analyzing the correctness of topology of maps at different scales',
      description: [],
    },
    href: 'https://www.mivlgu.ru/',
  },
  {
    id: '2',
    title: 'Murom Radio Engineering College',
    period: { from: '2007', to: '2010' },
    field: {
      faculty: 'Information Technology',
      specialization:
        'Maintenance and Repair of Computer Equipment and Computer Networks',
    },
    degree: 'Secondary Professional',
    description:
      'In addition to studying the structure of electronic devices and the physical principles of their operation, we studied programming in C++, Pascal; and did some programming in Assembly language for the Intel 8085 processor family.',
    finalWork: {
      title:
        'Graduation Project. Development and creation of a laboratory stand for studying triggers based on TTL logic chips (series K155, K555, KR531). The stand allows studying the operation of combinational and sequential circuits.',
      description: [],
    },
    href: 'https://xn--80afpo6a.xn--p1ai/',
  },
]
