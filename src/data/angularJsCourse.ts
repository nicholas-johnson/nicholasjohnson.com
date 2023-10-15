import type { ICourse } from "../types/Course";

export const angularJsCourse: ICourse = {
  title: "The AngularJS Course",
  description: "",
  bullets: [],
  slug: "angularjs-course",
  cover: "/images/book-covers/shuttle3.jpg",
  coverAlt: "",
  coverCreditUrl: "http://settlement.arc.nasa.gov/70sArt/art.html",
  coverCredit: "NASA Ames Research Center",
  version: "1.0.1",
  createdAt: "",
  lastUpdatedAt: "12/12/2017",
  logo: "",
  instructorLead: {
    intro:
      "Learn Angular from someone who actually uses it. Live coding, Q&A, practical workshops, deep theory, real world exercises and code reviews.",
    testimonials: [
      {
        name: "Leo Horn",
        jobTitle: "Senior Analyst Developer at Novacroft",
        image: "/images/testimonials/leo.jpg",
        linkedIn: "https://uk.linkedin.com/pub/leo-horn/22/898/169",
        content: `
By far and away the best, most in depth, and broadest course I have been on. Nick is passionate and vastly knowledgeable about the subject and it really comes through in the lessons.

**Best bit**: I guess the nerdy part of me liked it when we hit a remote api and displayed data back. Also…Thundercats rock!!!

**Comparison with other courses**: Many courses I've been on have been dumbed down and a bit wishy washy, I'm so pleased this was challenging and full of meaty examples.
        `,
      },
      {
        name: "Emma Phillips",
        jobTitle: "Analyst Programmer at Novacroft",
        image: "/images/testimonials/emma.jpg",
        linkedIn: "https://uk.linkedin.com/pub/emma-phillips/87/627/1a",
        content: `
Thank you Nick for the AngularJS course. It was very insightful. Nick was very knowledgeable about the subject matter. Would definitely recommend this course.

**Best bit:** All of it! Learned a lot.

**Comparison with other courses:** Very in depth and flexible to the group. Course was very interactive.
        `,
      },

      {
        name: "Aurore Trunelle",
        jobTitle: "Front End Developer at Edcoms",
        image: "/images/testimonials/aurore.jpg",
        linkedIn: "https://www.linkedin.com/in/auroretrunelle",
        content: `
I followed Nicholas' advance JavaScript and extended AngularJS courses. I learned a lot during this well distributed training. The mix of theory and practices make it really interesting, and well-articulated. Nicholas knows his subject perfectly and can answer any questions and debate about web development all day.

All you want to do after this course, is more Javascript and AngularJS. I can only recommend this training
        `,
      },
      {
        name: "Sarah Tupman",
        jobTitle: "Senior Front End Developer at EdComs",
        image: "/images/testimonials/sarah.jpg",
        linkedIn: "",
        content: `
I attended a AngularJs course run by Nick in April 2015. After finding his website looking for such a course, he appeared to have an expansive repertoire of knowledge and I was certainly not disappointed.

Nick is extremely knowledge, approachable, and posses an excellent set of rare teaching skills. He was able to explain complex ideas and theories with an application to a real life usable scenario, and could answer any question related to JavaScript even if it was off topic.

I wouldn't hesitate for a second to recommend Nick to anyone looking to get their head around AngularJS - it was an absolute pleasure, and a very motivating course
        `,
      },
    ],
    variants: [],
  },
  exercises: [
    // {
    //   slug: "angular-intro",
    //   title: "Introducing Angular",
    //   description: "Course Intro",
    // },
    {
      slug: "templates",
      title: "Hello World",
      description: "Hello World in Angular couldn't be simpler",
      github: "angular_templates_demo",
    },
    {
      slug: "binding",
      title: "Binding",
      description:
        "Where we discover the spooky magic that is Angular data binding (of course it's not magic really, as we shall very soon see).",
      github: "angular_binding_demo",
    },
    {
      slug: "more-binding",
      title: "More on Binding",
      description:
        "In which we bind expressions to classes and attributes and add conditional logic to our templates.",
      github: "angular_further_binding_demo",
    },
    {
      slug: "controllers",
      title: "Controllers",
      description: "Controllers glue the scope to the template.",
      github: "angular_controllers_demo",
    },
    {
      slug: "scope",
      title: "Scope and Scope Inheritance (View Model)",
      description: "$scope is an object in which you can store your models",
      github: "angular_scope_demo",
    },
    {
      slug: "watch",
      title: "Watch and the digest cycle",
      description:
        "Here we delve into the workings of the digest cycle and discover the logic behind Angular data binding.",
      github: "angular_watch_demo",
    },
    {
      slug: "di",
      title: "Dependency Injection (DI)",
      description:
        "Dependency Injection allows us to require components simply be referring to them. Learn about DI and also split your code into sensible modules.",
      github: "angular_di_demo",
    },
    {
      slug: "karma",
      title: "Unit Testing with Karma (Testacular)",
      description: "All good developers write unit tests. We will too.",
      github: "angular_karma_demo",
    },
    // {
    //   slug: "homework",
    //   title: "Homework",
    //   description: "Fun and simple homework. It's like school",
    // },
    {
      slug: "repeat-and-filter",
      title: "Repeat and Filter",
      description:
        "The show-off feature of Angular. This stuff makes clients really happy.",
      github: "angular_ngrepeat_demo",
    },
    {
      slug: "ajax",
      title: "Networking",
      description:
        "Drop JSON into your $scope and it will automatically bind it to the template.",
      github: "angular_ajax_demo",
    },
    {
      slug: "ng-include",
      title: "Templates and the Template Cache",
      description:
        "Talking to the template cache directly can make your app feel more responsive. Learn how.",
      github: "angular_template_cache_demo",
    },
    {
      slug: "animation",
      title: "The Animation Framework",
      description: "Angular will inspect your CSS and modify it's behavior.",
      github: "angular_animation_demo",
    },
    {
      slug: "custom-filters",
      title: "Writing Custom Filters",
      description:
        "A filter is a function for modifying and presenting data. We learn to write and use our own.",
      github: "angular_custom_filters_demo",
    },
    {
      slug: "services",
      title: "Writing Services",
      description:
        "Services are singleton objects that act as repositories of useful functions. How to make them, and when to use them.",
      github: "angular_services_demo",
    },
    {
      slug: "promises",
      title: "Promises",
      description: "Tidying up asynchronous code using promises.",
      github: "angular_promises_demo",
    },
    {
      slug: "directives",
      title: "Writing Directives",
      description:
        "Directives tell the Angular compiler how to transform the DOM. They are the guts of Angular. You will learn all about them.",
      github: "angular_directives_demo",
    },
    {
      slug: "directive-compilation",
      title: "Directive Compilation",
      description:
        "We look at how the Angular compiler traverses the DOM, oreder of compilation, and when to use the compile, link and controller functions.",
      github: "angular_directive_compilation_demo",
    },
    {
      slug: "parse",
      title: "Parsing attributes against $scope",
      description: "How to make out directives receive an expression.",
      github: "angular_parse_demo",
    },
    {
      slug: "testing-directives",
      title: "Unit testing directives using Karma",
      description: "Unit testing is for directives too.",
      github: "angular_testing_directives_demo",
    },
    {
      slug: "isolate-scope",
      title: "Isolate Scopes",
      description:
        "One of the most misunderstood features of directives. We learn, in detail, how to control the scope hierarchy.",
      github: "angular_directive_isolate_scopes_demo",
    },
    {
      slug: "homework-2",
      title: "Homework 2",
      description: "Again, like school, but better paid.",
    },
    {
      slug: "transclusion",
      title: "Directive Transclusion",
      description:
        "Transclusion allows us to pass template content to a directive as an attribute. This is a lot more useful than it sounds. Here we see why.",
      github: "angular_directive_transclusion_demo",
    },
    {
      slug: "crud",
      title: "Create, Read, Update, Delete",
      description:
        "We put it together and talk to a real RESTful API to build a little content driven app",
      github: "angular_crud_demo",
    },
    // {
    //   slug: "webapi",
    //   title: "Build a back end with WebAPI",
    //   description: "Build a simple API with WebAPI, then integrate from it.",
    //   github: "angular_webapi_demo",
    // },
    {
      slug: "validation",
      title: "Form Validation",
      description: "We validate our inputs the right way",
      github: "angular_form_validation_demo",
    },
    {
      slug: "protractor",
      title: "Protractor",
      description: "End to end integration testing.",
      github: "angular_protractor_demo",
    },
    {
      slug: "resource",
      title: "Resource",
      description: "Resource is an ORM for REST. Powerful and terse AJAX.",
      github: "angular_resource_demo",
    },
    {
      slug: "routing",
      title: "Routing",
      description:
        "Learn about routing, Pushstate, and how to make an Angular site SEO friendly without hashbangs",
      github: "angular_routing_demo",
    },
    {
      slug: "ui-router",
      title: "UI Router",
      description:
        "The UI Router is an alternative state based router for Angular. Learn all about it.",
      github: "angular_ui_router_demo",
    },
  ],
};
