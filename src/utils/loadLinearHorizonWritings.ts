import {
  linearHorizonWritings,
  type LinearHorizonWriting,
} from "../data/linearHorizonWritings";

const INSIGHTS_URL = "https://linearhorizon.com/api/v1/insights.json";

type InsightsResponse = {
  items?: Array<{
    title: string;
    description: string;
    pubDate: string;
    url: string;
    body?: string;
  }>;
};

const whitepapers = linearHorizonWritings.filter(
  (writing) => writing.kind === "whitepaper"
);

const fallbackArticles = linearHorizonWritings.filter(
  (writing) => writing.kind === "article"
);

const toIsoDate = (value: string) => value.slice(0, 10);

export const loadLinearHorizonWritings = async (): Promise<
  LinearHorizonWriting[]
> => {
  try {
    const response = await fetch(INSIGHTS_URL);
    if (!response.ok) return linearHorizonWritings;

    const data = (await response.json()) as InsightsResponse;
    const articles: LinearHorizonWriting[] = (data.items ?? []).map(
      (item) => ({
        title: item.title,
        description: item.description,
        date: toIsoDate(item.pubDate),
        href: item.url,
        kind: "article",
        body: item.body,
      })
    );

    if (!articles.length) return linearHorizonWritings;
    return [...whitepapers, ...articles];
  } catch {
    return [...whitepapers, ...fallbackArticles];
  }
};
