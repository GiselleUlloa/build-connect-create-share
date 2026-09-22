import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang", params: { lang: "es" }, replace: true });
  },
  head: () => ({
    meta: [
      { title: "Giselle Ulloa — Software Engineer y Technology Builder" },
      { name: "description", content: "Construyo tecnología, comunidades y oportunidades." },
      { property: "og:title", content: "Giselle Ulloa" },
      { property: "og:description", content: "Construyo tecnología, comunidades y oportunidades." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
