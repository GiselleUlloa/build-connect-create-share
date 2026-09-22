import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site";
import { copy, isLocale } from "@/lib/i18n";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const locale = isLocale(params.lang) ? params.lang : "es";
    const c = copy[locale];
    return {
      meta: [
        { title: c.seo.title },
        { name: "description", content: c.seo.description },
        { name: "keywords", content: locale === "es" ? "Giselle Ulloa, Software Engineer Colombia, Software Engineer Cartagena, IA y automatización, agentes de IA, desarrollo de software, speaker tecnológica, comunidades tecnológicas" : "Giselle Ulloa, Software Engineer Colombia, Software Engineer Cartagena, AI automation, AI agents, software development, tech speaker, technology communities" },
        { property: "og:title", content: c.seo.title },
        { property: "og:description", content: c.seo.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/${locale}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: `/${locale}` },
        { rel: "alternate", hrefLang: "es", href: "/es" },
        { rel: "alternate", hrefLang: "en", href: "/en" },
        { rel: "alternate", hrefLang: "x-default", href: "/es" },
      ],
    };
  },
  component: LocalizedHome,
});

function LocalizedHome() {
  const { lang } = Route.useParams();
  const locale = isLocale(lang) ? lang : "es";
  return <HomePage locale={locale} />;
}