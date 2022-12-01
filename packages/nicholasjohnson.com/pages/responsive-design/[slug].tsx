import Sidebar from '../../components/atoms/Sidebar'
import { getPostBySlug } from '../../lib/getPostBySlug'
import manifest from './manifest'

const Page = ({ params, data, html }) => {
  // console.log({ params, data, content, html })
  return (
    <div>
      <Sidebar manifest={manifest} />
      <h1>{manifest.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const folder = 'responsive-design'
  const pageData = manifest.exercises.find((exercise) => exercise.slug === slug)
  const { data, content, html } = await getPostBySlug({ slug, folder })

  return { props: { ...params, pageData, data, content, html } }
}

export async function getStaticPaths() {
  return {
    paths: manifest.exercises.map(({ slug }) => ({
      params: { slug },
    })),

    fallback: false,
  }
}

export default Page
