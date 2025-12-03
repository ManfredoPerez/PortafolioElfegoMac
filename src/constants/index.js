const navLinks = [
  {
    id: 1,
    name: "Proyecto",
    type: "finder",
  },
  {
    id: 3,
    name: "Contacto",
    type: "contact",
  },
  {
    id: 4,
    name: "Portafolio",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portafolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Pagina", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gelaria", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contacto", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archivo", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "API Pokemones, 2024",
    title:
      "Pokedex",
    image: "/images/Pokedex.png",
    link: "https://cosumiendoapipokedex.onrender.com/",
  },
  {
    id: 2,
    date: "Meca JS, 2025",
    title: "Meca JS",
    image: "/images/MecaJS.png",
    link: "https://meca-con-js.onrender.com/",
  },
  {
    id: 3,
    date: "Portafolio, 2024",
    title: "Portafolio Profecional Elfego Pérez",
    image: "/images/Portafolio.png",
    link: "https://manfredoperez.github.io/CVPORTAFOLIO/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "Laravel"],
  },
  {
    category: "Mobil",
    items: ["React Native", "Expo"],
  },
  {
    category: "Estilos",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Nest", "Laravel", ".Net"],
  },
  {
    category: "Base de datos",
    items: ["MySQL", "SQL","MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ManfredoPerez",
  },
  {
    id: 2,
    text: "Pagina/Portafolio",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://portafolio-neon-sigma-49.vercel.app/",
  },
  // {
  //   id: 3,
  //   text: "Twitter/X",
  //   icon: "/icons/twitter.svg",
  //   bg: "#ff866b",
  //   link: "https://x.com/",
  // },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/elfego-manfredo-p%C3%A9rez-ramos-43140124a/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Biblioteca",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Recuerdos",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Lugares",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "Personas",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favoritos",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/xela.jpg",
  },
  {
    id: 2,
    img: "/images/elfego.png",
  },
  {
    id: 3,
    img: "/images/pc.jpg",
  },
  {
    id: 4,
    img: "/images/yo.jpg",
  },
  {
    id: 5,
    img: "/images/elfego.png",
  },
  {
    id: 6,
    img: "/images/fifa.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Trabajo",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Pokedex Project Web",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Pokedex Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "La Pokédex web es una aplicación interactiva diseñada para explorar y buscar Pokémon de manera sencilla.",
            "Incluye un buscador por nombre y filtros por tipo (Planta, Fuego, Agua, Dragón, etc.), lo que permite una navegación rápida y organizada.",
            "Su diseño recuerda a una enciclopedia digital de Pokémon, accesible desde cualquier dispositivo.",
            "La interfaz es clara y responsiva, ofreciendo una experiencia práctica y divertida para fans y desarrolladores.",
          ],
        },
        {
          id: 2,
          name: "Pokedex.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cosumiendoapipokedex.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "pokedex.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Pokedex.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "MecaJS Project Web",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[15vh] left-7",
      children: [
        {
          id: 1,
          name: "MecaJS Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Meca con JS es un proyecto web desarrollado con HTML, CSS y JavaScript, inspirado en Monkeytype.",
            "Su objetivo es poner a prueba y mejorar las habilidades de mecanografía mediante un reto interactivo.",
            "La aplicación ofrece un temporizador y frases aleatorias, creando una experiencia dinámica y entretenida.",
            "El diseño es sencillo y funcional, pensado para ser accesible desde cualquier dispositivo.",
          ],
        },
        {
          id: 2,
          name: "MecaJS.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://meca-con-js.onrender.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "MecaJS.png",
          icon: "/images/MecaJS.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/MecaJS.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "VerdeDigital Project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[27vh] left-7",
      children: [
        {
          id: 1,
          name: "VerdeDigital Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "VerdeDigital es una plataforma de reciclaje inteligente que transforma la forma de gestionar residuos.",
            "Utiliza tecnologías avanzadas como IA y blockchain para optimizar procesos, garantizando eficiencia y transparencia.",
            "Su propuesta convierte el reciclaje en una actividad económica y accesible, con impacto ambiental positivo.",
            "La interfaz invita a unirse al movimiento verde, fomentando la participación comunitaria y la acción sostenible.",
          ],
        },
        {
          id: 2,
          name: "VerdeDigital Project.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://verdedigitalproyecto.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/VerdeDigital.png",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "Portafolio Elfego",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-80",
      windowPosition: "top-[38vh] left-7",
      children: [
        {
          id: 1,
          name: "Portafolio Elfego.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "El Portafolio de Elfego Pérez presenta su trayectoria académica y proyectos en ingeniería en sistemas.",
            "Incluye información personal, habilidades técnicas (CSS, JS, React, PHP, HTML, Java, C#, .NET) y fortalezas como organización, responsabilidad y adaptabilidad.",
            "Muestra su formación: cierre de pensum en Ingeniería en Sistemas y estudios actuales de Maestría en Seguridad Informática en UMG.",
            "El portafolio recopila proyectos destacados como Meca JS, Pokédex API y VerdeDigital, reflejando creatividad y experiencia práctica.",
            "Ofrece servicios de diseño web adaptable, desarrollo frontend/backend y soporte tecnológico, con un enfoque en soluciones limpias y eficientes.",
          ],
        },
        {
          id: 2,
          name: "Portafolio Elfego.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://meca-con-js.onrender.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Portafolio.png",
          icon: "/images/MecaJS.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Portafolio.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "Acerca de mí",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Portafolio",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Basura",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };