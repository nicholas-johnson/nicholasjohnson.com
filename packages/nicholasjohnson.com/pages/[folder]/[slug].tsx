import Sidebar from '../../components/Sidebar'
import { getAllContent } from '../../lib/getAllContent'
import { getPostBySlug } from '../../lib/getPostBySlug'
import manifest from './manifest'

const Page = ({ html, title }: Awaited<ReturnType<typeof getPostBySlug>>) => {
  return (
    <div>
      {/* <Sidebar manifest={manifest} /> */}
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string; folder: string }
}) {
  const { slug, folder } = params
  console.log('Params', params, slug, folder)
  const post = await getPostBySlug({ slug, folder })

  return { props: { ...params, ...post } }
}

export async function getStaticPaths() {
  const paths = await (
    await getAllContent()
  ).map(({ slug, folder }) => ({ params: { slug, folder } }))

  return {
    paths,
    fallback: false,
  }
}

export default Page
