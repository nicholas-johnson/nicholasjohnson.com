import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'
import { manifest } from './manifest'

const StyledHomeWrapper = styled.div``

const Home: NextPage = () => {
  return (
    <StyledHomeWrapper>
      <Head>
        <title>Hi, I'm Nicholas Johnson!</title>
        <meta
          name="description"
          content="Blogging about technology, training, and other random bullshit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {manifest.map((item) => (
        <article key={item.slug}>
          <Link href={item.slug}>{item.title}</Link>
        </article>
      ))}
    </StyledHomeWrapper>
  )
}

export default Home

// export async function getStaticProps({ params }) {
//   console.log({ params })
//   const slug = params.slug
//   const folder = 'responsive-design'
//   const pageData = manifest

//   const { data, content, html } = await getPostBySlug({ slug, folder })

//   return { props: { ...params, pageData, data, content, html, exercises } }
// }
