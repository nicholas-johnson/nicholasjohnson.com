import Link from 'next/link'
import { FC } from 'react'
import { ICourseManifest } from '../../../types'

import styles from './Sidebar.module.scss'

export interface ISidebarProps {
  manifest: ICourseManifest
  className?: string
}

export const Sidebar: FC<ISidebarProps> = ({
  manifest,
  className,
}: ISidebarProps) => {
  return (
    <nav className={`${styles.sidebar} ${className}`}>
      <ul>
        {manifest.exercises.map(({ slug, title, description }) => (
          <li key={slug}>
            <Link href={`/${manifest.slug}/${slug}`} passHref>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
