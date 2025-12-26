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
        'Development of a geographic information system for analyzing the correctness of topology of maps at different scales',
      description: [
        'How to explain this more briefly...',
        'If we look at Lake Baikal on a map scale of 1:1 000 and then change the scale to 1:10 000 000, Lake Baikal should remain in the Irkutsk Region and the Republic of Buryatia, and not start flowing into the Laptev Sea and the Arabian Sea, flooding part of Asia in the process. In other words, the layers on the map should be correctly redrawn when the scale changes to properly display the object or remove it entirely.',
        'The program should detect and record such cases.',
      ],
    },
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
        'Development and creation of a laboratory stand for studying triggers based on TTL logic chips (series K155, K555, KR531). The stand allows studying the operation of combinational and sequential circuits.',
      description: [
        'The entire group was divided into pairs, and each pair created their own laboratory stand.',
        'The stand body was cut out of thin plywood, and electronics were mounted inside.',
        'The front panel of the device featured a schematic diagram; toggle switches for signal input and light bulbs that displayed the results of the chip operation were placed on it.',
      ],
    },
  },
]
