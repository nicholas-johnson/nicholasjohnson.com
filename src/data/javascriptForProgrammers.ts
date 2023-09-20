import type { ICourse } from "../types/Course";

export const javascriptForProgrammers: ICourse = {
  title: "JavaScript for Programmers Course",
  slug: "javascript-for-programmers",
  deprecationNotice:
    "JavaScript moves quickly, and courses go out of date. JavaScript for Programmers is currently undergoing maintenance. You're welcome to keep using it, but know that some of the content here may not be best practice.",
  exercises: [
    {
      slug: "intro",
      title: "Hello Javascript",
      description:
        "Variables local and global, Strings and Numbers. Variables are global by default in JavaScript, and there is a single global namespace. Here we look at the issues this can cause and how to avoid them.",
    },

    {
      slug: "running-javascript",
      title: "How to execute JavaScript",
      description: "",
    },

    {
      slug: "variables",
      title: "Variable creation and Scope",
      description: "",
    },
    {
      slug: "functions",
      title: "Functions",
      description:
        "Functions are first class objects in JavaScript, here we look at what this means for you.",
    },
    {
      slug: "closure",
      title: "Closure and Variable Scope",
      description:
        "Local variables belong to a special hidden object called scope. This object can persist, even after their function has exited.",
    },
    {
      slug: "arrays",
      title: "Arrays and loops",
      description:
        "JavaScript has both classical loops and functional loops. Lets take a look.",
    },
    {
      slug: "jquery",
      title: "Manipulating the DOM with JQuery",
      description:
        "In which we investigate the power of JQuery to change your DOM.",
    },
    {
      slug: "events",
      title: "JQuery Events",
      description:
        "JavaScript is event driven, it reacts to user events, network events, page load events, etc. We assign callback functions to events. These are called when the event is fired.",
    },
    {
      slug: "each-peach",
      title: "JQuery Functional each",
      description: "Functional Looping with JQuery.",
    },
    {
      slug: "json",
      title: "Object Orientation",
      description:
        "In JavaScript, all objects are arrays. JSON syntax allows us to create objects quickly and easily.",
    },
    {
      slug: "object-orientation",
      title: "Object Orientation",
      description:
        "JavaScript is class free so any function can act as a constructor.",
    },
    {
      slug: "meaning-of-this",
      title: "Meaning of This",
      description:
        "JavaScript has a special variable called this. This is set at runtime..",
    },
    {
      slug: "ajax",
      title: "AJAX",
      description: "We can pull code directly from our server using AJAX.",
    },
    {
      slug: "lodash-templates",
      title: "Lodash Templates",
      description:
        "Templates help us keep out HTML where it belongs: in the HTML.",
    },
    {
      slug: "promises",
      title: "Promises",
      description: "Promises help us manage asynchronous events.",
    },
  ],
  description:
    "You already know how to code, but JavaScript does things rather differently. In this course we learn JavaScript from a programmer's perspective. This course is _JavaScript for Smart People._",
  bullets: [],
  cover: "",
  coverAlt: "",
  coverCredit: "",
  coverCreditUrl: "",
  version: "",
  createdAt: "",
  lastUpdatedAt: "",
};
