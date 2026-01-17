import { BurgerButton } from '@/shared/ui/Header/ui/MobileMenu/ui/BurgerButton'
import { DropdownNavMenu } from '@/shared/ui/Header/ui/MobileMenu/ui/DropdownNavMenu'

import styles from './styles.module.css'

interface IProps {
  isOpen: boolean
  onOverlayClick?: () => void
  onButtonClick?: () => void
  onItemClick?: () => void
}

export const MobileMenu = ({
  isOpen,
  onItemClick,
  onOverlayClick,
  onButtonClick,
}: IProps) => {
  return (
    <div className={styles.mobileMenuContainer}>
      <BurgerButton isOpen={isOpen} onClick={onButtonClick} />
      <DropdownNavMenu
        isOpen={isOpen}
        onOverlayClick={onOverlayClick}
        onItemClick={onItemClick}
      />
    </div>
  )
}
