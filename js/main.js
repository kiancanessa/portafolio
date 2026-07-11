/* =========================================================
   PROYECTOS — agrega uno nuevo copiando un bloque del array.
   icon: "home" | "pizza" | "art"  (o añade uno nuevo en ICONS)
   media: "pm-1" | "pm-2" | "pm-3" | "pm-4"  (color de fondo, rota entre 4 estilos)
========================================================= */
const PROJECTS = [
  {
    icon: "home",
    media: "pm-1",
    url: "https://elcasarosaritogroup.com/",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    title: { es: "El Casa Rosarito Group", en: "El Casa Rosarito Group" },
    desc: {
      es: "Plataforma inmobiliaria para venta de casas, departamentos y terrenos en Rosarito, con catálogo dinámico y diseño responsive.",
      en: "Real-estate platform for houses, condos and land for sale in Rosarito, with a dynamic catalog and responsive design."
    }
  },
  {
    icon: "pizza",
    media: "pm-2",
    url: "https://georgys-pizza-kiancanessa.vercel.app/",
    tags: ["React.js", "TypeScript", "UI/UX"],
    title: { es: "Georgy's Pizza", en: "Georgy's Pizza" },
    desc: {
      es: "Sitio web para restaurante con menú interactivo, carrito de pedidos y experiencia optimizada para móviles.",
      en: "Restaurant website with an interactive menu, order cart and a mobile-first experience."
    }
  },
  {
    icon: "art",
    media: "pm-3",
    url: "https://pinturas-galeria.vercel.app/",
    tags: ["React.js", "TypeScript", "Galería"],
    title: { es: "Pinturas Galería", en: "Pinturas Galería" },
    desc: {
      es: "Galería de arte digital para exhibir y presentar obras pictóricas, con navegación fluida y enfoque visual.",
      en: "Digital art gallery for showcasing paintings, built with smooth navigation and a visual-first layout."
    }
  }
];

const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 10v9a1 1 0 001 1H9a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2.5a1 1 0 001-1v-9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  pizza: `<svg viewBox="0 0 24 24" fill="none"><path d="M2 6.5L12 2l10 4.5-10 15L2 6.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M2 6.5c3 1.6 6.5 2.4 10 2.4s7-.8 10-2.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="11.5" r="1" fill="currentColor"/><circle cx="9.5" cy="15" r="1" fill="currentColor"/></svg>`,
  art: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 100 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.3c1.8 0 3.2-1.4 3.2-3.2C20.5 6.5 16.7 3 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor"/><circle cx="10.5" cy="7" r="1.1" fill="currentColor"/><circle cx="15.5" cy="8" r="1.1" fill="currentColor"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

