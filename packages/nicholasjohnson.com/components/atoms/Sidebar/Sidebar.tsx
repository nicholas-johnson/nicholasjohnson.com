import Link from 'next/link'
import { FC } from 'react'
import { ICourseManifest } from '../../../types'

import {
  StyledLink,
  StyledList,
  StyledListItem,
  StyledSidebarWrapper,
} from './Sidebar.styles'

export interface ISidebarProps {
  manifest: ICourseManifest
}

export const Sidebar: FC<ISidebarProps> = ({ manifest }: ISidebarProps) => {
  return (
    <StyledSidebarWrapper>
      <StyledList>
        {manifest.exercises.map(({ slug, title, description }) => (
          <StyledListItem key={slug}>
            <Link href={`/${manifest.slug}/${slug}`} passHref>
              <StyledLink>{title}</StyledLink>
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledSidebarWrapper>
  )
}
