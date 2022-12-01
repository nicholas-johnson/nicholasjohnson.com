import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'
import { getHomepageContent } from '../lib/getHomepageContent'
import { manifest } from './manifest'

const StyledHomeWrapper = styled.div``

const Home: NextPage = ({
  posts,
}: Awaited<ReturnType<typeof getHomepageContent>>) => {
  console.log({ posts })
  return (
    <StyledHomeWrapper>
      <Head>
        <title>Hi, I'm Nicholas Johnson</title>
        <meta
          name="description"
          content="Software developer. Youtuber. Create Life and Explore the Galaxy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {posts.map((post) => (
        // <h1 key={post.slug + post.title}>{post.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      ))}
      {manifest.map((item) => (
        <article key={item.slug}>
          <Link href={item.slug}>{item.title}</Link>
        </article>
      ))}
    </StyledHomeWrapper>
  )
}

export default Home

export async function getStaticProps({ params }) {
  const pageData = await getHomepageContent()
  return { props: { ...params, ...pageData } }
}
