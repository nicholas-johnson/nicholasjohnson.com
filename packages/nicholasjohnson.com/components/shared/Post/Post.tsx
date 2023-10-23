import Link from 'next/link'
import { FC } from 'react'
import { IPost } from '../../../lib/getPostBySlug'

import styles from './Post.module.scss'

export interface IPostProps {
  post: IPost
  className?: string
}

export const Post: FC<IPostProps> = ({ className, post }: IPostProps) => {
  const { title, html, folder, slug } = post
  const id = `${folder}-${slug}`
  const path = `/${folder}/${slug}`
  return (
    <article className={`${styles.post} ${className}`} id={id}>
      <h1>
        <Link href={path}>{title}</Link>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
