import Link from 'next/link'
import { FC } from 'react'
import { ICourseManifest } from '../../../types'

import styles from './CourseManifest.module.scss'

export interface ICourseManifestProps {
  manifest: ICourseManifest
  className?: string
  folder?: string
}

export const CourseManifest: FC<ICourseManifestProps> = ({
  manifest,
  className,
  folder,
}: ICourseManifestProps) => {
  const { title, exercises } = manifest

  return (
    <nav className={`${styles.sidebar} ${className}`}>
      <h2>{title}</h2>
      <ul>
        {exercises.map(({ slug, title, description }) => (
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
