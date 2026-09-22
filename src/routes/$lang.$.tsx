import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/site";
import { copy, isLocale, routeKeys, type RouteKey } from "@/lib/i18n";

function isRouteKey(value: string): value is RouteKey {
  return routeKeys.some((route) => route === value);
}

export const Route = createFileRoute("/$lang/$")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.lang) || !isRouteKey(params._splat)) throw notFound();
  },
  head: ({ params }) => {
    const locale = isLocale(params.lang) ? params.lang : "es";
    const route = isRouteKey(params._splat) ? params._splat : "about";
    const [title, description] = copy[locale].page[route];
    const path = `/${locale}/${route}`;
    const counterpart = locale === "es" ? "en" : "es";
    return {
      meta: [
        { title: `${title} — Giselle Ulloa` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} — Giselle Ulloa` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: path },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: path },
        { rel: "alternate", hrefLang: locale, href: path },
        { rel: "alternate", hrefLang: counterpart, href: `/${counterpart}/${route}` },
      ],
    };
  },
  component: LocalizedDetail,
});

function LocalizedDetail() {
  const { lang, _splat } = Route.useParams();
  if (!isLocale(lang) || !isRouteKey(_splat)) return null;
  return <DetailPage locale={lang} route={_splat} />;
}