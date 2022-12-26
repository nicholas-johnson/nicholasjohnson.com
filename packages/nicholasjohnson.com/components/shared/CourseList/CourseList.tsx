import { FC } from 'react'
import { ICourseManifest } from '../../../types'

import styles from './CourseList.module.scss'

export interface ICourseListProps {
  manifests: ICourseManifest[]
  className?: string
}

export const CourseList: FC<ICourseListProps> = ({
  manifests,
}: ICourseListProps) => {
  return (
    <nav className={styles.CourseList}>
      <ul>
        {manifests.map((manifest) => (
          <li key={manifest.title}>{manifest.title}</li>
        ))}
      </ul>
    </nav>
  )
}
