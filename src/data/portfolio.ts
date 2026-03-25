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
    status: "live"
  },
  {
    id: 3,
    title: "QuizKTC App",
    description: "A comprehensive quiz app that covers a wide range of topics, including history, science, math, and more.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    tags: ["Node.js", "Postgres", "Tailwind CSS", "TypeScript"],
    category: "Web Development",
    github: "https://github.com/Arsan-sk/QuizKnightChallenge",
    demo: "https://demo.com",
    date: "July 2023",
    status: "Runner Up"
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    title: "SegSenseAI",
    description: "A web application that helps users segregate and manage waste effectively, promoting recycling and environmental sustainability.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Arsan-sk/SegSenseAI",
    demo: "https://seg-sense.vercel.app/",
    category: "AI/ML",
    date: "Aug 2025",
    status: "Live"
  },
  {
    id: 9,
    title: "AI-Powered Celebirity Lookalike Finder",
    description: "An AI-powered application that helps users find celebrity lookalikes based on their photos.",
    image: "/images/projects/clebMatch.png",
    tags: ["Streamlit", "AI"],
    github: "https://github.com/Arsan-sk/CelebrityLook_A_Like",
    demo: "https://celeb-match.streamlit.app/",
    category: "AI/ML",
    date: "Mar 2026",
    status: "Live"
  },
  {
    id: 10,
    title: "AI-Powered Breast Cancer Predictor",
    description: "An AI-powered application that helps predict the likelihood of breast cancer based on medical data.",
    image: "/images/projects/breastCancer.png",
    tags: ["Streamlit", "AI"],
    github: "https://github.com/Arsan-sk/Breast_Cancer_Predictor",
    demo: "https://breastcancerpredictor-bv9uqbfqns7anvty8pvgku.streamlit.app//",
    category: "AI/ML",
    date: "Dec 2025",
    status: "Live"
  },
  {
    id: 11,
    title: "AI-Powered Car Condition Predictor",
    description: "An AI-powered application that helps predict the likelihood of car condition issues based on diagnostic data.",
    image: "/images/projects/carCondition.png",
    tags: ["Streamlit", "AI"],
    github: "https://github.com/Arsan-sk/Car_Condition_Predictor",
    demo: "https://carconditionpredictor-vw7kdcfxrdnuwslkaz9bns.streamlit.app/",
    category: "AI/ML",
    date: "Nov 2025",
    status: "Live"
  },
  {
    id: 12,
    title: "AI-Powered Student Grade Predictor",
    description: "An AI-powered application that helps predict student grades based on their performance data.",
    image: "/images/projects/findGrade.png",
    tags: ["Streamlit", "AI"],
    github: "https://github.com/Arsan-sk/Student_Grade_Prediction",
    demo: "https://studentgradeprediction-cha7zotfkuhsnzchms3vjs.streamlit.app/",
    category: "AI/ML",
    date: "Oct 2025",
    status: "Live"
  }
];

// Get featured projects - filter projects with featured: true
export const getFeaturedProjects = () => projectsData.filter(project => project.featured);
