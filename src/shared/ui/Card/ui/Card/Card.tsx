import { CardHeader } from '@/shared/ui/Card/ui/CardHeader/CardHeader'
import styles from './styles.module.css'
import { CardSection } from '@/shared/ui/Card/ui/CardSection/CardSection'
import { CardFooter } from '@/shared/ui/Card/ui/CardFooter/CardFooter'
import { ReactNode } from 'react'
import cn from 'classnames'

interface IProps {
  children?: ReactNode
}

const Card = ({ children }: IProps) => {
  return <article className={cn(styles.card)}>{children}</article>
}

Card.Header = CardHeader
Card.Section = CardSection
Card.Footer = CardFooter

export { Card }
