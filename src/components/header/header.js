import React from 'react'
import Link from 'gatsby-link'

import styles from './header.module.css'

import Container from '../container/container';

const Header = () => (
  <header>
    <Container>
      <h1>
        <Link to="/">
          Nicholas Johnson
        </Link>
      </h1>
    </Container>
  </header>
)

export default Header;
