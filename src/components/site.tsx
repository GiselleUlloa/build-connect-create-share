import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import heroImage from "@/assets/giselle-editorial-tech.jpg";
import { Button } from "@/components/ui/button";
import { copy, localePath, type Locale, type RouteKey } from "@/lib/i18n";

function routeTo(locale: Locale, route: RouteKey) {
  return localePath(locale, route);
}

function Brand({ locale }: { locale: Locale }) {
  return (
    <Link to="/$lang" params={{ lang: locale }} className="group flex min-w-0 items-center gap-3" aria-label={`${copy[locale].brand} — ${copy[locale].localeName}`}>
      <span className="grid size-9 shrink-0 place-items-center border border-current font-mono text-xs font-bold">GU</span>
      <span className="truncate font-display text-sm font-bold tracking-normal sm:text-base">GISSELLE ULLOA</span>
    </Link>
  );
}

function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const pathFor = (next: Locale) => pathname.replace(/^\/(es|en)(?=\/|$)/, `/${next}`);
  const remember = (next: Locale) => {
    try { window.localStorage.setItem("giselle-locale", next); } catch { /* Preference storage is optional. */ }
  };
  return (
    <div className="flex shrink-0 items-center font-mono text-xs" aria-label={locale === "es" ? "Cambiar idioma" : "Switch language"}>
      <a href={pathFor("es")} onClick={() => remember("es")} aria-current={locale === "es" ? "page" : undefined} className={locale === "es" ? "font-bold text-primary" : "text-muted-foreground hover:text-foreground"}>ES</a>
      <span className="mx-2 text-border">|</span>
      <a href={pathFor("en")} onClick={() => remember("en")} aria-current={locale === "en" ? "page" : undefined} className={locale === "en" ? "font-bold text-primary" : "text-muted-foreground hover:text-foreground"}>EN</a>
    </div>
  );
}

function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const c = copy[locale];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-18 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[auto_1fr_auto] lg:px-10">
        <Brand locale={locale} />
        <nav className="hidden items-center justify-center gap-6 lg:flex" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
          {c.nav.map(([label, route]) => <Link key={route} to={`/$lang/${route}`} params={{ lang: locale }} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Button variant="ghost" className="size-11 p-0 lg:hidden" aria-label={open ? (locale === "es" ? "Cerrar menú" : "Close menu") : (locale === "es" ? "Abrir menú" : "Open menu")} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</Button>
        </div>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}>
        <div className="grid gap-1">{c.nav.map(([label, route]) => <Link key={route} to={`/$lang/${route}`} params={{ lang: locale }} onClick={() => setOpen(false)} className="min-h-11 border-b border-border py-3 text-lg">{label}</Link>)}</div>
        <Button asChild className="mt-5 w-full"><Link to="/$lang/contact" params={{ lang: locale }}>{c.hero.primary}</Link></Button>
      </nav>}
    </header>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
        <div><p className="font-display text-xl font-bold">{c.brand}</p><p className="mt-3 max-w-md text-sm text-ink-muted">{c.role}</p></div>
        <nav className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm" aria-label={locale === "es" ? "Navegación del pie" : "Footer navigation"}>
          {c.nav.map(([label, route]) => <Link key={route} to={`/$lang/${route}`} params={{ lang: locale }} className="text-ink-muted hover:text-ink-foreground">{label}</Link>)}
          <Link to="/$lang/contact" params={{ lang: locale }} className="text-ink-muted hover:text-ink-foreground">{c.footer.contact}</Link>
        </nav>
        <div className="text-sm text-ink-muted"><div className="flex gap-4">{c.social.map((item) => <span key={item}>{item}</span>)}</div><div className="mt-6 flex gap-4"><span>{c.footer.privacy}</span><span>{c.footer.terms}</span></div><p className="mt-6">© {new Date().getFullYear()} Giselle Ulloa</p></div>
      </div>
    </footer>
  );
}

