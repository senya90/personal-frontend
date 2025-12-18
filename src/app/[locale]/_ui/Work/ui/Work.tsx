import { Typography } from '@/shared/ui/Typography'
import styles from '../../../styles.module.css'
import { Timeline } from '@/shared/ui/Timeline'

export const Work = () => {
  const workExperience = [
    {
      date: '2021-2025',
      title: 'ОТП Банк',
      subtitle: 'Senior Frontend разработчик',
      description: [
        `Спроектировал и реализовал frontend-архитектуру внутренней системы регистрации партнёров и документооборота. (микрофронт на single-spa, Feature Sliced Design (FSD))
Вёл проект от прототипа до MVP и далее - масштабирование до production-релиза, который заменил legacy-систему. Время от заведения карточки партнера до выдачи первого кредита сократилось более чем в 10 раз`,
        `Реализовал ролевую модель ~10 ролей, около 100 прав доступа, конфигурация через Keycloak`,
        `Разработал UI для форм, карточек, таблиц с фильтрами/сортировкой.`,
        `Настроил и поддерживал git-flow в соответствии со стандартами ОТП Банка`,
        `Отвечал за выпуск и раскатку релизов в production`,
        ` Доработал CI/CD для развертывания приложения - оптимизировал Docker, увеличил скорость сборки с 7 минут до 5. Перенёс настройки развёртывания в репозиторий, чтобы все изменения отслеживались через git. CI/CD: TeamCity`,
        `Проводил code review, технические собеседования, менторил стажера и джуниора, участвовал в онбординге новых сотрудников (не только фронтенд компетенций)`,
        `Поддержка и развитие ранее написанных приложений и плагинов, разработка кредитного конвейера; устранение технического долга`,
        `Выступал на демо`,
      ],
      tags: [
        'React',
        'Redux (RTK, RTK Query)',
        'Styled Components',
        'Formik',
        'Yup',
        'Jest/React testing library',
      ],
    },
    {
      date: '2019 - 2020',
      title: 'SmartPlayer',
      subtitle: 'Middle Frontend разработчик',
      description: [
        `React SPA - админка системы`,
        `ПО организации (MVP (View reactjs) приложение для SmartTV)`,
        `Web-виджеты на react`,
      ],
      tags: ['React', 'Redux', 'WebOS (LG)', 'MobX', 'Socket IO'],
    },
    {
      date: '2017 - 2019',
      title: 'Dial web / freelance',
      subtitle: 'Junior Frontend разработчик',
      description: [
        `Frontend разработка сайтов, лэндингов, веб-приложений: сотрудничество с веб-студией https://dialweb.ru и разовые проекты`,
      ],
      tags: ['HTML', 'CSS', 'Верстка', 'JQuery', 'Верстка'],
    },
    {
      date: '2016 - 2017',
      title: 'Solution web',
      subtitle: 'HTML-верстальщик',
      description: [
        `Верстка pixel-perferct по макету, адаптивно, кроссбраузерно`,
      ],
      tags: ['HTML', 'CSS', 'Верстка'],
    },
  ]

  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2" gutterBottom="l">
          Места работы
        </Typography>

        <Timeline items={workExperience} />
      </div>
    </section>
  )
}
