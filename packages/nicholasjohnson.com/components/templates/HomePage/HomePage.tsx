import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import { IHomepageContent } from '../../../lib/getHomepageContent'
import { ICourseManifests } from '../../../types'
import CourseList from '../../shared/CourseList'
import Header from '../../shared/Header'
import Post from '../../shared/Post'

import styles from './HomePage.module.scss'

export const HomePage: FC<IHomepageContent & { manifest: ICourseManifests }> =
  ({ posts, manifest }: IHomepageContent & { manifest: ICourseManifests }) => {
    return (
      <div className={styles.homePage}>
        <Head>
          <title>Hi, I'm Nicholas Johnson</title>
          <meta
            name="description"
            content="Software developer. Youtuber. Create Life and Explore the Galaxy"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header className={styles.header} />

        <div className={styles.content}>
          {posts.map((post) => {
            const { folder, slug, title, html } = post
            const key = `${folder}-${slug}`
            const path = `/${folder}/${slug}`

            return <Post post={post} key={key} />
          })}
        </div>

        <div className={styles.rightNav}>
          <CourseList manifests={manifest.courses} />
        </div>
      </div>
    )
  }
