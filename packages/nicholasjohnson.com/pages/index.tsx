import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/shared/Header'
import HomePage from '../components/templates/HomePage'
import { getHomepageContent, IHomepageContent } from '../lib/getHomepageContent'
import manifest from '../content/home/manifest'

const Home: NextPage = (props: IHomepageContent) => {
  return <HomePage {...props} />
}

export default Home

export async function getStaticProps({ params }) {
  const pageData = await getHomepageContent()
  return { props: { ...params, ...pageData, manifest } }
}
