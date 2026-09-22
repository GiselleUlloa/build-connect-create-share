import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { isLocale } from "@/lib/i18n";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.lang)) throw notFound();
    return { locale: params.lang };
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  return <Outlet />;
}