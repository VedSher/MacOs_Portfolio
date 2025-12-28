const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 2,
    name: "Contact",
    type: "contact",
  },
  {
    id: 3,
    name: "Resume",
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
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
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
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Dec 16, 2025",
    title: "GenAI Didn't Replace Developers — It Changed How We Build",
    image: "/images/blog2.png",
    link: "https://www.linkedin.com/posts/vaidik-shreshth_genai-ai-softwaredevelopment-activity-7406405204759408640-nm54?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1ASB4BfmNydZagDT49gjVaikF20LRFs_A",
  },
  {
    id: 3,
    date: "Dec 15, 2025",
    title: " GSAP Taught Me What “Performance-First Frontend” Actually Means",
    image: "/images/blog3.png",
    link: "https://www.linkedin.com/posts/vaidik-shreshth_gsap-taught-me-what-performance-first-activity-7406035402127609856-XAlm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1ASB4BfmNydZagDT49gjVaikF20LRFs_A",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Java", "JavaScript (JS)", "Python", "C"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "Linux"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/VedSher",
  },
  {
    id: 2,
    text: "Leetcode",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://leetcode.com/u/vaidikjsk",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/vaidikshreshth_",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/vaidik-shreshth/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
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
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "VedInterview - AI Interview Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[15vh] left-[12vw]", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "VedInterview Project.txt",          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "VedInterview is an AI-driven mock interview platform designed to help users practice and improve real-world interview skills.",
            "The platform simulates realistic interview scenarios using voice-based interactions powered by Vapi AI, making the experience conversational and engaging.",
            "It leverages the Gemini API to analyze user responses and evaluate them through a custom-built LLM scoring system.",
            "Responses are scored across defined score bands, and users receive targeted, actionable feedback to identify strengths and areas of improvement.",
            "Built with Next.js and Tailwind CSS, VedInterview delivers a fast, responsive, and clean UI, ensuring a smooth user experience across devices.",
            "Firebase handles authentication and data storage, while Zod is used for robust schema validation to maintain data integrity throughout the app.",
          ],        },
        {
          id: 2,
          name: "vedinterview.vercel.app/",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://vedinterview.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "prepwise.png",
          icon: "/images/project-1.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 4,
          name: "GitHub",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/VedSher/vedinterview",
          position: "top-60 right-20",
        },
      ],
    },

    // // ▶ Project 2
    // {
    //   id: 6,
    //   name: "AI Resume Analyzer",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-52 right-80",
    //   windowPosition: "top-[20vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "AI Resume Analyzer Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 right-10",
    //       description: [
    //         "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
    //         "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
    //         "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
    //         "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "ai-resume-analyzer.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
    //       position: "top-20 left-20",
    //     },
    //     {
    //       id: 4,
    //       name: "ai-resume-analyzer.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 left-80",
    //       imageUrl: "/images/project-2.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 left-5",
    //     },
    //   ],
    // },

    // ▶ Project 3
    {
      id: 7,
      name: "macOS-Style Interactive Developer Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-[80vw]",
      children: [
        {
          id: 1,
          name: "Portfolio Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This project is a fully interactive macOS-style developer portfolio that behaves like a desktop operating system rather than a traditional website.",
            "Instead of static sections, the portfolio simulates a real Mac environment where users interact with apps, windows, and a responsive dock.",
            "Each major section—projects, resume, contact, terminal, photos, and blog—is represented as an app that opens in its own draggable window.",
            "Windows support real OS-like behavior including focus management, layered z-indexing, close/minimize actions, and smooth transitions.",
            "The Apple-style dock features hover magnification and physics-inspired animations, creating a premium, native-like user experience.",
            "Built with React using reusable components and higher-order patterns to manage shared window logic and interactions.",
            "GSAP powers fluid animations such as onboarding transitions, dock motion, and window interactions, adding depth and polish.",
            "Tailwind CSS is used for fast, responsive, and consistent UI styling across the entire desktop interface.",
            "Global app and window state is managed using Zustand, enabling tracking of active apps, open windows, and their screen positions.",
            "The project uses a structured data-driven model, allowing easy customization by editing configuration objects for apps, icons, and content.",
            "The portfolio demonstrates advanced frontend engineering skills, complex state management, and thoughtful UX design.",
            "It serves as both a personal brand statement and a technical showcase, helping stand out for modern frontend and full-stack roles.",
          ],
        },
        {
          id: 2,
          name: "macOS.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://mac-os-portfolio-1xjn.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "macOS-Style Interactive Developer Portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/VedSher/MacOs_Portfolio",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
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
      imageUrl: "/images/vaidik.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/vaidik-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/vaidik-3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me2.png",
      description: [
        "Hey! I'm Vaidik 👋 — a full-stack developer passionate about building real-world products, not just demo apps.",
        "I work mainly with JavaScript, React, Next.js, Node.js, and MongoDB, and I’m actively diving into Python and GenAI to stay ahead of the curve.",
        "I care deeply about clean architecture, smooth UI/UX, and writing code that scales — both technically and professionally.",
        "Beyond coding, I'm ambitious about growth: strong career, financial independence, leadership, and building something meaningful that creates impact.",
        "You'll usually find me juggling DSA practice, projects, internships, late-night debugging sessions, and the constant drive to level up 🚀",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
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
  name: "Trash",
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
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, isMinimized: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };