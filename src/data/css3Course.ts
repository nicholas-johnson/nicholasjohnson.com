import type { ICourse } from "../types/Course";

export const css3Course: ICourse = {
  title: "The CSS3 Course",
  slug: "css3",
  cover: "/images/sections/node.svg",
  description: "",
  bullets: [],
  coverAlt: "",
  version: "",
  createdAt: "",
  lastUpdatedAt: "",
  exercises: [
    { slug: "opacity", title: "Opacity", description: "Like Glass." },
    {
      slug: "border-radius",
      title: "Border Radius",
      description: "Dangerous Curves.",
    },
    {
      slug: "box-shadow",
      title: "Box Shadow",
      description: "Not just for drop shadow",
    },
    {
      slug: "multiple-backgrounds",
      title: "Multiple Backgrounds",
      description: "All lying on top of one another.",
    },
    {
      slug: "transformations",
      title: "Transformations",
      description: "Bend it like Beckham.",
    },
    {
      slug: "transitions",
      title: "Transitions",
      description: "Move smoothly from state to state.",
    },
    {
      slug: "pseudoelements",
      title: "Pseudoelements",
      description: "Add elements right there in your CSS.",
    },
    { slug: "animation", title: "Animation", description: "Make it wiggle." },
  ],
};
