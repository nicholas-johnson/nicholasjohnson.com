import Link from 'next/link'
import { FC } from 'react'

import { StyledList, StyledListItem, StyledMenuWrapper } from './Menu.styles'

export interface IMenuProps {}

export const Menu: FC<IMenuProps> = ({}: IMenuProps) => {
  return (
    <StyledMenuWrapper>
      <StyledList>
        <StyledListItem>
          <Link href="http://linkedin.com/nicholashowardjohnson">LinkedIn</Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="http://youtube.com/d/seniordevtime">YouTube</Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="/contact">Contact</Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="/hire">Hire Me</Link>
        </StyledListItem>
      </StyledList>
    </StyledMenuWrapper>
  )
}