/* =========================================================
   TRADUCCIONES
========================================================= */
const I18N = {
  es: {
    "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.experience": "Experiencia",
    "nav.projects": "Proyectos", "nav.contact": "Contacto", "nav.cta": "Hablemos",
    "hero.eyebrow": "Disponible para nuevos proyectos",
    "hero.hi": "Hola, soy",
    "hero.role": "Ingeniero de Sistemas &amp; Desarrollador Full Stack — construyo aplicaciones web modernas potenciadas con IA.",
    "hero.desc": "Java, TypeScript, React, Python, PHP &amp; Laravel. Desde tiendas online hasta sistemas con Machine Learning y administración de servidores Linux.",
    "hero.ctaWork": "Ver mi trabajo", "hero.ctaContact": "Contactarme",
    "hero.metaYears": "años de experiencia", "hero.metaProjects": "roles &amp; proyectos", "hero.metaAccuracy": "precisión en modelo ML",
    "about.tag": "Sobre mí", "about.title": "Construyo software que resuelve problemas reales",
    "about.text": "Ingeniero de Sistemas y Desarrollador Full Stack con más de 5 años de experiencia en programación orientada a objetos y desarrollo de soluciones basadas en Inteligencia Artificial y Machine Learning usando Python. Experiencia diseñando y desarrollando aplicaciones web con Django, Flask y APIs REST, además de otros entornos como Laravel y PHP.<br><br>En el frontend trabajo con React y Tailwind CSS para construir interfaces modernas y responsive. Tengo experiencia en contenerización y despliegue de aplicaciones con Docker, optimizando entornos de desarrollo y producción.<br><br>He desarrollado proyectos de redes neuronales aplicados al sector agrícola, incluyendo sistemas predictivos para determinar el momento óptimo de cosecha de uva. Además, cuento con habilidades en administración de servidores Linux, optimización y gestión de bases de datos (MySQL y PostgreSQL), e implementación de soluciones de infraestructura en la nube.",
    "about.card1Title": "Ubicación", "about.card2Title": "Experiencia", "about.card2Text": "5+ años construyendo productos full stack",
    "about.card3Title": "Educación", "about.card3Text": "Ing. de Sistemas y Computación — U. Católica Santo Toribio de Mogrovejo",
    "about.skillsTitle": "Stack &amp; herramientas", "about.skillsLangs": "Lenguajes", "about.skillsFrameworks": "Frameworks &amp; librerías", "about.skillsData": "Datos &amp; infraestructura",
    "exp.tag": "Trayectoria", "exp.title": "Experiencia profesional",
    "exp.item0a.role": "Desarrollador de Software", "exp.item0a.date": "Jul 2026 — Presente",
    "exp.item0a.b1": "Desarrollo y mantenimiento de la plataforma web de la inmobiliaria, incluyendo catálogo de propiedades y panel administrativo.",
    "exp.item0a.b2": "Optimización de rendimiento y diseño responsive para mejorar la experiencia de usuario en dispositivos móviles.",
    "exp.item0b.role": "Desarrollador Web", "exp.item0b.date": "May 2026 — Jun 2026",
    "exp.item0b.b1": "Diseño y desarrollo del sitio web del restaurante, incluyendo menú interactivo y sistema de pedidos.",
    "exp.item0b.b2": "Construcción de interfaz responsive enfocada en experiencia móvil con React y TypeScript.",
    "exp.item1.role": "Full Stack Engineer", "exp.item1.date": "2025 — Presente",
    "exp.item1.b1": "Desarrollé un sistema de facturación automatizado integrando la API oficial de SUNAT, reduciendo el tiempo de procesamiento en un 70%.",
    "exp.item1.b2": "Backend escalable en Python Flask con PostgreSQL manejando más de 1,000 transacciones diarias.",
    "exp.item1.b3": "Implementé lógica impulsada por IA para cálculos contables y cumplimiento tributario automatizado.",
    "exp.item1.b4": "Despliegue y mantenimiento en servidores Linux con prácticas de integración continua.",
    "exp.item2.role": "Full Stack Engineer", "exp.item2.date": "Ene 2025 — Dic 2025",
    "exp.item2.b1": "Desarrollé una aplicación web de Machine Learning para predecir el momento óptimo de cosecha con 92% de precisión.",
    "exp.item2.b2": "Implementé redes neuronales LSTM analizando datos climáticos para la toma de decisiones agrícolas.",
    "exp.item2.b3": "Backend en Flask con formularios dinámicos, predicciones en tiempo real y visualizaciones interactivas.",
    "exp.item3.role": "Full Stack Engineer — Sistema de Mantenimiento", "exp.item3.date": "2024 — Presente", "exp.item3.company": "Proyecto propio",
    "exp.item3.b1": "Construí un sistema de seguimiento de mantenimiento con alertas automáticas y programación de tareas.",
    "exp.item3.b2": "Desarrollé reportes en PDF, filtros avanzados y un dashboard de analítica.",
    "exp.item4.role": "Administración de Servidores", "exp.item4.date": "2024 — Presente", "exp.item4.company": "Proyecto de infraestructura",
    "exp.item4.b1": "Administré servidores Ubuntu: Apache, MySQL, virtual hosts y configuración SSL.",
    "exp.item4.b2": "Migración de servidores con particionamiento de disco y hardening de seguridad (AppArmor, UFW).",
    "exp.item4.b3": "Optimización de rendimiento, backups automatizados y configuración de enrutamiento de red.",
    "exp.item5.role": "Web Developer", "exp.item5.date": "2022 — Presente", "exp.item5.company": "Proyecto e-commerce",
    "exp.item5.b1": "Construí una tienda en línea completa con carrito de compras, pagos y seguridad SSL.",
    "exp.item5.b2": "Diseño responsive con Bootstrap e interacciones dinámicas en JavaScript.",
    "exp.eduTitle": "Educación", "exp.eduDegree": "Ingeniería de Sistemas y Computación — Programación informática, aplicaciones específicas",
    "projects.tag": "Portafolio", "projects.title": "Proyectos destacados", "projects.sub": "Sitios y aplicaciones que he diseñado y desarrollado de principio a fin.",
    "projects.visit": "Visitar sitio", "projects.moreTitle": "Más proyectos pronto", "projects.moreDesc": "Sigo construyendo. Nuevos trabajos se agregarán aquí a medida que estén listos.",
    "contact.tag": "Contacto", "contact.title": "¿Tienes un proyecto en mente?",
    "contact.text": "Estoy disponible para trabajos freelance, colaboraciones y nuevas oportunidades. Escríbeme y conversemos.",
    "contact.location": "Playas de Rosarito, Baja California, México",
    "contact.formName": "Nombre", "contact.formEmail": "Email", "contact.formMessage": "Mensaje",
    "contact.formSend": "Enviar mensaje", "contact.formNote": "Se abrirá tu cliente de correo con el mensaje listo para enviar.",
    "footer.text": "Diseñado &amp; desarrollado por Kian Saavedra Canessa."
  },
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.contact": "Contact", "nav.cta": "Let's talk",
    "hero.eyebrow": "Available for new projects",
    "hero.hi": "Hi, I'm",
    "hero.role": "Systems Engineer &amp; Full Stack Developer — I build modern, AI-powered web applications.",
    "hero.desc": "Java, TypeScript, React, Python, PHP &amp; Laravel. From online stores to Machine Learning systems and Linux server administration.",
    "hero.ctaWork": "See my work", "hero.ctaContact": "Get in touch",
    "hero.metaYears": "years of experience", "hero.metaProjects": "roles &amp; projects", "hero.metaAccuracy": "ML model accuracy",
    "about.tag": "About me", "about.title": "I build software that solves real problems",
    "about.text": "Systems Engineer and Full-Stack Developer with +5 years of experience in object-oriented programming and development of Artificial Intelligence and Machine Learning–based solutions using Python. Experience in designing and developing web applications with Django, Flask, and REST APIs, as well as other development environments such as Laravel and PHP.<br><br>In the frontend area, I work with React and Tailwind CSS to build modern and responsive interfaces. I have experience in containerization and application deployment using Docker, optimizing development and production environments.<br><br>I have developed neural network projects applied to the agricultural sector, including predictive systems to determine the optimal grape harvest time. Additionally, I have skills in Linux server administration, optimization and management of databases (MySQL and PostgreSQL), and implementation of cloud infrastructure solutions.",
    "about.card1Title": "Location", "about.card2Title": "Experience", "about.card2Text": "5+ years building full stack products",
    "about.card3Title": "Education", "about.card3Text": "Systems &amp; Computer Engineering — Universidad Católica Santo Toribio de Mogrovejo",
    "about.skillsTitle": "Stack &amp; tools", "about.skillsLangs": "Languages", "about.skillsFrameworks": "Frameworks &amp; libraries", "about.skillsData": "Data &amp; infrastructure",
    "exp.tag": "Career", "exp.title": "Professional experience",
    "exp.item0a.role": "Software Developer", "exp.item0a.date": "Jul 2026 — Present",
    "exp.item0a.b1": "Development and maintenance of the real-estate company's web platform, including the property catalog and admin panel.",
    "exp.item0a.b2": "Performance optimization and responsive design to improve the user experience on mobile devices.",
    "exp.item0b.role": "Web Developer", "exp.item0b.date": "May 2026 — Jun 2026",
    "exp.item0b.b1": "Designed and developed the restaurant's website, including an interactive menu and ordering system.",
    "exp.item0b.b2": "Built a responsive interface focused on the mobile experience using React and TypeScript.",
    "exp.item1.role": "Full Stack Engineer", "exp.item1.date": "2025 — Present",
    "exp.item1.b1": "Developed an automated billing system integrating the official SUNAT API, reducing processing time by 70%.",
    "exp.item1.b2": "Built a scalable backend in Python Flask with PostgreSQL handling 1,000+ daily transactions.",
    "exp.item1.b3": "Implemented AI-driven logic for accounting calculations and automated tax compliance.",
    "exp.item1.b4": "Deployed and maintained services on Linux servers using continuous integration practices.",
    "exp.item2.role": "Full Stack Engineer", "exp.item2.date": "Jan 2025 — Dec 2025",
    "exp.item2.b1": "Developed a Machine Learning web application to predict optimal harvest time, achieving 92% accuracy.",
    "exp.item2.b2": "Implemented LSTM neural networks analyzing climate data for agricultural decision-making.",
    "exp.item2.b3": "Built a Flask backend with dynamic forms, real-time predictions and interactive visualizations.",
    "exp.item3.role": "Full Stack Engineer — Maintenance System", "exp.item3.date": "2024 — Present", "exp.item3.company": "Personal project",
    "exp.item3.b1": "Built a maintenance tracking system with automatic alerts and scheduling.",
    "exp.item3.b2": "Developed PDF reports, advanced filters and an analytics dashboard.",
    "exp.item4.role": "Server Administration", "exp.item4.date": "2024 — Present", "exp.item4.company": "Infrastructure project",
    "exp.item4.b1": "Managed Ubuntu servers: Apache, MySQL, virtual hosts and SSL configuration.",
    "exp.item4.b2": "Performed server migration with disk partitioning and security hardening (AppArmor, UFW).",
    "exp.item4.b3": "Optimized performance, automated backups, and configured network routing.",
    "exp.item5.role": "Web Developer", "exp.item5.date": "2022 — Present", "exp.item5.company": "E-commerce project",
    "exp.item5.b1": "Built a complete online store with shopping cart, payments and SSL security.",
    "exp.item5.b2": "Responsive design with Bootstrap and dynamic JavaScript interactions.",
    "exp.eduTitle": "Education", "exp.eduDegree": "Systems &amp; Computer Engineering — Computer programming, specific applications",
    "projects.tag": "Portfolio", "projects.title": "Featured projects", "projects.sub": "Sites and applications I've designed and built end to end.",
    "projects.visit": "Visit site", "projects.moreTitle": "More projects coming soon", "projects.moreDesc": "Still building. New work will be added here as it's ready.",
    "contact.tag": "Contact", "contact.title": "Have a project in mind?",
    "contact.text": "I'm available for freelance work, collaborations and new opportunities. Send me a message and let's talk.",
    "contact.location": "Playas de Rosarito, Baja California, Mexico",
    "contact.formName": "Name", "contact.formEmail": "Email", "contact.formMessage": "Message",
    "contact.formSend": "Send message", "contact.formNote": "This will open your email client with the message ready to send.",
    "footer.text": "Designed &amp; developed by Kian Saavedra Canessa."
  }
};

