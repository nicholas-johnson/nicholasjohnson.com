import rss from "@astrojs/rss";

export const get = async (context) => {
  const posts = import.meta.glob("./posts/*.md", { eager: true });
  const items = Object.values(posts)
    .filter((post) => {
      const { date, unpublished, unpublish } = post.frontmatter;
      return date && !unpublished && !unpublish;
    })
    .map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.preview || post.frontmatter.description,
      link: post.url,
    }));

  return rss({
    title: "Nicholas Johnson",
    description: "Courses and writings by Nicholas Johnson",
    site: context.site,
    items,
    trailingSlash: false,
    customData: `<language>en-uk</language>`,
  });
};
