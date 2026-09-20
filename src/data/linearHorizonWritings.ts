export type LinearHorizonWritingKind = "whitepaper" | "article";

export interface LinearHorizonWriting {
  title: string;
  description: string;
  date: string;
  href: string;
  kind: LinearHorizonWritingKind;
  body?: string;
}

export const linearHorizonWritings: LinearHorizonWriting[] = [
  {
    title: "The product as its own expert",
    description:
      "Give each product an MCP server so an agent can inspect its code, telemetry, usage and history — then diagnose problems, cite evidence and propose the next improvement.",
    date: "2026-09-18",
    href: "https://linearhorizon.com/whitepapers/the-product-as-its-own-expert",
    kind: "whitepaper",
  },
  {
    title: "What is an agent? What does it mean to be agentic?",
    description:
      "An agent is an LLM, plus a prompt, plus tools — placed inside a loop that lets it pursue a goal. To be agentic is to give a system limited discretion over how that goal is achieved.",
    date: "2026-09-18",
    href: "https://linearhorizon.com/insights/what-is-an-agent",
    kind: "article",
  },
  {
    title: "The four stages of AI adoption in the workplace",
    description:
      "A practical four-stage model for AI adoption — Assist, Standardise, Connect and Transform — and how to progress without treating autonomy as the goal.",
    date: "2026-09-16",
    href: "https://linearhorizon.com/whitepapers/four-stages-of-ai-adoption",
    kind: "whitepaper",
  },
  {
    title: "How Silicon Valley is approaching fully agentic workflows",
    description:
      "Leading technology companies are not making entire organisations autonomous. They are making particular workflows agentic — with a defined objective, connected context, bounded authority and deliberate human control.",
    date: "2026-09-16",
    href: "https://linearhorizon.com/whitepapers/how-silicon-valley-is-approaching-fully-agentic-workflows",
    kind: "whitepaper",
  },
  {
    title: "The gap between learning about AI and putting it into production",
    description:
      "Training without a path into the system leaves organisations fluent and stuck. The work is to close that gap.",
    date: "2026-09-12",
    href: "https://linearhorizon.com/insights/from-learning-to-production",
    kind: "article",
  },
  {
    title: "Where AI is actually useful — and where it is not",
    description:
      "The useful question is not what a model can do in general. It is what it can do here, against this data, these interfaces, and this risk.",
    date: "2026-09-01",
    href: "https://linearhorizon.com/insights/where-ai-is-useful",
    kind: "article",
  },
];
