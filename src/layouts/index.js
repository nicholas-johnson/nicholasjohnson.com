import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'
import './xonokai.css'

import Container from '../components/container/container';
import TopNav from '../components/topnav/topnav';
import Header from '../components/header/header';

const TemplateWrapper = ({ children }) => (
  <div>

    <Helmet
      title="Nicholas Johnson"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <TopNav />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
