export const myProjects = [
  {
    id: 1,
    title: "Campus Connect App",
    description:
      "College event information system with event registration, search, and responsive design.",
    subDescription: [
      "Developed an event management platform for college activities and programs.",
      "Implemented event registration, search, and filtering features using React.js.",
      "Used Tailwind CSS and Framer Motion for responsive and animated UI.",
      "Deployed the app on Vercel for fast and reliable performance.",
    ],
    href: "https://campus-connect-hazel-eight.vercel.app",
    logo: "",
    image: "/assets/projects/campus.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Framer Motion", path: "/assets/logos/framer.svg" },
      { id: 4, name: "Vercel", path: "/assets/logos/vercel.svg" },
    ],
  },
  {
    id: 2,
    title: "E-Furniture",
    description: "Scalable e-commerce platform with secure login, dashboard, and Firebase backend.",
    subDescription: [
      "Built with React for a seamless shopping experience.",
      "Integrated Firebase for secure auth and real-time database (Firestore).",
      "Custom user dashboard for order tracking and management.",
      "Fully responsive design optimized for mobile and desktop.",
    ],
    href: "https://hudson-furnishings-chi.vercel.app",
    logo: "",
    image: "/assets/projects/furniture.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Firebase", path: "/assets/logos/firebase.svg" },
    ],
  },
  {
    id: 3,
    title: "Blox",
    description:
      "AI-supported professional branding system for optimized SEO portfolios, analytics, and branding tools.",
    subDescription: [
      "Startup project enabling fast creation of professional portfolios and résumés.",
      "AI-powered features including skill verification, keyword analysis, and dynamic templates.",
      "SEO optimization, performance analytics, and publishing capabilities.",
      "Built with Java backend and NestJS microservices for scalability.",
    ],
    href: "https://bloxplatform.org/",
    logo: "",
    image: "/assets/projects/blox.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Java", path: "/assets/logos/java.svg" },
      { id: 3, name: "NestJS", path: "/assets/logos/nestjs.svg" },
      { id: 4, name: "AI", path: "/assets/logos/ai.svg" },
    ],
  },
  {
    id: 4,
    title: "MEDBLOCK",
    description: "Blockchain-Secured National EMR Infrastructure for managing and sharing medical records securely.",
    subDescription: [
      "Proposed a decentralized EMR system to improve healthcare data security and interoperability.",
      "Designed role-based access control for patients, doctors, and healthcare institutions.",
      "Ensured data privacy and immutability using blockchain-backed verification.",
      "Focused on scalability and adoption within national healthcare systems.",
    ],
    href: "https://medblock-app.web.app/",
    logo: "",
    image: "/assets/projects/medblock.png",
    tags: [
      { id: 1, name: "Blockchain", path: "/assets/logos/blockchain.svg" },
      { id: 2, name: "Healthcare IT", path: "/assets/logos/healthcare.svg" },
      { id: 3, name: "Security", path: "/assets/logos/security.svg" },
      { id: 4, name: "System Design", path: "/assets/logos/system-design.svg" },
    ],
  },
  {
    id: 5,
    title: "Eventping",
    description:
      "Event management platform (like Luma) for organizing events, meetings, reminders, and check-ins.",
    subDescription: [
      "Supports event creation, guest/participant management, and check-in features.",
      "Sends automated reminders via integrations with WhatsApp, Telegram, Discord, and Gmail.",
      "Multi-platform notification system for better attendance and engagement.",
      "Modern, user-friendly interface for organizers and attendees.",
    ],
    href: "https://eventping.xyz",
    logo: "",
    image: "/assets/projects/eventping.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 3, name: "Integrations", path: "/assets/logos/api.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 6,
    title: "Talentforge",
    description:
      "AI-powered platform for resume scoring, applicant tracking, and one-click job postings.",
    subDescription: [
      "Uses AI (Hugging Face models) to analyze and score resumes with bias detection.",
      "Streamlines hiring with applicant tracking system and video interview support.",
      "Enables hirers to post jobs to platforms like LinkedIn and Upwork with one click.",
      "Built with Next.js frontend and Java backend for robust performance.",
    ],
    href: "https://talentforge.cc",
    logo: "",
    image: "/assets/projects/talentforge.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Java", path: "/assets/logos/java.svg" },
      { id: 3, name: "Hugging Face", path: "/assets/logos/huggingface.svg" },
      { id: 4, name: "AI", path: "/assets/logos/ai.svg" },
    ],
  },
  {
    id: 7,
    title: "Envvy",
    description:
      "Secure 'GitHub for envs' — manage environment variables with Git-like commands but enhanced security.",
    subDescription: [
      "CLI tool built with Node.js for easy env profile creation, sharing, and management.",
      "Next.js frontend dashboard for visual control and team collaboration.",
      "Focus on secure storage and encrypted handling of sensitive variables.",
      "Commands similar to Git for versioning and syncing environments.",
    ],
    href: "https://envii.pxxl.pro/",
    logo: "",
    image: "/assets/projects/envvy.png",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 3, name: "CLI", path: "/assets/logos/terminal.svg" },
      { id: 4, name: "Security", path: "/assets/logos/security.svg" },
    ],
  },

];

