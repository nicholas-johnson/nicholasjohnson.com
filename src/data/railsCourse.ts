import type { ICourse } from "../types/Course";

export const railsCourse: ICourse = {
  title: "The Rails Course",
  slug: "rails-course",
  cover: "",
  description: "",
  bullets: [],
  coverAlt: "",
  version: "",
  createdAt: "",
  lastUpdatedAt: "",
  exercises: [
    { title: "Hello World", description: "", slug: "hello-world" },
    { title: "Debugging Rails", description: "", slug: "debugging" },
    {
      title: "Layouts and Partials",
      description: "",
      slug: "layouts-and-partials",
    },
    { title: "The Params Hash", description: "", slug: "params" },
    {
      title: "Models and Talking to the Database",
      description: "",
      slug: "models",
    },
    { title: "Scaffolding and CRUD", description: "", slug: "scaffolding" },
    { title: "Associations", description: "", slug: "associations" },
    { title: "The Session Hash", description: "", slug: "sessions" },
    { title: "Assets", description: "", slug: "assets" },
    { title: "Rspec Testing", description: "", slug: "rspec" },
    { title: "Concerns", description: "", slug: "concerns" },
    {
      title: "Alternative Template Engines (Haml, Markdown, Slim)",
      slug: "haml",
      description: "",
    },
    {
      title: "Internationalisation",
      description: "",
      slug: "internationalisation",
    },
    { title: "Integration", description: "", slug: "integration" },
  ],
};
