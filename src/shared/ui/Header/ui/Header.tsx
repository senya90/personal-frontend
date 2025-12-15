import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import styles from './styles.module.css'
import { container, margins } from '@/shared/ui/styles'
import cn from 'classnames'
import { Navigation } from '@/shared/ui/Header/ui/Navigation/ui/Navigation'

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

// export function LanguageSwitcher() {
//   const pathname = usePathname()

//   return (
//     <div style={{ display: 'flex', gap: 12 }}>
//       <a onClick={() => redirect({ locale: 'ru', href: pathname })}>RU</a>
//       <a onClick={() => redirect({ locale: 'en', href: pathname })}>EN</a>
//     </div>
//   )
// }
