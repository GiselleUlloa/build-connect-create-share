export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];

export const routeKeys = [
  "build",
  "connect",
  "create",
  "speak",
  "projects",
  "about",
  "contact",
  "solutions/digital",
  "solutions/ai-automation",
  "solutions/events",
  "solutions/consulting",
] as const;

export type RouteKey = (typeof routeKeys)[number];

export function isLocale(value: string): value is Locale {
  return value === "es" || value === "en";
}

export function localePath(locale: Locale, path = "") {
  return `/${locale}${path ? `/${path}` : ""}`;
}

const shared = {
  brand: "GISSELLE ULLOA",
  social: ["LinkedIn", "GitHub", "Instagram"],
  pillars: ["build", "connect", "create", "share"] as const,
};

export const copy = {
  es: {
    ...shared,
    localeName: "Español",
    nav: [
      ["Construyo", "build"], ["Conecto", "connect"], ["Creo", "create"],
      ["Hablo", "speak"], ["Proyectos", "projects"], ["Sobre mí", "about"],
    ] as [string, RouteKey][],
    role: "Software Engineer · Technology Builder · Tech Speaker · Líder de comunidad",
    hero: {
      eyebrow: "CARTAGENA → GLOBAL · TECH_FOR_REAL_LIFE",
      title: "Construyo tecnología, comunidades y oportunidades.",
      text: "Software Engineer, Tech Speaker y Technology Builder que trabaja en productos digitales, IA, automatización, cloud y comunidades tecnológicas.",
      primary: "Trabajemos juntos", secondary: "Invítame a hablar", tertiary: "Explora lo que construyo",
      alt: "Composición editorial sobre software, comunidades tecnológicas y conferencias",
    },
    intro: {
      title: "Soy Giselle.",
      text: "Soy Software Engineer, Tech Speaker y líder de comunidad. Me enfoco en construir tecnología útil y crear espacios donde las personas puedan aprender, conectar y crecer. Mi trabajo combina software, IA, automatización, comunidades y experiencias tecnológicas.",
      cta: "Conoce más sobre mí", placeholder: "Espacio reservado para el retrato profesional de Giselle",
    },
    what: "Lo que hago",
    pillarsContent: [
      { code: "01 / CONSTRUYO", title: "Tecnología", text: "Productos digitales, software y sistemas inteligentes diseñados para resolver problemas reales.", items: ["Desarrollo de software", "Desarrollo web", "Landing pages", "E-commerce", "APIs e integraciones", "Dashboards", "Cloud", "IA", "Agentes de IA", "Automatización"] },
      { code: "02 / CONECTO", title: "Personas y oportunidades", text: "Construyo comunidades, alianzas y espacios donde el conocimiento tecnológico y las oportunidades pueden llegar más lejos.", items: ["Comunidades tecnológicas", "Ecosistemas de desarrolladores", "Alianzas", "Educación técnica", "Community building", "Talento digital", "Technology outreach"] },
      { code: "03 / CREO", title: "Experiencias tecnológicas", text: "Creo eventos y experiencias que reúnen a las personas alrededor de la tecnología.", items: ["Conferencias", "Hackathons", "Talleres", "Meetups", "Eventos corporativos", "Eventos híbridos", "Tecnología para eventos", "Gestión de speakers", "Producción técnica", "Tech merch"] },
      { code: "04 / COMPARTO", title: "Charlas y conocimiento", text: "Comparto conocimiento práctico sobre tecnología a través de charlas, talleres, paneles y experiencias de comunidad.", items: ["Inteligencia artificial", "Software Engineering", "Automatización", "Tecnologías emergentes", "Comunidades de desarrolladores", "Talento digital", "Mujeres en tecnología", "Cloud"] },
    ],
    solutions: {
      title: "Tecnología que puedo construir para ti", subtitle: "Desde una experiencia digital puntual hasta una solución tecnológica completa.",
      groups: [
        ["SOLUCIONES DIGITALES", ["Landing pages", "Sitios web", "E-commerce", "Aplicaciones web", "APIs", "Integraciones", "Dashboards", "Soluciones cloud"]],
        ["IA Y AUTOMATIZACIÓN", ["Agentes de IA", "Agentes de IA para WhatsApp", "Automatización de negocios", "Asistentes de IA", "Bases de conocimiento", "Integraciones de IA", "Automatización de procesos", "Consultoría en IA"]],
        ["EXPERIENCIAS TECNOLÓGICAS", ["Eventos tecnológicos", "Conferencias", "Hackathons", "Talleres", "Meetups", "Tecnología para eventos", "Registro", "Producción técnica", "Tech merch"]],
      ] as [string, string[]][],
    },
    problems: { title: "¿Qué estás tratando de resolver?", cards: [
      ["Necesito una presencia digital más sólida.", "Landing page / Sitio web", "solutions/digital"],
      ["Necesito un producto digital.", "Aplicación web / Software", "build"],
      ["Mi equipo hace demasiadas tareas manualmente.", "Automatización / IA", "solutions/ai-automation"],
      ["Quiero implementar IA.", "Agente de IA / Integración / Consultoría", "solutions/ai-automation"],
      ["Estoy organizando un evento tecnológico.", "Estrategia / Tecnología / Producción", "solutions/events"],
      ["Busco un speaker para mi evento.", "Charla / Workshop / Panel", "speak"],
    ] as [string,string,RouteKey][] },
    work: { title: "Lo que he construido", note: "Los proyectos verificados se publicarán aquí.", filters: ["Todos", "Software", "IA", "Automatización", "Eventos", "Comunidad", "Charlas", "Dashboards"] },
    credential: { title: "Construyendo entre tecnología y comunidad.", andicom: "Participación como panelista en una conversación vinculada a la Unión Europea durante ANDICOM 2026 sobre talento digital, jóvenes, inteligencia artificial, futuro del trabajo y oportunidades para el talento tecnológico.", panelist: "PANELISTA" },
    speaking: { title: "No solo construyo tecnología. También hablo de ella.", text: "Comparto perspectivas prácticas sobre IA, software, automatización, tecnologías emergentes, talento digital y comunidades tecnológicas a través de charlas, talleres y paneles.", types: [["KEYNOTES","Charlas de alto nivel sobre tecnología y su impacto."],["TECH TALKS","Charlas prácticas sobre software, IA, cloud y tecnologías emergentes."],["WORKSHOPS","Experiencias prácticas de aprendizaje."],["PANELES","Conversaciones sobre tecnología, talento, comunidades y futuro del trabajo."]] },
    community: { title: "La tecnología es más grande que el código.", text: "Creo que la tecnología crece más cuando las personas tienen espacios para aprender, construir, colaborar y conectar con oportunidades.", affiliations: ["GDG Cartagena · Lead Organizer / Community Leader", "Women Techmakers · Ambassador", "PionerasDev · Afiliación por verificar", "Caribe Dev · Afiliación por verificar", "Colombia Tech Week · Afiliación por verificar"] },
    consulting: { title: "¿Tienes un problema pero no sabes qué tecnología necesitas?", text: "Cuéntame qué quieres lograr, qué está frenando a tu equipo o qué quieres mejorar. Identificaremos el problema y definiremos un camino tecnológico práctico.", cta: "Hablar con Giselle" },
    contact: { title: "Construyamos algo útil.", text: "¿Tienes una idea, un problema técnico, una iniciativa de comunidad, una experiencia tecnológica o una oportunidad para hablar? Hablemos.", labels: ["Nombre", "Empresa u organización", "Email", "WhatsApp", "¿Qué te interesa?", "Mensaje"], options: ["Tecnología", "IA y Automatización", "Consultoría", "Eventos tecnológicos", "Charlas", "Comunidad / Alianzas", "Otro"], submit: "Iniciar conversación", success: "Gracias. Tu mensaje está listo para enviarse cuando se conecte el canal de contacto.", required: "Completa los campos obligatorios.", invalidEmail: "Ingresa un correo electrónico válido." },
    final: { title: "Construye. Conecta. Crea. Comparte.", text: "La tecnología es más poderosa cuando resuelve problemas reales, conecta personas y crea nuevas oportunidades." },
    footer: { contact: "Contacto", privacy: "Privacidad", terms: "Términos" },
    page: { build: ["Tecnología para problemas reales.", "De las ideas a una tecnología que funciona."], connect: ["Personas, conocimiento y oportunidades.", "Ecosistemas tecnológicos donde las personas pueden aprender, colaborar y crecer."], create: ["Creando espacios para que la tecnología suceda.", "Eventos y experiencias cuidadosamente diseñados alrededor de la tecnología."], speak: ["Conocimiento que se comparte.", "Charlas, talleres y paneles con perspectivas prácticas."], projects: ["Lo que he construido", "Una selección editable de software, IA, automatización, eventos, comunidad y charlas."], about: ["Software Engineer. Technology Builder. Speaker. Líder de comunidad.", "Una trayectoria que conecta software, tecnología, comunidad, speaking y oportunidades."], contact: ["Construyamos algo útil.", "Ideas, retos técnicos, experiencias y oportunidades para hablar."], "solutions/digital": ["Soluciones digitales", "Experiencias web y productos digitales enfocados en objetivos reales."], "solutions/ai-automation": ["IA y automatización", "Sistemas inteligentes y procesos que reducen trabajo manual."], "solutions/events": ["Experiencias tecnológicas", "Estrategia, tecnología y producción para reunir personas alrededor de la tecnología."], "solutions/consulting": ["Consultoría tecnológica", "Un camino práctico para convertir un problema en una decisión tecnológica clara."] } as Record<RouteKey,[string,string]>,
    seo: { title: "Giselle Ulloa — Software Engineer y Technology Builder", description: "Giselle Ulloa construye tecnología, comunidades y oportunidades desde software, IA, automatización, speaking y ecosistemas tecnológicos." },
  },
  en: {
    ...shared,
    localeName: "English",
    nav: [["Build","build"],["Connect","connect"],["Create","create"],["Speak","speak"],["Projects","projects"],["About","about"]] as [string,RouteKey][],
    role: "Software Engineer · Technology Builder · Tech Speaker · Community Leader",
    hero: { eyebrow: "CARTAGENA → GLOBAL · TECH_FOR_REAL_LIFE", title: "I build technology, communities and opportunities.", text: "Software Engineer, Tech Speaker and Technology Builder working across digital products, AI, automation, cloud and technology communities.", primary: "Work with me", secondary: "Invite me to speak", tertiary: "Explore what I build", alt: "Editorial composition about software, technology communities and speaking" },
    intro: { title: "I'm Giselle.", text: "I'm a Software Engineer, Tech Speaker and community leader focused on building useful technology and creating spaces where people can learn, connect and grow. My work combines software, AI, automation, technology communities and experiences.", cta: "More about me", placeholder: "Reserved space for Giselle's professional portrait" },
    what: "What I do",
    pillarsContent: [
      { code: "01 / BUILD", title: "Technology", text: "Digital products, software and intelligent systems designed to solve real problems.", items: ["Software development","Web development","Landing pages","E-commerce","APIs & integrations","Dashboards","Cloud","AI","AI agents","Automation"] },
      { code: "02 / CONNECT", title: "People & Opportunities", text: "Building communities, partnerships and spaces where technology knowledge and opportunities can move further.", items: ["Technology communities","Developer ecosystems","Partnerships","Technical education","Community building","Digital talent","Technology outreach"] },
      { code: "03 / CREATE", title: "Technology Experiences", text: "Creating events and experiences that bring people together around technology.", items: ["Conferences","Hackathons","Workshops","Meetups","Corporate tech events","Hybrid events","Event technology","Speaker management","Technical production","Tech merch"] },
      { code: "04 / SHARE", title: "Speaking & Knowledge", text: "Sharing practical technology knowledge through talks, workshops, panels and community experiences.", items: ["Artificial intelligence","Software Engineering","Automation","Emerging technologies","Developer communities","Digital talent","Women in technology","Cloud"] },
    ],
    solutions: { title: "Technology I can build for you", subtitle: "From a focused digital experience to a complete technology solution.", groups: [["DIGITAL SOLUTIONS",["Landing pages","Websites","E-commerce","Web applications","APIs","Integrations","Dashboards","Cloud solutions"]],["AI & AUTOMATION",["AI agents","WhatsApp AI agents","Business automation","AI assistants","Knowledge bases","AI integrations","Process automation","AI consulting"]],["TECHNOLOGY EXPERIENCES",["Technology events","Conferences","Hackathons","Workshops","Meetups","Event technology","Registration","Technical production","Tech merch"]]] as [string,string[]][] },
    problems: { title: "What are you trying to solve?", cards: [["I need a stronger digital presence.","Landing page / Website","solutions/digital"],["I need a digital product.","Web application / Software","build"],["My team is doing too much manually.","Automation / AI","solutions/ai-automation"],["I want to implement AI.","AI agent / AI integration / Consulting","solutions/ai-automation"],["I'm organizing a technology event.","Event strategy / Technology / Production","solutions/events"],["I want a speaker for my event.","Tech talk / Workshop / Panel","speak"]] as [string,string,RouteKey][] },
    work: { title: "Things I've built", note: "Verified projects will be published here.", filters: ["All","Software","AI","Automation","Events","Community","Speaking","Dashboards"] },
    credential: { title: "Building across technology and community.", andicom: "Participation as a panelist in a European Union-connected conversation during ANDICOM 2026 on digital talent, young people, artificial intelligence, the future of work and opportunities for technology talent.", panelist: "PANELIST" },
    speaking: { title: "I don't just build technology. I talk about it.", text: "I share practical perspectives on AI, software, automation, emerging technologies, digital talent and technology communities through talks, workshops and panels.", types: [["KEYNOTES","High-level talks about technology and its impact."],["TECH TALKS","Practical talks about software, AI, cloud and emerging technologies."],["WORKSHOPS","Hands-on learning experiences."],["PANELS","Conversations about technology, talent, communities and the future of work."]] },
    community: { title: "Technology is bigger than code.", text: "I believe technology grows faster when people have spaces to learn, build, collaborate and connect with opportunities.", affiliations: ["GDG Cartagena · Lead Organizer / Community Leader", "Women Techmakers · Ambassador", "PionerasDev · Affiliation to be verified", "Caribe Dev · Affiliation to be verified", "Colombia Tech Week · Affiliation to be verified"] },
    consulting: { title: "Have a problem but don't know what technology you need?", text: "Tell me what you're trying to achieve, what is slowing your team down or what you want to improve. We'll identify the problem and define a practical technology path.", cta: "Talk to Giselle" },
    contact: { title: "Let's build something useful.", text: "Have an idea, a technical problem, a community initiative, a technology experience or a speaking opportunity? Let's talk.", labels: ["Name","Company or organization","Email","WhatsApp","What are you interested in?","Message"], options: ["Technology","AI & Automation","Consulting","Tech events","Speaking","Community / Partnerships","Other"], submit: "Start a conversation", success: "Thank you. Your message is ready to send once the contact channel is connected.", required: "Complete the required fields.", invalidEmail: "Enter a valid email address." },
    final: { title: "Build. Connect. Create. Share.", text: "Technology is more powerful when it solves real problems, connects people and creates new opportunities." },
    footer: { contact: "Contact", privacy: "Privacy", terms: "Terms" },
    page: { build: ["Technology, built for real-world problems.","From ideas to technology that works."], connect: ["People, knowledge and opportunities.","Technology ecosystems where people can learn, collaborate and grow."], create: ["Creating spaces for technology to happen.","Events and experiences carefully built around technology."], speak: ["Knowledge worth sharing.","Talks, workshops and panels with practical perspectives."], projects: ["Things I've built","An editable selection of software, AI, automation, events, community and speaking work."], about: ["Software engineer. Technology builder. Speaker. Community leader.","A story connecting software, technology, community, speaking and opportunities."], contact: ["Let's build something useful.","Ideas, technical challenges, experiences and speaking opportunities."], "solutions/digital": ["Digital solutions","Web experiences and digital products focused on real goals."], "solutions/ai-automation": ["AI & automation","Intelligent systems and processes that reduce manual work."], "solutions/events": ["Technology experiences","Strategy, technology and production that bring people together around technology."], "solutions/consulting": ["Technology consulting","A practical path from a problem to a clear technology decision."] } as Record<RouteKey,[string,string]>,
    seo: { title: "Giselle Ulloa — Software Engineer & Technology Builder", description: "Giselle Ulloa builds technology, communities and opportunities across software, AI, automation, speaking and technology ecosystems." },
  },
};

export type SiteCopy = (typeof copy)[Locale];