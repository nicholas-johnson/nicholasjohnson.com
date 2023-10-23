export const getSlug = (path: string) => {
  const parts = path.split("/");
  return parts[parts.length - 1].replace(".md", "");
};
