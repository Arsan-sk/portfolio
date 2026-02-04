export const HERO_ROLES = [
  "Frontend Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Creative Thinker"
];

export const PROFILE_LINKS = {
  github: "https://github.com/Arsan-sk",
  linkedin: "https://linkedin.com/in/arsan-shaikh",
  email: "mailto:arsanshaikh@example.com" // Replace with actual email if known or keep placeholder
};

// Centralized Projects Data - Edit this array to update projects across the site
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
  date?: string;
  status?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern Web Portfolio",
    description:
      "A dynamic personal portfolio built with React and Tailwind CSS, featuring responsive design and interactive elements.",
    image: "/images/project1.jpg",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    category: "Web Development",
    github: "https://github.com/Arsan-sk/",
    demo: "https://arsansk.vercel.app",
    date: "Oct 2024",
    status: "Completed"
  },
  {
    id: 2,
    title: "Focus Tube",
    description: "A feature for youtube to make our concentration on learning and help to avoid distraction",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    github: "https://github.com/Arsan-sk/FocusTube",
    demo: "https://focusxtube.vercel.app",
    date: "Sep 2025",
    status: "In Progress"
  },
  {
    id: 4,
    title: "QuizKTC App",
    description: "A comprehensive quiz app that covers a wide range of topics, including history, science, math, and more.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    tags: ["Node.js", "Postgres", "Tailwind CSS", "TypeScript"],
    category: "AI",
    github: "https://github.com/Arsan-sk/QuizKnightChallenge",
    demo: "https://demo.com",
    date: "July 2023",
    status: "Runner Up"
  },
  {
    id: 6,
    title: "Blockchain - Vote Rakshak",
    description: "A secure cryptocurrency wallet with multi-currency support, transaction history, and real-time market data.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    tags: ["React Native", "Web3.js", "Ethereum", "Bitcoin"],
    category: "Blockchain",
    github: "https://github.com/Arsan-sk/VoteRakshak",
    demo: "https://vote-rakshak-sk.vercel.app/",
    date: "Nov 2025",
    status: "Beta"
  },
  {
    id: 11,
    title: "Learning Management System - For Club",
    description: "A Learning Management System for clubs that helps them manage their education flow between members and Lead Teachers",
    image: "/images/LMS.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    category: "Web Development",
    github: "https://github.com/Arsan-sk/LMS",
    demo: "https://elite-lms-xi.vercel.app/",
    date: "Oct 2025",
    status: "Live",
    featured: true
  },
  {
    id: 12,
    title: "ShareBite",
    description: "A food donation platform connecting surplus food providers with those in need, reducing waste and combating hunger through community collaboration.",
    image: "/images/projects/sharebite.png",
    tags: ["Node.js", "Postgres", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Arsan-sk/ShareBite",
    demo: "https://share-bite-liard.vercel.app/",
    category: "Web Development",
    date: "Dec 2025",
    status: "Live",
    featured: true
  },
  {
    id: 13,
    title: "WeddingHall Portfolio",
    description: "A modern and elegant portfolio website for a wedding hall, showcasing its features, services, and gallery to attract potential clients.",
    image: "/images/projects/weddingHall.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Arsan-sk/WeddingHallPortfolio",
    demo: "https://wedding-hall-venue.vercel.app/",
    category: "Web Development",
    date: "Jan 2026",
    status: "Live",
    featured: true
  },
  {
    id: 14,
    title: "SegSenseAI",
    description: "A web application that helps users segregate and manage waste effectively, promoting recycling and environmental sustainability.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Arsan-sk/SegSenseAI",
    demo: "https://seg-sense.vercel.app/",
    category: "Web Development",
    date: "Feb 2026",
    status: "Live"
  }
];

// Get featured projects - filter projects with featured: true
export const getFeaturedProjects = () => projectsData.filter(project => project.featured);
