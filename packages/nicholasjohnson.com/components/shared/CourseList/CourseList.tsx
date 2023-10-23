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
      <h2>Free Courses</h2>
      <ul>
        {manifests.map((manifest) => (
          <li key={manifest.title}>
            {manifest.title}
            <img src={manifest.img} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