export function SiteFrame({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <><Header locale={locale} /><main id="main-content">{children}</main><Footer locale={locale} /></>;
}

function SectionHeading({ label, title, text }: { label: string; title: string; text?: string }) {
  return <div className="max-w-3xl"><p className="font-mono text-xs font-bold uppercase text-primary">{label}</p><h2 className="mt-4 font-display text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">{title}</h2>{text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>}</div>;
}

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <SiteFrame locale={locale}>
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-[1500px] items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-16">
        <div className="relative z-10 py-5"><p className="font-mono text-xs font-bold text-ink-accent">{c.hero.eyebrow}</p><h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[.96] sm:text-6xl lg:text-7xl xl:text-8xl">{c.hero.title}</h1><p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">{c.hero.text}</p><p className="mt-4 font-mono text-xs text-ink-muted">{c.role}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button asChild><Link to="/$lang/contact" params={{ lang: locale }}>{c.hero.primary}<ArrowRight size={17}/></Link></Button><Button asChild variant="outline" className="border-ink-border bg-transparent text-ink-foreground hover:bg-ink-soft"><Link to="/$lang/speak" params={{ lang: locale }}>{c.hero.secondary}</Link></Button><Button asChild variant="ghost" className="text-ink-foreground hover:bg-ink-soft"><Link to="/$lang/build" params={{ lang: locale }}>{c.hero.tertiary}<ArrowDownRight size={17}/></Link></Button></div></div>
        <div className="relative lg:h-[72vh]"><div className="absolute -left-4 top-8 z-10 hidden border border-ink-border bg-ink px-3 py-2 font-mono text-[10px] text-ink-muted lg:block">AI_AGENT · CLOUD · COMMUNITY</div><img src={heroImage} alt={c.hero.alt} width={1600} height={1200} className="h-full min-h-[340px] w-full object-cover" /><div className="absolute inset-0 ring-1 ring-inset ring-ink-border" /></div>
      </div>
    </section>

    <section className="border-b border-border"><div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28"><div className="aspect-[4/5] max-w-sm border border-border bg-subtle p-6"><div className="flex h-full flex-col justify-between"><span className="font-mono text-xs text-muted-foreground">PORTRAIT_01</span><div><div className="mb-5 size-16 border border-primary font-display text-2xl font-bold grid place-items-center text-primary">GU</div><p className="text-sm text-muted-foreground">{c.intro.placeholder}</p></div></div></div><div className="self-center"><SectionHeading label="PROFILE / 01" title={c.intro.title} text={c.intro.text}/><Button asChild variant="outline" className="mt-8"><Link to="/$lang/about" params={{ lang: locale }}>{c.intro.cta}<ArrowRight size={17}/></Link></Button></div></div></section>

    <section className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28"><SectionHeading label="BUILD · CONNECT · CREATE · SHARE" title={c.what}/><div className="mt-12 grid border-l border-t border-border md:grid-cols-2">{c.pillarsContent.map((pillar) => <article key={pillar.code} className="group border-b border-r border-border p-6 transition-colors hover:bg-subtle sm:p-9"><p className="font-mono text-xs font-bold text-primary">{pillar.code}</p><h3 className="mt-8 font-display text-3xl font-semibold">{pillar.title}</h3><p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{pillar.text}</p><div className="mt-7 flex flex-wrap gap-2">{pillar.items.map((item) => <span key={item} className="border border-border px-2.5 py-1.5 font-mono text-[10px] uppercase text-muted-foreground">{item}</span>)}</div></article>)}</div></section>

    <section className="bg-subtle"><div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28"><SectionHeading label="SOLUTIONS / 02" title={c.solutions.title} text={c.solutions.subtitle}/><div className="mt-12 grid gap-px bg-border lg:grid-cols-3">{c.solutions.groups.map(([title, items], index) => <article key={title} className="bg-background p-7"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3 className="mt-8 font-display text-xl font-semibold">{title}</h3><ul className="mt-7 space-y-3">{items.map(item => <li key={item} className="flex items-center justify-between border-b border-border pb-3 text-sm"><span>{item}</span><ArrowDownRight size={15} className="text-muted-foreground"/></li>)}</ul></article>)}</div></div></section>

    <section className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28"><SectionHeading label="PATH_FINDER / 03" title={c.problems.title}/><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{c.problems.cards.map(([title, solution, route]) => <Link key={title} to={`/$lang/${route}`} params={{ lang: locale }} className="group min-h-52 border border-border p-6 transition-all hover:-translate-y-1 hover:border-primary"><div className="flex h-full flex-col justify-between"><ArrowDownRight className="ml-auto text-primary"/><div><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-3 font-mono text-xs text-muted-foreground">{solution}</p></div></div></Link>)}</div></section>

    <section className="border-y border-border"><div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28"><div><SectionHeading label="SELECTED_WORK / 04" title={c.work.title}/><div className="mt-8 flex flex-wrap gap-2">{c.work.filters.map((filter) => <span key={filter} className="border border-border px-3 py-2 text-xs text-muted-foreground">{filter}</span>)}</div></div><div className="grid min-h-72 place-items-center border border-dashed border-border bg-subtle p-8 text-center"><div><span className="font-mono text-xs text-primary">EDITABLE_PLACEHOLDER</span><p className="mt-4 text-muted-foreground">{c.work.note}</p></div></div></div></section>

    <section className="bg-ink text-ink-foreground"><div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28"><SectionHeading label="CREDENTIALS / 05" title={c.credential.title}/><div className="mt-12 grid gap-px bg-ink-border lg:grid-cols-[1fr_1fr_1.4fr]"><article className="bg-ink p-7"><p className="font-mono text-xs text-ink-accent">SOFTWARE_ENGINEERING</p><p className="mt-6 text-ink-muted">Digital products · Software · AI · Automation · Cloud</p></article><article className="bg-ink p-7"><p className="font-mono text-xs text-ink-accent">COMMUNITY</p><p className="mt-6 text-ink-muted">GDG Cartagena · Women Techmakers</p></article><article className="bg-ink p-7"><div className="flex items-start justify-between gap-4"><div><p className="font-display text-2xl font-semibold">ANDICOM 2026</p><p className="mt-1 font-mono text-xs text-ink-accent">{c.credential.panelist}</p></div><span className="border border-ink-border px-3 py-2 font-mono text-[10px]">DIGITAL TALENT · AI</span></div><p className="mt-7 text-sm leading-relaxed text-ink-muted">{c.credential.andicom}</p></article></div></div></section>

    <section className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28"><SectionHeading label="SPEAKING / 06" title={c.speaking.title} text={c.speaking.text}/><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{c.speaking.types.map(([title,text]) => <article key={title} className="bg-background p-6"><p className="font-mono text-xs font-bold text-primary">{title}</p><p className="mt-10 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div><Button asChild className="mt-8"><Link to="/$lang/speak" params={{ lang: locale }}>{c.hero.secondary}<ArrowRight size={17}/></Link></Button></section>

    <section className="bg-subtle"><div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-10 lg:py-28"><SectionHeading label="ECOSYSTEM / 07" title={c.community.title} text={c.community.text}/><div className="border-t border-border">{c.community.affiliations.map((item) => <div key={item} className="border-b border-border py-5 font-display text-lg">{item}</div>)}</div></div></section>

    <section className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28"><div className="grid gap-8 border-l-4 border-primary pl-6 lg:grid-cols-[1.3fr_.7fr] lg:items-end lg:pl-10"><SectionHeading label="CONSULTING / 08" title={c.consulting.title} text={c.consulting.text}/><Button asChild className="justify-self-start lg:justify-self-end"><Link to="/$lang/solutions/consulting" params={{ lang: locale }}>{c.consulting.cta}<ArrowRight size={17}/></Link></Button></div></section>

    <ContactSection locale={locale}/>

    <section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28"><h2 className="max-w-5xl font-display text-5xl font-semibold leading-none sm:text-6xl lg:text-8xl">{c.final.title}</h2><p className="mt-7 max-w-2xl text-lg opacity-85">{c.final.text}</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/$lang/contact" params={{ lang: locale }}>{c.hero.primary}</Link></Button><Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10"><Link to="/$lang/speak" params={{ lang: locale }}>{c.hero.secondary}</Link></Button></div></div></section>
  </SiteFrame>;
}

