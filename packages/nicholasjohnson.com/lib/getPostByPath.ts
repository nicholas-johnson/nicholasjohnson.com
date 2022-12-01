import matter from 'gray-matter'
import fs from 'fs'
import { marked } from 'marked'

export const getPostByPath = async (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const { date, title } = data
  const html = marked.parse(content)
  const segments = filePath.split('/')
  const slug = segments.pop()?.replace('.md', '')
  const folder = segments.pop()

  return { data, date, title, content, html, filePath, slug, folder }
}
