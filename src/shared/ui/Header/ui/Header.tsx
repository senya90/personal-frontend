import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import styles from './styles.module.css'
import { container, margins } from '@/shared/ui/styles'
import cn from 'classnames'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cn(container.main, styles.container)}>
        <span>SEMOSHIN</span>
        <div className={styles.rightBlock}>
          <div className={margins.mb_xs}>
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
