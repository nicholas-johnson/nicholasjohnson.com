import type { ICourse } from "../types/Course";

export const d3Course: ICourse = {
  title: "D3  Course",
  slug: "d3-course",

  description: "",
  bullets: [],
  cover: "",
  coverAlt: "",
  version: "",
  createdAt: "",
  lastUpdatedAt: "",
  coverCredit: "",
  coverCreditUrl: "",

  exercises: [
    {
      title: "Welcome to D3",
      description: "In which we briefly introduce D3 and the major components.",
      slug: "intro",
    },

    {
      title: "Select",
      description: "In which we learn how to search the DOM.",
      slug: "select",
    },

    {
      title: "Append and Attr",
      description:
        "In which we learn how to add elements and attributes to the DOM and hand code a simple chart.",
      slug: "append",
    },

    {
      title: "Data",
      description: "In which we learn about Data binding.",
      slug: "data",
    },

    {
      title: "Enter and Exit",
      description:
        "In which we learn the genius of the enter and exit selectors, and we draw a graph with plain old HTML5.",
      slug: "enter-and-exit",
    },

    {
      title: "SVG",
      description: "Let's draw some circles and squares.",
      slug: "svg",
    },

    {
      title: "SVG Histogram",
      description: "In which we create a graph data binding and SVG.",
      slug: "histogram",
    },

    {
      title: "SVG Scatterplot",
      description: "In which we create a graph using SVG",
      slug: "scatterplot",
    },

    {
      title: "Transition",
      description: "Animation can make a graph wonderful. With D3 it's easy.",
      slug: "transition",
    },

    {
      title: "Events",
      description: "In which we listen out for user interaction, and respond.",
      slug: "events",
    },

    {
      title: "Scales",
      description: "In which we normalise data for display.",
      slug: "scales",
    },

    {
      title: "Color Scales",
      description: "In which we automatically assign colours to our data.",
      slug: "color",
    },

    {
      title: "Axes",
      description: "In which we automatically generate axes for our plots.",
      slug: "axes",
    },

    {
      title: "Ajax",
      description:
        "We learn how to pull data-feeds directly from the internet via AJAX.",
      slug: "ajax",
    },

    {
      title: "Parsing Data",
      description: "We parse CSV and XML.",
      slug: "parsing",
    },

    {
      title: "Paths",
      description: "Drawing freeform SVG paths.",
      slug: "paths",
    },

    {
      title: "Pie Layout",
      description:
        "Layouts help us transform data for display. Here we learn about the pie layout and use it to make a pie chart.",
      slug: "pie-layout",
    },
  ],
};
