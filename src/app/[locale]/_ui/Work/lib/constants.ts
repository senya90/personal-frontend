import { WorkExperience } from '@/app/[locale]/_ui/Work/model/types'

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    date: '2021-2025',
    title: 'ОТП Банк',
    position: 'Senior Frontend разработчик',
    description: [
      `Спроектировал и реализовал frontend-архитектуру внутренней системы регистрации партнёров и документооборота. (микрофронт на single-spa, Feature Sliced Design (FSD))
Вёл проект от прототипа до MVP и далее - масштабирование до production-релиза, который заменил legacy-систему. Время от заведения карточки партнера до выдачи первого кредита сократилось более чем в 10 раз`,
      `Реализовал ролевую модель ~10 ролей, около 100 прав доступа, конфигурация через Keycloak`,
      `Отвечал за выпуск и раскатку релизов в production`,
      `Проводил code review, технические собеседования, менторил стажера и джуниора, участвовал в онбординге новых сотрудников`,
      `Поддержка и развитие ранее написанных приложений и плагинов, разработка кредитного конвейера; устранение технического долга`,
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
    title: 'SmartPlayer',
    position: 'Middle Frontend разработчик',
    description: [
      `React SPA - админка системы`,
      `ПО организации (MVP (View reactjs) приложение для SmartTV)`,
      `Web-виджеты на react`,
    ],
    stack: ['React', 'Redux', 'WebOS (LG)', 'MobX', 'Socket IO'],
  },
  {
    id: '3',
    date: '2017 - 2019',
    title: 'Dial web / freelance',
    position: 'Junior Frontend разработчик',
    description: [
      `Frontend разработка сайтов, лэндингов, веб-приложений: сотрудничество с веб-студией https://dialweb.ru и разовые проекты`,
    ],
    stack: ['HTML', 'CSS', 'Верстка', 'JQuery', 'Верстка'],
  },
  {
    id: '4',
    date: '2016 - 2017',
    title: 'Solution web',
    position: 'HTML-верстальщик',
    description: [
      `Верстка pixel-perferct по макету, адаптивно, кроссбраузерно`,
    ],
    stack: ['HTML', 'CSS', 'Верстка'],
  },
]
