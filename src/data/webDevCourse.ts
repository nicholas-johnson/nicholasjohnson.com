import type { ICourse } from "../types/Course";

export const webDevCourse: ICourse = {
  title: "The HTML/CSS Course",
  slug: "webdev-course",
  cover: "/images/book-covers/station.jpg",
  coverAlt: "Interior of a massive space station",
  coverCredit: "NASA Ames Research Center",
  coverCreditUrl: "http://settlement.arc.nasa.gov/70sArt/art.html",
  description:
    "Learn HTML anc CSS, the foundational skills you need to build websites and become a front end developer.",
  bullets: [
    "HTML and CSS for beginners",
    "13 lessons plus exercises",
    "Learn the foundational skills you need to build websites",
    "Suitable for new coders and non-coders",
    "No signup required, free forever!",
  ],
  version: "2.0.0",
  createdAt: "2015-04-01",
  lastUpdatedAt: "2023-09-09",
  exercises: [
    {
      slug: "intro",
      title: "Welcome to HTML",
      description: "Introduction to the course",
    },
    {
      slug: "tags",
      title: "Tags are the foundation of HTML",
      description: "We use tags to cut up our HTML",
    },
    {
      slug: "more-tags",
      title: "More types of Tags",
      description: "Here are some more tags you can use",
    },
    {
      slug: "attributes",
      title: "Attributes",
      description: "Extend the behaviour of your tags with attributes",
    },
    {
      slug: "images",
      title: "Images",
      description: "Add images to your page.",
    },
    {
      slug: "lists",
      title: "Lists",
      description: "Lists are used everywhere in HTML",
    },
    {
      slug: "style-attributes",
      title: "Style",
      description: "We can add style to our page using simple attributes",
    },
    {
      slug: "divs-and-spans",
      title: "Divs and Spans",
      description: "For selecting arbitrary bits of the page",
    },
    {
      slug: "hex",
      title: "Hexadecimal Colours",
      description: "Make your page look nice",
    },
    {
      slug: "entity-references",
      title: "Entity references",
      description: "Special Characters look nice when splashed around",
    },
    {
      slug: "selectors",
      title: "Selectors",
      description: "Put common styles in a style tag",
    },
    {
      slug: "stylesheets",
      title: "Extracting a stylesheet",
      description: "Our styles can live in a separate sheet",
    },
    {
      slug: "css-classes",
      title: "Classes",
      description: "Selecting elements by class",
    },
    {
      slug: "nested-selectors",
      title: "Nested Selectors",
      description:
        "We can chain multiple selectors together to get better control",
    },
    //{slug: // "layout-strategies",
    //   "title": "Layout Strategies",
    //   "description": "The default layout if full width, which is actually quite useful."
    // },
    {
      slug: "full-width",
      title: "Full Width Layouts",
      description: "Default and useful",
    },
    {
      slug: "abs-layout",
      title: "Absolutely positioned layouts",
      description: "Place items where you want them",
    },
    // {
    //   slug: "float-layout",
    //   title: "Float layouts",
    //   description: "A useful layout which respects height",
    // },
    {
      slug: "positioning-with-margins",
      title: "Positioning with Margins",
      description: "Handy simple layouts",
    },
    //{slug: // "hybrid-layouts",
    //   "title": "Hybrid layouts",
    //   "description": "A hybrid layout blends both layout strategies"
    // }
  ],
};

// import { ICourseManifest } from '../../types'

// const manifest: ICourseManifest = {
//   title: 'Learn HTML and CSS',
//   img: '/images/cover-images/station2.jpg',
//   alt: 'A space station',
//   exercises: [
//     {
//       title: 'Tags',
//       slug: 'tags',
//     },
//     {
//       title: 'More Tags',
//       slug: 'more-tags',
//     },
//     {
//       title: 'Nested Tags (tags inside other tags)',
//       slug: 'nested-tags',
//     },
//     {
//       title: 'Lists',
//       slug: 'lists',
//     },
//     {
//       title: 'Attributes',
//       slug: 'attributes',
//     },
//     {
//       title: 'Images - plus self closing tags',
//       slug: 'images',
//     },
//     {
//       title: 'Tables',
//       slug: 'tables',
//     },
//     {
//       title: 'Making a complete document',
//       slug: 'document',
//     },
//     {
//       title: 'Style attributes',
//       slug: 'style',
//     },
//     {
//       title: 'Structural Tags',
//       slug: 'structural-tags',
//     },

//     {
//       title: 'A CSS Stylesheet',
//       slug: 'stylesheet',
//     },
//     {
//       title: 'Matching elements',
//       slug: 'matching-elements',
//     },
//     {
//       title: 'Matching classes',
//       slug: 'matching-classes',
//     },
//     {
//       title: 'Matching ids',
//       slug: 'matching-ids',
//     },
//     {
//       title: 'Matching nested elements',
//       slug: 'matching-nested-elements',
//     },
//     {
//       title: 'Typography',
//       slug: 'typography',
//     },
//     {
//       title: 'Display Inline, Block and Inline-Block',
//       slug: 'display-modes',
//     },
//     {
//       title: 'Styling Lists',
//       slug: 'styling-lists',
//     },
//     {
//       title: 'Styling a bar chart',
//       slug: 'bar-chart',
//     },
//     {
//       title: 'Layout: Centering and Max-Width',
//       slug: 'centering',
//     },
//     {
//       title: 'Layout: Absolute positioning',
//       slug: 'absolute-positioning',
//     },
//     {
//       title: 'Layout: Floats',
//       slug: 'floats',
//     },
//     {
//       title: 'Media Queries',
//       slug: '',
//     },

//     {
//       title: 'Responding Stepwise',
//       description:
//         "In which we write conditional CSS with media queries. Let's linearise our layout",
//       slug: '',
//     },
//     {
//       title: 'Responsive Menu',
//       description:
//         'In which we create a horizontal nav that converts to a stacked nav at responsive scale.',
//       slug: '',
//     },
//     {
//       title: 'Simple Shapes',
//       slug: '',
//     },
//     {
//       title: 'SVG with CSS',
//       slug: '',
//     },
//     {
//       title: 'Final bits',
//       slug: '',
//     },
//   ],
// }
