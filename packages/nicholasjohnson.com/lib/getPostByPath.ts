import matter from 'gray-matter'
import fs from 'fs'
import { marked } from 'marked'
import hljs from 'highlight.js'

export const getPostByPath = async (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const { date, title } = data

  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartypants: false,
    xhtml: false,
  })

  const html = marked.parse(content)
  const segments = filePath.split('/')
  const slug = segments.pop()?.replace('.md', '')
  const folder = segments.pop()

  return { data, date, title, content, html, filePath, slug, folder }
}
