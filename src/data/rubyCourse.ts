import type { ICourse } from "../types/Course";

export const rubyCourse: ICourse = {
  title: "The Ruby Course",
  slug: "ruby-course",
  cover: "/images/book-covers/shuttle3.jpg",
  version: "0.9.0 - Beta",
  createdAt: "2017",
  lastUpdatedAt: "2017",
  exercises: [
    {
      title: "Intro to Ruby",
      slug: "intro",
      description:
        "Welcome to Ruby. Learn the language fundamentals, and how it differs from your current language of choice.",
      code: "https://www.dropbox.com/sh/y5pruqg4hew0sj1/AAB1qhj9fj5S30T58fbpD7xOa?dl=1",
    },
    {
      slug: "variables-and-constants",
      title: "Variables and Constants",
      description:
        "Ruby takes a relaxed attitude to data storage. Variables and constants.",
      code: "",
    },
    {
      slug: "numbers",
      title: "Integers and Floats",
      description: "Numbers are objects in Ruby and can be treated as such.",
      code: "",
    },
    {
      slug: "strings",
      title: "Strings",
      description: "Ruby has an unusually rich string manipulation API.",
      code: "",
    },
    {
      slug: "functions",
      title: "Functions",
      description: "Creating functions",
      code: "https://www.dropbox.com/sh/aowuqrx8uuifhuy/AAA9VXxVqFyj-WxzZcP2Go1Wa?dl=1",
    },
    {
      slug: "flow-control",
      title: "Flow Control",

      description: "Ruby loves it when you tell it what to do.",
      code: "",
    },
    {
      slug: "blocks",
      title: "Blocks",
      description:
        "Blocks are inline functions. We use them everywhere in Ruby. Learn what they are and how they work.",
      code: "https://www.dropbox.com/sh/xmsk4ruijwoxqs0/AAAcxsR7e81oLMth6qoZV-Cja?dl=1",
    },
    {
      slug: "rspec",
      title: "RSpec",
      description:
        "Testing is a big deal in Ruby. RSpec is your premier tool for the job.",
      code: "",
    },
    {
      title: "Arrays",
      slug: "arrays",
      description: "We can accomplish many tasks using Array manipulation",
      code: "",
    },
    {
      title: "Hashes and Symbols",
      slug: "hashes-and-symbols",
      description:
        "Symbols are lightweight placeholder strings. Learn what they are useful for.",
      code: "https://www.dropbox.com/sh/uufwxfjyeglrsyu/AABCFlpafYGU0KVHAL6fvG5Wa?dl=1",
    },
    {
      title: "Classes and Objects",
      slug: "classes-and-objects",
      description: "Everything in Ruby is an object. Learn Object orientation.",
      code: "https://www.dropbox.com/sh/aowuqrx8uuifhuy/AAA9VXxVqFyj-WxzZcP2Go1Wa?dl=1",
    },
    {
      title: "Monkey Patching",
      slug: "monkey-patching",
      description: "All objects are open and can be modified and extended.",
      code: "https://www.dropbox.com/sh/7z4yatmjxatz4zh/AAAwRc7Et-0oGTJwG8ON1BRNa?dl=0",
    },
    {
      title: "Operator Overloading",
      slug: "operator-overloading",
      description:
        "Most language constructs in Ruby are in fact functions and can be overridden.",
      code: "https://www.dropbox.com/sh/eozxbcnov5bkc0c/AACsQ3VE6E5PVJB8T9zvKH4Pa?dl=1",
    },
    {
      title: "Inheritance",
      slug: "inheritance",
      description:
        "Inheritance allows a class to inherit values from it's parent. Ruby of course has it.",
      code: "https://www.dropbox.com/sh/aowuqrx8uuifhuy/AAA9VXxVqFyj-WxzZcP2Go1Wa?dl=1",
    },
    {
      title: "Static Methods",
      slug: "static-methods",
      description:
        "Ruby's simple object model doesn't support Static methods directly, instead we get Eigenclasses, which are better.",
      code: "",
    },
    {
      title: "Modules",
      slug: "modules",
      description:
        "Separate your code into sensible modules for code reuse and modularity.",
      code: "https://www.dropbox.com/sh/926cgqatg9e8mtd/AACqR3k7Wxko8ZmjTWCUmzzOa?dl=1",
    },
    {
      title: "Include vs Extend",
      slug: "extend-and-include",
      description: "When to extend modules, and when to include them",
      code: "",
    },
    {
      title: "Exception Handling",
      slug: "exceptions",
      description: "When things go wrong.",
      code: "",
    },
    {
      title: "Writing Methods which Receive Blocks",
      slug: "receiving-a-block",
      description: "We can pass blocks to functions.",
      code: "https://www.dropbox.com/sh/llzd3m61b9a5l09/AABI4u_ZUj72XFWKrTI0Mw63a?dl=1",
    },
    {
      title: "Writing a Gem",
      slug: "writing-a-gem",
      description:
        "We can ball our code up into a gem to make it easy to share.",
      code: "",
    },
    {
      title: "Send",
      slug: "ruby-send",
      description: "Write code which writes code",
      code: "https://www.dropbox.com/sh/iihnynrc58lczcg/AACInjBrHAQmULwF4t58RepPa?dl=1",
    },
    {
      title: "Define Method",
      slug: "define-method",
      description: "Define methods dynamically",
      code: "https://www.dropbox.com/sh/lv5v93lzswrbkel/AADm60j8NzM8Y4bqK6uq02k6a?dl=1",
    },
    {
      title: "Method Missing",
      slug: "method-missing",
      description: "Create adaptive objects by defining methods on the fly",
      code: "https://www.dropbox.com/sh/mpbnn5gak8fikgi/AACDwPqRrKPYDZVA_skFXCS4a?dl=1",
    },
    {
      title: "Instance Eval",
      slug: "instance-eval",
      description: "Create a Domain Specific Language using instance eval.",
      code: "https://www.dropbox.com/sh/7iwxn2n477yfn5x/AAATcQm7XTytAIhHwU_LHTrMa?dl=1",
    },
  ],
};
