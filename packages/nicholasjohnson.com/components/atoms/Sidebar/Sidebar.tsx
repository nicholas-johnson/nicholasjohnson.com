import Link from 'next/link'
import { FC } from 'react'
import { ICourseManifest } from '../../../types'

import styles from './Sidebar.module.scss'

export interface ISidebarProps {
  manifest: ICourseManifest
  className?: string
  folder?: string
}

export const Sidebar: FC<ISidebarProps> = ({
  manifest,
  className,
  folder,
}: ISidebarProps) => {
  return (
    <nav className={`${styles.sidebar} ${className}`}>
      <ul>
        {manifest.exercises.map(({ slug, title, description }) => (
          <li key={slug}>
            <Link href={`/${folder}/${slug}`} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
