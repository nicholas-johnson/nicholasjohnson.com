import type { ICourse } from "../types/Course";

export const reactCourse: ICourse = {
  title: "The React Course",
  slug: "react-course",
  description: "",
  bullets: [],
  cover: "",
  coverAlt: "",
  coverCreditUrl: "http://settlement.arc.nasa.gov/70sArt/art.html",
  coverCredit: "NASA Ames Research Center",
  version: "",
  createdAt: "",
  lastUpdatedAt: "",
  deprecationNotice:
    "This course was made some time ago and is under review. Please don't take it as canonical.",

  exercises: [
    {
      slug: "rendering",
      title: "Render",
      description:
        "In which we learn about React.render and make a simple hello world.",
    },
    {
      slug: "children",
      title: "Child Nodes",
      description: "More with Render - rendering child nodes.",
    },
    {
      slug: "components",
      title: "Components",
      description: "Creating Components.",
    },
    {
      slug: "props",
      title: "Props",
      description: "Passing data down to render.",
    },
    { slug: "state", title: "State", description: "Updating UI state." },
    {
      slug: "transpiler",
      title: "Transpiling JSX",
      description: "We introduce JSX, to make our templates more legible.",
    },
    {
      slug: "flux",
      title: "Flux",
      description: "Introducing the Flux architecture (observables).",
    },
  ],
};
