import type { ICourse } from "../types/Course";

export const mongoCourse: ICourse = {
  title: "The MongoDB Course",
  cover: "/images/book-covers/shuttles.jpg",
  description: "",
  bullets: [],
  slug: "mongo-course",
  coverAlt: "",
  coverCredit: "Robert McCall, NASA",
  coverCreditUrl:
    "http://www.nasa.gov/topics/people/features/mccall_gallery.html",
  version: "1.0.0",
  createdAt: "",
  lastUpdatedAt: "",
  exercises: [
    {
      slug: "intro",
      title: "Welcome to Mongo",
      description:
        "In which we meet MongoDB, connect to a terminal and say hello.",
    },
    {
      slug: "basic-find",
      title: "Find",
      description:
        "We learn how to make simple Mongo queries using pattern matching.",
    },
    {
      slug: "find-with-expressions",
      title: "Finding with expressions",
      description:
        "Where we start to make more complex queries using expressions and comparisons.",
    },
    {
      slug: "find-projection",
      title: "Formatting results with projection",
      description:
        "We can format the results we get back from our collection using projection.",
    },
    {
      slug: "count-and-limit",
      title: "Count, Limit, Skip & Sort",
      description:
        "We can chain additional functions onto our find queries to modify the results.",
    },
    {
      slug: "cursors",
      title: "Interacting with cursors",
      description:
        "Most find operations in Mongo return a cursor object which allows us to get the results.",
    },
    {
      slug: "crud",
      title: "Inserting, Updating & Deleting",
      description:
        "CRUD is a basic function of any database. Let's do it with Mongo.",
    },
    {
      slug: "aggregation",
      title: "The Aggregation Framework",
      description:
        "In which we introduce the aggregation framework, and learn how to chain operations to generate more complex queries.",
    },
    {
      slug: "aggregation-project",
      title: "$project",
      description:
        "We can modify the documents in the pipe, adding new fields and removing others.",
    },
    {
      slug: "aggregation-dynamic-project",
      title: "Creating Dynamic Fields with $project",
      description:
        "Project allows us to compose new fields based on expressions. Here we see how.",
    },
    {
      slug: "aggregation-group",
      title: "Grouping documents with $group",
      description:
        "We can modify our pipeline by grouping documents according to criteria or expressions.",
    },
    {
      slug: "aggregation-count",
      title: "Counting distinct fields with $project and $match",
      description:
        "We can combine $project and $match to count distinct. Here we see how.",
    },
    {
      slug: "aggregation-by-date",
      title: "Grouping by date - producing stats",
      description:
        "We can use the date functions to group by date and output stats. Pipe through project and generate date for a graph.",
    },
    {
      slug: "aggregation-unwind",
      title: "Unwinding Arrays",
      description:
        "We can wind up arrays with $group and $unwind them to produce useful data.",
    },
    {
      slug: "map-reduce",
      title: "Introducing Map Reduce",
      description:
        "We can use the date functions to group by date and output stats. Pipe through project and generate date for a graph.",
    },
    // {
    //   slug: "node-intro",
    //   title: "Welcome to Node",
    //   description: "Node is scalable JavaScript on your server",
    // },
    // {
    //   slug: "node-server",
    //   title: "Let's make a server",
    //   description:
    //     "In which we create a simple Node server and ship out a website.",
    // },
    // {
    //   slug: "express",
    //   title: "Middleware with Express",
    //   description:
    //     "Express is a Node module that gives us middleware. Execution flows through middleware, and a response drops out the bottom. Let's have a play.",
    // },
    // {
    //   slug: "mongo-with-node",
    //   title: "Mongo plus Node",
    //   description:
    //     "Mongo and Node are best friends. Build a simple Node API with Mongoose and Express, the foundation of the MEAN stack.",
    // },
  ],
};
