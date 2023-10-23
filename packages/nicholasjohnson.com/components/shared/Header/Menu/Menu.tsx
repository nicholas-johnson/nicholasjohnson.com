import Link from 'next/link'
import { FC } from 'react'

import { StyledList, StyledListItem, StyledMenuWrapper } from './Menu.styles'

import styles from './Menu.module.scss'

export interface IMenuProps {}

export const Menu: FC<IMenuProps> = ({}: IMenuProps) => {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li>
          <Link href="http://linkedin.com/nicholashowardjohnson">LinkedIn</Link>
        </li>
        <li>
          <Link href="http://youtube.com/d/seniordevtime">YouTube</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/hire">Hire Me</Link>
        </li>
      </ul>
    </nav>
  )
}