export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Projects', href: '#projects' },
  { id: 4, name: 'Resume', href: '#resume' },
  { id: 5, name: 'Contact', href: '#contact' },
];

export const resumeFilePath = "/Thomas%20Resume.pdf";

export const workExperiences = [
  {
    id: 1,
    name: 'Thomas Abas',
    job: 'Founder & Lead Engineer',
    date: '2025 - Present',
    title: 'Blox Platform',
    contents: [
      "Leading the development of an AI-powered professional branding ecosystem for automated portfolios and résumés.",
      "Architected the integration of LLMs for intelligent skill-gap analysis and SEO optimization.",
      "Developed a custom domain publishing system and high-analytics dashboard for professional insights.",
      "Scaling the platform to handle enterprise-level bulk generation and white-labeling solutions."
    ],
    icon: '/assets/logos/ai.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Thomas Abas',
    job: 'Co-Founder & Lead Engineer',
    date: '2025 - Present',
    title: 'Medblock Startup',
    contents: [
      "Pioneering a blockchain-secured national EMR infrastructure for decentralized medical record management.",
      "Designing Ethereum-based smart contracts for role-based access control and patient data privacy.",
      "Implementing high-performance interoperability layers for seamless healthcare data sharing.",
      "Focusing on building and scaling secure, immutable systems for national healthcare adoption."
    ],
    icon: '/assets/logos/blockchain.svg',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Thomas Abas',
    job: 'Full Stack Developer',
    date: '2023 - 2024',
    title: 'Freelance & Open Source',
    contents: [
      "Built high-performance web applications using React, Node.js, and modern CSS frameworks.",
      "Focused on creating immersive user experiences and scalable backends for diverse clients.",
      "Developed several open-source tools contributing to the developer community ecosystem."
    ],
    icon: '/assets/framer.svg',
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'Thomas Abas',
    job: 'Frontend Engineer',
    date: '2022 - 2023',
    title: 'Tech Startup Solution',
    contents: [
      "Specialized in building responsive, accessible, and fast UI components using React and TypeScript.",
      "Collaborated with designers to implement pixel-perfect designs and complex Framer Motion animations.",
      "Optimized frontend performance reducing overall application load times by 40%."
    ],
    icon: '/assets/react.svg',
    animation: 'victory',
  },
];

export const experiences = workExperiences; // Alias for compatibility

export const clientReviews = [
  {
    id: 1,
    name: 'James Wilson',
    position: 'CEO at TechFlow',
    img: 'assets/review1.png',
    review: 'Thomas is an exceptional developer. His attention to detail in the UI and his ability to solve complex backend problems is truly impressive.',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'Product Manager',
    img: 'assets/review2.png',
    review: 'Working with Thomas was a breeze. He delivered our project ahead of schedule and the 3D interactive elements he added really wowed our users.',
  },
];

export const mySocials = [
  {
    id: 1,
    name: 'GitHub',
    icon: '/assets/logos/github.svg',
    url: 'https://github.com/ThomasAbas',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: '/assets/socials/linkedIn.svg',
    url: 'https://linkedin.com/in/thomasabas',
  },
  {
    id: 3,
    name: 'X',
    icon: '/assets/twitter.svg', // Will use react-icons if this fails
    url: 'https://x.com/Thomas_TheGuy',
  },
];
