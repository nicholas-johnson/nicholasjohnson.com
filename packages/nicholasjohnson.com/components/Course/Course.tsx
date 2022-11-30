import Link from 'next/link'
import { FC } from 'react'
import { ICourseManifest } from '../../types'

import { StyledCourseWrapper } from './Course.styles'

export interface ICourseProps {
  children?: React.ReactNode
  manifest: ICourseManifest
}

export const Course: FC<ICourseProps> = ({ manifest }: ICourseProps) => {
  return (
    <StyledCourseWrapper>
      <h1>{manifest.title}</h1>

      {manifest.exercises.map((item) => (
        <article key={item.slug}>
          <Link href={`${manifest.slug}/${item.slug}`}>{item.title}</Link>
        </article>
      ))}
    </StyledCourseWrapper>
  )
}
