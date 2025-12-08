import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'

export const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <LanguageSwitcher />
      <ThemeToggle />
    </header>
  )
}
