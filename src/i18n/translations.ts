export type Lang = "es" | "en";

interface ServiceItem {
  n: string;
  name: string;
  desc: string;
}

interface ProjectItem {
  n: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface Translation {
  nav: { about: string; services: string; projects: string; contact: string };
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    contact: string;
    orbit: { frontend: string; ai: string; backend: string; data: string; devops: string };
  };
  about: { heading: string; text: string };
  services: { heading: string; items: ServiceItem[] };
  projects: { heading: string; live: string; items: ProjectItem[] };
  contact: {
    heading: string;
    text: string;
    location: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
    formNote: string;
  };
  footer: string;
}

export const translations: Record<Lang, Translation> = {
  es: {
    nav: { about: "Sobre mí", services: "Servicios", projects: "Proyectos", contact: "Contacto" },
    hero: {
      greeting: "Hola, soy",
      name: "Kian",
      tagline: "ingeniero de sistemas y desarrollador full stack construyendo productos web potenciados con inteligencia artificial",
      contact: "Contáctame",
      orbit: {
        frontend: "Frontend",
        ai: "IA / Machine Learning",
        backend: "Backend",
        data: "Datos / IA",
        devops: "DevOps",
      },
    },
    about: {
      heading: "Sobre mí",
      text: "Con más de 5 años de experiencia en ingeniería de software, me enfoco en desarrollo full stack, soluciones de inteligencia artificial y machine learning, e infraestructura en la nube. Disfruto trabajar con equipos que buscan construir productos con impacto real. ¡Construyamos algo increíble juntos!",
    },
    services: {
      heading: "Servicios",
      items: [
        {
          n: "01",
          name: "Desarrollo Full Stack",
          desc: "Construcción de aplicaciones web completas con React, Laravel, Flask y JavaScript moderno, desde el frontend hasta la base de datos.",
        },
        {
          n: "02",
          name: "IA & Machine Learning",
          desc: "Redes neuronales y modelos predictivos construidos con Python, TensorFlow y Keras, aplicados a problemas reales de negocio.",
        },
        {
          n: "03",
          name: "APIs & Backend",
          desc: "Diseño y desarrollo de backends escalables y APIs REST con Django, Flask y Laravel, integrando servicios externos.",
        },
        {
          n: "04",
          name: "Servidores & Cloud",
          desc: "Administración de servidores Linux, contenerización con Docker, optimización de bases de datos e infraestructura en la nube.",
        },
        {
          n: "05",
          name: "Diseño Web & UI",
          desc: "Interfaces modernas, responsive y enfocadas en la experiencia de usuario, con React y Tailwind CSS.",
        },
      ],
    },
    projects: {
      heading: "Proyecto",
      live: "Visitar sitio",
      items: [
        {
          n: "01",
          category: "Cliente",
          name: "El Casa Rosarito Group",
          desc: "Plataforma inmobiliaria para venta de casas, departamentos y terrenos en Rosarito, con catálogo dinámico y diseño responsive.",
          tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        },
        {
          n: "02",
          category: "Cliente",
          name: "Georgy's Pizza",
          desc: "Sitio web para restaurante con menú interactivo, carrito de pedidos y experiencia optimizada para móviles.",
          tags: ["React.js", "TypeScript", "UI/UX"],
        },
        {
          n: "03",
          category: "Cliente",
          name: "Pinturas Galería",
          desc: "Galería y tienda del artista Simeón Gonzáles para exhibir y vender obras originales, con carrito y navegación inmersiva.",
          tags: ["React.js", "TypeScript", "E-commerce"],
        },
        {
          n: "04",
          category: "Cliente",
          name: "El Palacio de Eliot",
          desc: "Tienda de regalos, juguetes y novedades con catálogo por categorías y pedidos directos por WhatsApp.",
          tags: ["React.js", "TypeScript", "WhatsApp"],
        },
      ],
    },
    contact: {
      heading: "¿Tienes un proyecto en mente?",
      text: "Estoy disponible para trabajos freelance, colaboraciones y nuevas oportunidades. Escríbeme y conversemos.",
      location: "Playas de Rosarito, Baja California, México",
      formName: "Nombre",
      formEmail: "Email",
      formMessage: "Mensaje",
      formSend: "Enviar mensaje",
      formNote: "Se abrirá tu cliente de correo con el mensaje listo para enviar.",
    },
    footer: "Diseñado & desarrollado por Kian Saavedra Canessa.",
  },
  en: {
    nav: { about: "About", services: "Services", projects: "Projects", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      name: "Kian",
      tagline: "a systems engineer & full stack developer building AI-powered web products",
      contact: "Contact Me",
      orbit: {
        frontend: "Frontend",
        ai: "AI / Machine Learning",
        backend: "Backend",
        data: "Data / AI",
        devops: "DevOps",
      },
    },
    about: {
      heading: "About me",
      text: "With more than 5 years of experience in software engineering, I focus on full stack development, AI and machine learning solutions, and cloud infrastructure. I love working with teams that want to build products with real impact. Let's build something incredible together!",
    },
    services: {
      heading: "Services",
      items: [
        {
          n: "01",
          name: "Full Stack Development",
          desc: "Building complete web applications with React, Laravel, Flask and modern JavaScript, from the frontend to the database.",
        },
        {
          n: "02",
          name: "AI & Machine Learning",
          desc: "Neural networks and predictive models built with Python, TensorFlow and Keras, applied to real business problems.",
        },
        {
          n: "03",
          name: "APIs & Backend",
          desc: "Designing and building scalable backends and REST APIs with Django, Flask and Laravel, integrating external services.",
        },
        {
          n: "04",
          name: "Servers & Cloud",
          desc: "Linux server administration, containerization with Docker, database optimization and cloud infrastructure.",
        },
        {
          n: "05",
          name: "Web Design & UI",
          desc: "Modern, responsive interfaces focused on user experience, built with React and Tailwind CSS.",
        },
      ],
    },
    projects: {
      heading: "Project",
      live: "Visit site",
      items: [
        {
          n: "01",
          category: "Client",
          name: "El Casa Rosarito Group",
          desc: "Real-estate platform for houses, condos and land for sale in Rosarito, with a dynamic catalog and responsive design.",
          tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        },
        {
          n: "02",
          category: "Client",
          name: "Georgy's Pizza",
          desc: "Restaurant website with an interactive menu, order cart and a mobile-first experience.",
          tags: ["React.js", "TypeScript", "UI/UX"],
        },
        {
          n: "03",
          category: "Client",
          name: "Pinturas Galería",
          desc: "Gallery and shop for artist Simeón Gonzáles to showcase and sell original works, with a cart and immersive navigation.",
          tags: ["React.js", "TypeScript", "E-commerce"],
        },
        {
          n: "04",
          category: "Client",
          name: "El Palacio de Eliot",
          desc: "Gift, toy and novelty shop with a category-based catalog and direct ordering through WhatsApp.",
          tags: ["React.js", "TypeScript", "WhatsApp"],
        },
      ],
    },
    contact: {
      heading: "Have a project in mind?",
      text: "I'm available for freelance work, collaborations and new opportunities. Send me a message and let's talk.",
      location: "Playas de Rosarito, Baja California, Mexico",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSend: "Send message",
      formNote: "This will open your email client with the message ready to send.",
    },
    footer: "Designed & developed by Kian Saavedra Canessa.",
  },
};