export function ContactSection({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const [message, setMessage] = useState("");
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { setMessage(c.contact.required); form.reportValidity(); return; }
    const email = new FormData(form).get("email")?.toString() ?? "";
    if (!/^\S+@\S+\.\S+$/.test(email)) { setMessage(c.contact.invalidEmail); return; }
    setMessage(c.contact.success);
  };
  return <section className="border-t border-border" id="contact"><div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28"><SectionHeading label="CONTACT / 09" title={c.contact.title} text={c.contact.text}/><form onSubmit={onSubmit} className="grid gap-5" noValidate><div className="grid gap-5 sm:grid-cols-2">{c.contact.labels.slice(0,4).map((label,index) => <label key={label} className="grid gap-2 text-sm"><span>{label}{index === 0 || index === 2 ? " *" : ""}</span><input name={index === 0 ? "name" : index === 2 ? "email" : `field-${index}`} type={index === 2 ? "email" : "text"} required={index === 0 || index === 2} maxLength={index === 2 ? 255 : 120} className="min-h-12 border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20" /></label>)}</div><label className="grid gap-2 text-sm"><span>{c.contact.labels[4]}</span><select name="interest" className="min-h-12 border border-input bg-background px-3 outline-none focus:border-primary">{c.contact.options.map(option => <option key={option}>{option}</option>)}</select></label><label className="grid gap-2 text-sm"><span>{c.contact.labels[5]} *</span><textarea name="message" required maxLength={1500} rows={5} className="border border-input bg-background p-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20" /></label>{message && <p role="status" className="text-sm text-primary">{message}</p>}<div className="flex flex-col gap-3 sm:flex-row"><Button type="submit">{c.contact.submit}<ArrowRight size={17}/></Button><Button type="button" variant="outline">WhatsApp</Button></div></form></div></section>;
}