let currentLang = (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll(".lang-opt").forEach(el => {
    el.classList.toggle("active", el.getAttribute("data-lang") === lang);
  });
  renderProjects();
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(currentLang === "es" ? "en" : "es");
});

/* =========================================================
   Render de proyectos
========================================================= */
function renderProjects(){
  const grid = document.getElementById("projectsGrid");
  const t = I18N[currentLang];
  let html = "";

  PROJECTS.forEach((p, i) => {
    html += `
      <article class="project-card reveal in" style="transition-delay:${i * 80}ms">
        <div class="project-media ${p.media}">
          <div class="noise"></div>
          ${ICONS[p.icon] || ""}
        </div>
        <div class="project-body">
          <h3>${p.title[currentLang]}</h3>
          <p>${p.desc[currentLang]}</p>
          <div class="project-tags">${p.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
          <a class="project-link" href="${p.url}" target="_blank" rel="noopener">
            ${t["projects.visit"]} ${ICONS.arrow}
          </a>
        </div>
      </article>`;
  });

  html += `
    <article class="project-card more reveal in">
      <div class="project-body">
        <div class="more-icon">+</div>
        <h3>${t["projects.moreTitle"]}</h3>
        <p>${t["projects.moreDesc"]}</p>
      </div>
    </article>`;

  grid.innerHTML = html;
}

/* =========================================================
   Navbar scroll state
========================================================= */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

/* =========================================================
   Mobile menu
========================================================= */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* =========================================================
   Reveal on scroll
========================================================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* =========================================================
   Custom cursor (desktop only)
========================================================= */
const cursorDot = document.getElementById("cursorDot");
if (matchMedia("(hover:hover) and (pointer:fine)").matches){
  window.addEventListener("mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
  });
  document.querySelectorAll("a, button, .skill-tags span").forEach(el => {
    el.addEventListener("mouseenter", () => cursorDot.style.transform = "translate(-50%,-50%) scale(2.2)");
    el.addEventListener("mouseleave", () => cursorDot.style.transform = "translate(-50%,-50%) scale(1)");
  });
}

/* =========================================================
   Contact form -> mailto
========================================================= */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent(`Contacto desde portafolio — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:kiansaaca@gmail.com?subject=${subject}&body=${body}`;
});

/* =========================================================
   Init
========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
applyLang(currentLang);
