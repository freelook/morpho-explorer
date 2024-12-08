import clsx from 'clsx'
import styles from './Section.module.css'

export const Section = ({
  children,
  className
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
  return <section className={clsx([styles.section, className])}>{children}</section>
}
