import cn from 'classnames'

import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher'
import { Navigation } from '@/shared/ui/Navigation'
import { container, margins } from '@/shared/ui/styles'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'

import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cn(container.main, styles.container)}>
        <span>SEMOSHIN</span>
        <div className={styles.rightBlock}>
          <Navigation />
          <div className={styles.rightCtrls}>
            <div className={margins.mb_xs}>
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
