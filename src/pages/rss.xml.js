import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  //   const x = w();
  //   const blog = await getCollection("blog");
  return rss({
    title: "Nicholas Johnson",
    description: "Courses and writings by Nicholas Johnson",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-uk</language>`,
  });
}
