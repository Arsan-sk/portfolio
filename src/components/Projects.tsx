import { useState, useRef, useEffect } from "react";
import { Github, ExternalLink, Filter, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import FeaturedProjects from "./FeaturedProjects";

type Project = {
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
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern Web Portfolio",
    description:
      "A dynamic personal portfolio built with React and Tailwind CSS, featuring responsive design and interactive elements.",
    image: "/images/project1.jpg",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    category: "Web Development",
    github: "https://github.com/Arsan-sk/My_Portfolio",
    demo: "https://your-portfolio.com",
    date: "Oct 2023",
    status: "Completed"
  },
  {
    id: 2,
    title: "Focus Tube",
    description: "A feature for youtubetomake our concentration on learning and help to avoid distraction",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    github: "https://github.com/Arsan-sk/FocusTube",
    demo: "https://focusxtube.vercel.app",
    date: "Sep 2023",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    category: "Mobile App",
    github: "https://github.com/Arsan-sk",
    demo: "https://demo.com",
    date: "Aug 2023",
    status: "Completed"
  },
  {
    id: 4,
    title: "QuizKTC App",
    description: "A comprehensive quiz app that covers a wide range of topics, including history, science, math, and more.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    tags: ["Node.js", "Postgress", "Tailwind CSS", "TypeScript"],
    category: "AI",
    github: "https://github.com/Arsan-sk/QuizKnightChallenge",
    demo: "https://demo.com",
    date: "July 2023",
    status: "Runner Up"
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart functionality, and secure checkout.",
    image: "https://images.unsplash.com/photo-1629397886781-50dff21a14ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    github: "https://github.com/Arsan-sk",
    demo: "https://demo.com",
    date: "June 2023",
    status: "Completed"
  },
  {
    id: 6,
    title: "Blockchain Wallet",
    description: "A secure cryptocurrency wallet with multi-currency support, transaction history, and real-time market data.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    tags: ["React Native", "Web3.js", "Ethereum", "Bitcoin"],
    category: "Blockchain",
    github: "https://github.com/Arsan-sk/crypto-wallet",
    demo: "https://crypto-wallet-demo.netlify.app",
    date: "May 2023",
    status: "Beta"
  },
  {
    id: 7,
    title: "Data Visualization",
    description: "Interactive dashboard for visualizing complex datasets with customizable charts, filters, and real-time updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["D3.js", "React", "GraphQL", "Material UI"],
    category: "Data Science",
    github: "https://github.com/Arsan-sk/data-viz",
    demo: "https://data-dashboard-demo.vercel.app",
    date: "Apr 2023",
    status: "Completed"
  },
  {
    id: 8,
    title: "IoT Home Automation",
    description: "Smart home control system connecting various IoT devices with mobile app interface and automated routines.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React Native", "MQTT", "Raspberry Pi", "Node.js"],
    category: "IoT",
    github: "https://github.com/Arsan-sk/smart-home",
    demo: "https://smart-home-demo.netlify.app",
    date: "Mar 2023",
    status: "Prototype"
  },
  {
    id: 9,
    title: "AR Game",
    description: "Mobile AR game that transforms your surroundings into an interactive playground with gesture controls.",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Unity", "ARKit", "ARCore", "C#"],
    category: "AR/VR",
    github: "https://github.com/Arsan-sk/ar-playground",
    demo: "https://ar-game-demo.io",
    date: "Feb 2023",
    status: "Completed"
  },
  {
    id: 10,
    title: "ML Model API",
    description: "API service exposing machine learning models for image recognition, natural language processing, and recommendation systems.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Python", "TensorFlow", "Flask", "Docker"],
    category: "Machine Learning",
    github: "https://github.com/Arsan-sk/ml-api-service",
    demo: "https://ml-models-api.herokuapp.com",
    date: "Jan 2023",
    status: "Live"
  },
  {
    id: 11,
    title: "Learning Management System - For Club",
    description: "A Learning Management System for clubs that helps them manage their education flow between members and Lead Teachers",
    image: "../public/projects/LMS.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    category: "Web Development",
    github: "https://github.com/Arsan-sk/LMS",
    demo: "https://elite-lms-xi.vercel.app/",
    date: "Dec 2023",
    status: "Live"
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [displayMode, setDisplayMode] = useState<'featured' | 'all'>('featured');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(projectsData.map(project => project.category)))];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="projects"
      className={`py-12 md:py-24 overflow-hidden section-transition ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            My <span className="text-purple-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills and passion for creating exceptional digital experiences.
          </p>

          {/* Display Mode Toggle */}
          <div className="flex justify-center mt-8 mb-6">
            <div className={`inline-flex rounded-lg p-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <button
                onClick={() => setDisplayMode('featured')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${displayMode === 'featured'
                  ? 'bg-purple-500 text-white shadow'
                  : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
              >
                Featured
              </button>
              <button
                onClick={() => setDisplayMode('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${displayMode === 'all'
                  ? 'bg-purple-500 text-white shadow'
                  : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
              >
                All Projects
              </button>
            </div>
          </div>

          {/* Only show category filters in "all" mode */}
          {displayMode === 'all' && (
            <div className="flex overflow-x-auto pb-4 gap-2 justify-start md:justify-center mt-8 hide-scrollbar px-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[44px] px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center whitespace-nowrap ${activeCategory === category
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                    : theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                >
                  {activeCategory === category && <Filter className="mr-1 h-3 w-3" />}
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {displayMode === 'featured' ? (
            <motion.div
              key="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FeaturedProjects />
            </motion.div>
          ) : (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2 sm:px-0"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 group h-[400px] ${theme === 'dark'
                    ? 'bg-gray-900 border border-gray-700'
                    : 'bg-white border border-gray-200'
                    }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const colors = ['6366f1', '8b5cf6', 'ec4899', '06b6d4', '10b981'];
                        const color = colors[project.id % colors.length];
                        target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23${color}"/><text x="50%" y="50%" font-family="Arial" font-size="48" fill="%23FFF" text-anchor="middle" dominant-baseline="middle">${project.title}</text></svg>`;
                      }}
                    />
                    <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/60' : 'bg-black/40'} transition-opacity duration-300 group-hover:opacity-90`}></div>
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 h-full flex flex-col p-6 text-white">
                    {/* Top Section: Category & Status */}
                    <div className="flex justify-between items-start mb-auto">
                      <span className="px-3 py-1 rounded-full bg-purple-500/80 backdrop-blur-sm text-xs font-medium">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${project.status === 'Completed' ? 'bg-green-500/80' :
                            project.status === 'In Progress' ? 'bg-yellow-500/80' :
                              'bg-blue-500/80'
                          }`}>
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Bottom Section: Title, Date, Description */}
                    <div className="mt-auto transform transition-transform duration-300 group-hover:-translate-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        {project.date && (
                          <span className="text-sm text-gray-300">{project.date}</span>
                        )}
                      </div>

                      {/* Short Description (Always Visible) */}
                      <p className="text-gray-300 line-clamp-2 mb-4 group-hover:hidden">
                        {project.description}
                      </p>

                      {/* Expanded Content (Visible on Hover) */}
                      <div className="hidden group-hover:block animate-fadeIn">
                        <p className="text-gray-200 mb-4 text-sm">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/20">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors text-sm font-medium"
                            >
                              <ExternalLink size={16} /> Live Demo
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition-colors text-sm font-medium backdrop-blur-sm"
                            >
                              <Github size={16} /> Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/Arsan-sk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <Github className="mr-2" size={20} />
            <span className="relative z-10">See More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
