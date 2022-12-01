import { dir } from 'console'
import { join } from 'path'
import { getDirectories } from './getDirectories'
import { getFilesInDirectories } from './getFilesInDirectories'
import { getPostsByPath } from './getPostsByPath'
import { contentPath } from './paths'

export const getAllContent = async () => {
  const dirPaths = (await getDirectories(contentPath)).map((dir) =>
    join(contentPath, dir)
  )

  const filePaths = await getFilesInDirectories(dirPaths)

  const posts = (await getPostsByPath(filePaths)).sort((a, b) =>
    a.date > b.date ? -1 : 1
  )

  return posts
}
