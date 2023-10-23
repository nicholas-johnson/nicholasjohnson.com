import { ICourseManifest } from '../../types'

const manifest: ICourseManifest = {
  title: 'Learn to Program with JavaScript!',
  img: '/images/cover-images/station2.jpg',
  alt: 'A space station',
  exercises: [
    {
      slug: 'intro',
      title: 'Welcome to JavaScript',
    },
    {
      slug: 'strings',
      title: "Don't string me along",
    },
    {
      slug: 'variables',
      title: 'Buckets of Fun',
    },
    {
      slug: 'maths',
      title: 'Doing Sums',
    },
    {
      slug: 'functions',
      title: 'Doing things more than once',
    },
    {
      slug: 'flow-control',
      title: 'Do this, or else...',
    },
    {
      slug: 'booleans',
      title: 'An exciting foray into Booleans. What Ho!',
    },
    {
      slug: 'loops',
      title: 'I am dizzy, my head is spinning',
    },
    {
      slug: 'arrays',
      title: 'Racks of Variables',
    },
    {
      slug: 'integration',
      title: 'Looping over arrays',
    },
    {
      slug: 'json',
      title: 'JavaScript Object Notation',
    },
  ],
}

export default manifest
