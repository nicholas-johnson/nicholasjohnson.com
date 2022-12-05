import { setDefaultResultOrder } from 'dns'
import { FC } from 'react'
import { IPost } from '../../../lib/getPostBySlug'
import { ICourseManifest } from '../../../types'
import Header from '../../atoms/Header'
import Post from '../../atoms/Post'
import CourseManifest from '../../atoms/CourseManifest'

import styles from './ContentPage.module.scss'

export interface IContentPageProps {
  post: IPost
  manifest?: ICourseManifest
}

export const ContentPage: FC<IContentPageProps> = ({
  post,
  manifest,
}: IContentPageProps) => {
  return (
    <div className={styles.contentPage}>
      <Header className={styles.header} />
      <Post post={post} className={styles.article} />
      {manifest && (
        <CourseManifest
          manifest={manifest}
          folder={post.folder}
          className={styles.leftSidebar}
        />
      )}
    </div>
  )
}
