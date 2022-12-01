import ContentPage from '../../components/templates/ContentPage'
import { getAllContent } from '../../lib/getAllContent'
import { getPostBySlug, IPost } from '../../lib/getPostBySlug'
import { ICourseManifest } from '../../types'

const Page = ({
  post,
  manifest,
}: {
  post: IPost
  manifest?: ICourseManifest
}) => {
  return <ContentPage post={post} manifest={manifest} />
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string; folder: string }
}) {
  const { slug, folder } = params
  console.log('Params', params, slug, folder)
  const post = await getPostBySlug({ slug, folder })

  const { default: manifest } = await import(
    '../../content/source/intro-to-javascript/manifest'
  )

  console.log(manifest)

  return { props: { ...params, post, manifest } }
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
