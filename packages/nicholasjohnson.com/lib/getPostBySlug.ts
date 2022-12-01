import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'
import { marked } from 'marked'
import { getPostByPath } from './getPostByPath'
import { contentPath } from './paths'

// const postsDirectory = join(process.cwd(), '_posts')

export const getPostBySlug = async ({
  folder,
  slug,
}: {
  folder: string
  slug: string
}) => {
  const fullPath = join(contentPath, folder, `${slug}.md`)

  return getPostByPath(fullPath)
}

export type IPost = Awaited<ReturnType<typeof getPostBySlug>>
