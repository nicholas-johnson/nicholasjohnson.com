import { readdir } from 'fs/promises'
import { getFiles } from './getFiles'

export const getFilesInDirectories = async (dirPaths: string[]) =>
  (await Promise.all(dirPaths.map((path) => getFiles(path))))
    .flat()
    .filter((filename) => filename.endsWith('.md'))

// ;(await readdir(path, { withFileTypes: true }))
//   .filter((dirent) => dirent.isFile())
//   .map((dirent) => dirent.name)
