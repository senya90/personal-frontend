import { WorkExperience } from '@/entities/workExperience/model/WorkExperience'

export const workExperienceRu: WorkExperience[] = [
  {
    id: '1',
    date: '2021-2025',
    title: 'ОТП Банк',
    position: 'Senior Frontend разработчик',
    description: [
      `Спроектировал и реализовал frontend-архитектуру внутренней системы регистрации партнёров и документооборота. (микрофронт на single-spa, Feature Sliced Design (FSD)). Вёл проект от прототипа до MVP и далее - масштабирование до production-релиза, который заменил legacy-систему. Время от заведения карточки партнера до выдачи первого кредита сократилось более чем в 10 раз.`,
      `Реализовал ролевую модель ~10 ролей, около 100 прав доступа, конфигурация через Keycloak.`,
      `Отвечал за выпуск и раскатку релизов в production.`,
      `Проводил code review, технические собеседования, менторил стажера и джуниора, участвовал в онбординге новых сотрудников.`,
      `Поддержка и развитие ранее написанных приложений и плагинов, разработка кредитного конвейера; устранение технического долга.`,
    ],
    stack: [
      'React',
      'Redux (RTK, RTK Query)',
      'Styled Components',
      'Formik',
      'Yup',
      'Jest/React testing library',
    ],
    href: 'https://www.otpbank.ru/',
  },
  {
    id: '2',
    date: '2019 - 2020',
    title: 'Smartplayer',
    position: 'Middle Frontend разработчик',
    description: [
      `Разработка CMS для управления видеотрансляцией. Стек: React, Redux, Mobx, Typescript, SASS/SCSS, Bootstrap, Flexbox.`,
      `Разработка приложения Smartplayer для SmartTV WebOS (LG). Стек: React, RxJS, IndexedDB (Dexie), ООП.`,
      `Разработка и поддержка web-виджетов на React.`,
    ],
    stack: ['React', 'Redux', 'MobX', 'Socket IO', 'WebOS (LG)', 'RxJs'],
    href: 'https://smartplayer.ru/',
  },
  {
    id: '3',
    date: '2017 - 2019',
    title: 'Dial web / freelance',
    position: 'Middle Frontend разработчик',
    description: [
      `Frontend разработка сайтов, лэндингов, веб-приложений: сотрудничество с веб-студией dialweb.ru и разовые проекты.`,
    ],
    stack: ['JQuery', 'HTML (Ejs, Pug)', 'CSS/LESS/SCSS', 'Верстка'],
    href: 'https://dialweb.ru/',
  },
  {
    id: '4',
    date: '2016 - 2017',
    title: 'Solution web',
    position: 'Junior Frontend разработчик',
    description: [
      `Разработка пользовательских интерфейсов по макетам.`,
      `Адаптивная и кроссбраузерная верстка.`,
    ],
    stack: ['HTML', 'CSS', 'Верстка'],
  },
]
