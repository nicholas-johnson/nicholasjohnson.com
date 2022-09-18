import { ICourseManifest } from '../../types'

const manifest: ICourseManifest = {
  title: 'The Responsive Design Course',
  slug: 'responsive-design',
  img: '/images/sections/node.svg',

  exercises: [
    {
      slug: 'media-queries',
      title: 'Media Queries',
      description:
        'The magic sauce that makes it all work. Media queries let us serve different CSS depending on the width or height of the browser.',
    },
    {
      slug: 'responsive-menu',
      title: 'Responsive Menu',
      description: 'Buttons must be made larger.',
    },
    {
      slug: 'responsive-images',
      title: 'Responsive Images',
      description: 'Images fill the available space.',
    },
    {
      slug: 'vectors',
      title: 'Vectors',
      description: 'Vector graphics provide infinite zoomability.',
    },
  ],
}

export default manifest
