import { readdir } from 'fs/promises'

export const getDirectories = async (path: string) =>
  (await readdir(path, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
