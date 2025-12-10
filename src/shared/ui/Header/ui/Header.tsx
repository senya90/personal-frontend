import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import styles from './styles.module.css'
import cn from 'classnames'
import { container } from '@/styles'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={container.main}>
        <span>Semoshin</span>
        <div>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
