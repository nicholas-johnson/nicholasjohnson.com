import type { NextPage } from 'next'
import HomePage from '../components/templates/HomePage'
import { getHomepageContent, IHomepageContent } from '../lib/getHomepageContent'
import manifest from '../content/home/manifest'

const Home: NextPage = (props: IHomepageContent) => {
  return <HomePage {...props} />
}

export default Home

const validatePageData = (pageData: IHomepageContent) => {
  const { posts } = pageData
  posts.forEach((post) => {
    const { folder, slug, title, html, date } = post
    if (!folder) {
      throw new Error(`folder is missing from post: ${JSON.stringify(post)}`)
    }
    if (!slug) {
      throw new Error(`slug is missing from post: ${JSON.stringify(post)}`)
    }
    if (!date) {
      throw new Error(`date is missing from post: ${JSON.stringify(post)}`)
    }
    if (!title) {
      throw new Error(`title is missing from post: ${JSON.stringify(post)}`)
    }
    if (!html) {
      throw new Error(`html is missing from post: ${JSON.stringify(post)}`)
    }
  })
}

export async function getStaticProps({ params }) {
  const pageData = await getHomepageContent()
  validatePageData(pageData)
  console.log({ props: { ...params, ...pageData, manifest } })
  return { props: { ...params, ...pageData, manifest } }
}
