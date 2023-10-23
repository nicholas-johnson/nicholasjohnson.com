import type { ICourse } from "../types/Course";

export const nodeCourse: ICourse = {
  title: "The NodeJS Course",
  slug: "node-course",

  description: "",
  bullets: [],
  cover: "",
  coverAlt: "",
  coverCreditUrl: "http://settlement.arc.nasa.gov/70sArt/art.html",
  coverCredit: "NASA Ames Research Center",
  version: "",
  createdAt: "",
  lastUpdatedAt: "",
  exercises: [
    {
      slug: "node-console",
      title: "Node Console",

      description:
        "In which we install Node, hop into the console, and execute a simple program.",
    },
    {
      slug: "node-server",
      title: "Let's make a server",
      description:
        "In which we create a simple Node server and ship out a website.",
    },
    {
      slug: "file-system",
      title: "File System",
      description:
        "In which we interact with the filesystem, and serve a web page from a file.",
    },
    {
      slug: "modules",
      title: "Node Modules",
      description:
        "In which we learn about Node modules, how they work, and how to make one.",
    },
    {
      slug: "npm",
      title: "NPM (Node Package Manager)",
      description:
        "In which we learn about Node modules, how they work, and how to make one.",
    },
    {
      slug: "jade",
      title: "Jade",
      description:
        "Jade is a popular Node templating language. You write less code which makes you more productive. Once you use it, you'll wonder how you ever lived without it. Never close a tag again.",
    },
    {
      slug: "gulp",
      title: "Automation with Gulp",
      description:
        "Gulp is a tool for automating your workflow, the successor to Grunt.",
    },
    {
      slug: "sass",
      title: "CSS generation with SASS",
      description:
        "Generate CSS the modern way with SASS. We also take a glance at livereload and dip our toes into autoprefixer.",
    },
    {
      slug: "jasmine",
      title: "Jasmine",
      description: "We see how Jasmine can be used to test a Node project.",
    },
    {
      slug: "promises",
      title: "Promises",
      description:
        "We see how we can combine the best of asynchronous and synchronous code with Promises.",
    },
    {
      slug: "process",
      title: "Process",
      description: "Pull information about the current running process.",
    },
    {
      slug: "express",
      title: "Middleware with Express",
      description:
        "Express is a Node module that gives us middleware. Execution flows through middleware, and a response drops out the bottom. Let's have a play.",
    },
    {
      slug: "rest",
      title: "REST",
      description: "In which we access a RESTful API",
    },
    {
      slug: "mongo",
      title: "Publishing an API with Mongo",
      description:
        "Mongo is a JSON based document storage engine. Use it to publish an API",
    },
    {
      slug: "angular",
      title: "Angular plus Node",
      description:
        "Angular and Node are perfect together. Node provides the API, and Angular presents the front end.",
    },
    {
      slug: "yeoman",
      title: "Yeoman",
      description:
        "Yeoman is a code generator built for Node. Let's use it now to create a better express app.",
    },
    {
      slug: "socket-io",
      title: "SocketIO",
      description: "The jewel in the crown of the Node stack.",
    },
    {
      slug: "scaling",
      title: "Scaling Node",
      description: "Node scales nicely. Here are some pointers.",
    },
  ],
};
