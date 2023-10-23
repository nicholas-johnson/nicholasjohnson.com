// Get all content in the content/source directory and return it as an array of objects.

import matter from 'gray-matter'
import { join } from 'path'

import { marked } from 'marked'
import { getDirectories } from './getDirectories'
import { getFilesInDirectories } from './getFilesInDirectories'
import { getPostsByPath } from './getPostsByPath'
import { contentPath } from './paths'

export const getHomepageContent = async () => {
  const dirPaths = (await getDirectories(contentPath)).map((dir) =>
    join(contentPath, dir)
  )

  const filePaths = await getFilesInDirectories(dirPaths)

  const posts = (await getPostsByPath(filePaths)).sort((a, b) =>
    a?.date > b?.date ? -1 : 1
  )

  return { posts }
}

export type IHomepageContent = Awaited<ReturnType<typeof getHomepageContent>>
