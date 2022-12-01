# Personal sites of Nicholas Johnson

Comprising nicholasjohnson.com and seniordevtime.com

NICHOLASJOHNSON.COM ROADMAP

1. We have a set of articles. Articles have a slug (filename), date, topic. They can be in any subfolder of the content directory. Their URL matches their location in the content directory. Depth is limited to 1.
2. All articles are on the homepage, sorted by updatedAt.
3. We have a set of courses, a course is a JSON file with an array of content.
4. When I view an article, it might be part of a course. If it is, show course controls
5. Show courses in sidebar
6. Do not preserve structure. Use 301 redirects from old URL to new URL.

SENIORDEVTIME.COM ROADMAP

1. We have a set of youtube videos. Put them on the homepage
2. Add a hire me page

# NEXT

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
