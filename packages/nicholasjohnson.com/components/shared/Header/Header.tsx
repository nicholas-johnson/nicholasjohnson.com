import { FC } from 'react'

import Menu from './Menu'

import styles from './Header.module.scss'
import Link from 'next/link'

export interface IHeaderProps {
  className?: string
}

export const Header: FC<IHeaderProps> = ({ className = '' }: IHeaderProps) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <Link href="/">
        <hgroup>
          <h1>
            <Link href="/">Hi, I'm Nicholas Johnson</Link>
          </h1>
          <p>I'm going to teach you everything I know</p>
        </hgroup>
      </Link>
      <div />

      <Menu />
    </header>
  )
}
