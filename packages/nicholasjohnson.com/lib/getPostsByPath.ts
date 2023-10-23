import { getPostByPath } from './getPostByPath'

export const getPostsByPath = async (paths: string[]) =>
  await Promise.all(paths.map((path) => getPostByPath(path)))
