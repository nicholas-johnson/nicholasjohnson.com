import { readdir } from 'fs/promises'
import { join } from 'path'

export const getFiles = async (path: string) =>
  (await readdir(path, { withFileTypes: true }))
    .filter((dirent) => dirent.isFile())
    .map((dirent) => join(path, dirent.name))
