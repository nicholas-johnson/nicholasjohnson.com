import { IBlogPost, ISeries } from '../types'

export const manifest: (IBlogPost | ISeries)[] = [
  {
    title: 'Webdev',
    slug: 'webdev',
    type: 'series',
  },
  {
    title: 'Responsive design',
    slug: 'responsive-design',
    type: 'series',
  },
]
