import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import { IHomepageContent } from '../../../lib/getHomepageContent'
import Header from '../../atoms/Header'
import Post from '../../atoms/Post'

import styles from './HomePage.module.scss'

export const HomePage: FC<IHomepageContent> = ({ posts }: IHomepageContent) => {
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
    </div>
  )
}
