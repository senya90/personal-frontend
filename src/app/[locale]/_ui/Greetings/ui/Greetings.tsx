import { Typography } from '@/shared/ui/Typography'
import cn from 'classnames'
import styles from './styles.module.css'
import stylesPage from '../../../styles.module.css'

export const Greetings = () => {
  return (
    <section>
      <div className={cn(stylesPage.section, styles.sectionMain)}>
        <Typography variant="h1">Senior Frontend Developer</Typography>

        <Typography variant="lead">
          Более 9&nbsp;лет в&nbsp;web&#8209;разработке. Создаю масштабируемые
          Entrerprise приложения
        </Typography>
      </div>
    </section>
  )
}
