import type { ICourse } from "../types/Course";

export const angularJsCourse: ICourse = {
  title: "The AngularJS Course",
  description: "",
  bullets: [],
  slug: "angularjs-course",
  cover: "/images/book-covers/shuttle3.jpg",
  coverAlt: "",
  coverCredit: "",
  coverCreditUrl: "",
  version: "1.0.1",
  createdAt: "",
  lastUpdatedAt: "12/12/2017  ",
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
