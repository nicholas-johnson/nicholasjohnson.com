import Head from 'next/head'
import React from 'react'
import { FC } from 'react'
import Course from '../../components/Course'
import Header from '../../components/Header'
import manifest from './manifest'
import manfest from './manifest'

const Webdev: FC = () => {
  return (
    <>
      <Head>
        <title>Hi, I'm Nicholas Johnson!</title>
        <meta
          name="description"
          content="Blogging about technology, training, and other random bullshit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Course manifest={manifest}></Course>
    </>
  )
}

export default Webdev