export function DetailPage({ locale, route }: { locale: Locale; route: RouteKey }) {
  const c = copy[locale];
  const [title, description] = c.page[route];
  const topics = useMemo(() => {
    if (route === "build") return c.pillarsContent[0];
    if (route === "connect") return c.pillarsContent[1];
    if (route === "create") return c.pillarsContent[2];
    if (route === "speak") return c.pillarsContent[3];
    return null;
  }, [c, route]);
  return <SiteFrame locale={locale}><section className="bg-ink text-ink-foreground"><div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28"><p className="font-mono text-xs text-ink-accent">{route.toUpperCase().replace("/", "_")}</p><h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[.98] sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">{description}</p></div></section><section className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28">{route === "contact" ? <ContactSection locale={locale}/> : route === "about" ? <EditorialAbout locale={locale}/> : route === "projects" ? <div className="grid min-h-80 place-items-center border border-dashed border-border bg-subtle p-8 text-center text-muted-foreground">{c.work.note}</div> : topics ? <><SectionHeading label={topics.code} title={topics.title} text={topics.text}/><div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{topics.items.map(item => <div key={item} className="bg-background p-6 font-display text-xl">{item}</div>)}</div></> : <><SectionHeading label="SOLUTION_PATH" title={title} text={description}/><div className="mt-12 grid gap-4 md:grid-cols-3">{(route.includes("ai") ? c.solutions.groups[1][1] : route.includes("events") ? c.solutions.groups[2][1] : route.includes("consulting") ? ["AI Strategy","Automation","Digital Products","Cloud","Integrations","Technology Strategy"] : c.solutions.groups[0][1]).map(item => <div key={item} className="border border-border p-6 font-display text-lg">{item}</div>)}</div></>}<div className="mt-14"><Button asChild><Link to="/$lang/contact" params={{ lang: locale }}>{c.hero.primary}<ArrowRight size={17}/></Link></Button></div></section></SiteFrame>;
}

function EditorialAbout({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const steps = locale === "es" ? ["Software Engineering", "Tecnología", "Comunidad", "Speaking", "Oportunidades"] : ["Software Engineering", "Technology", "Community", "Speaking", "Opportunities"];
  return <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="aspect-[4/5] border border-border bg-subtle p-6 font-mono text-xs text-muted-foreground">PORTRAIT_EDITORIAL</div><div><SectionHeading label="STORY / 01" title={c.intro.title} text={c.intro.text}/><ol className="mt-12 border-t border-border">{steps.map((step,index) => <li key={step} className="grid grid-cols-[3rem_1fr] border-b border-border py-5"><span className="font-mono text-xs text-primary">0{index + 1}</span><span className="font-display text-xl">{step}</span></li>)}</ol></div></div>;
}