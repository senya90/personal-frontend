import cn from 'classnames'

import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher'
import { Link } from '@/shared/ui/Link'
import { Navigation } from '@/shared/ui/Navigation'
import { container, margins } from '@/shared/ui/styles'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import { Typography } from '@/shared/ui/Typography'

import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cn(container.main, styles.container)}>
        <Link href="/" linkClassName={styles.logo}>
          <Typography variant="lead">SEMOSHIN</Typography>
        </Link>

        <div className={styles.rightBlock}>
          <Navigation />
          <div className={styles.rightCtrls}>
            <div className={margins.mb_xs}>
              <ThemeToggle />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
