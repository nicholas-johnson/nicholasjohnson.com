import { FC } from 'react'

import {
  StyledHeaderGroup,
  StyledHeaderWrapper,
  StyledSubtitle,
  StyledTitle,
} from './Header.styles'
import Menu from './Menu'

export interface IHeaderProps {}

export const Header: FC<IHeaderProps> = ({}: IHeaderProps) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderGroup>
        <StyledTitle>Hi, I'm Nicholas Johnson</StyledTitle>
        <StyledSubtitle>
          software engineer / tech trainer / youtuber
        </StyledSubtitle>
      </StyledHeaderGroup>

      <Menu />
    </StyledHeaderWrapper>
  )
}
