import type { ICourse } from "../types/Course";

export const learnToCodeWithJavaScript: ICourse = {
  title: "Learn to Program with JavaScript!",
  slug: "learn-to-code-with-javascript",
  cover: "/images/book-covers/station2.jpg",
  coverAlt: "An awesome space station turning in the void",
  coverCredit: "",
  coverCreditUrl: "",
  version: "2.0.2",
  createdAt: "2014",
  lastUpdatedAt: "23th September 2023",
  description:
    "Suitable for beginners. Learn to code from scratch with JavaScript",
  bullets: [
    "12 lessons",
    "Suitable for new coders and non-coders",
    "Learn the democratic language of the internet with simple exercises",
    "Escape tutorial hell",
    "Make sandwiches",
    "**Free** forever, no signup required!",
    "Won't anyone help Mrs Potts?",
  ],
  exercises: [
    {
      slug: "intro",
      title: "Welcome to JavaScript",
      description: "Let's explore",
    },
    {
      slug: "strings",
      title: "Strings",
      description: "Don't string me along",
    },
    {
      slug: "variables",
      title: "Variables",
      description: "Buckets of Fun",
    },
    { slug: "maths", title: "Maths", description: "Doing Sums" },
    {
      slug: "functions",
      title: "Functions",
      description: "Doing things more than once",
    },
    {
      slug: "flow-control",
      title: "Flow Control",
      description: "Do this, or else...",
    },
    {
      slug: "booleans",
      title: "Booleans",
      description: "An exciting foray into Booleans. What Ho!",
    },
    {
      slug: "loops",
      title: "Loops",
      description: "I am dizzy, my head is spinning",
    },
    {
      slug: "arrays",
      title: "Arrays",
      description: "Racks of Variables",
    },
    {
      slug: "functional-loops",
      title: "Functional Loops",
      description: "Looping over arrays",
    },
    {
      slug: "objects",
      title: "Objects",
      description: "Object Orientation",
    },
    {
      slug: "integration",
      title: "Integration",
      description: "Putting it all together",
    },
    {
      slug: "mario",
      title: "Object Orientation with Mario",
      description: "Building a little game",
    },
    {
      slug: "jquery",
      title: "A Dash of JQuery",
      description: "Manipulating the DOM",
    },
  ],
};
