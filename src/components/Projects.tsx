import { useState, useRef, useEffect } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Filter } from "lucide-react";
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
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website with interactive elements and smooth animations.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    github: "https://github.com/Arsan-sk",
    demo: "https://demo.com",
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
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts using advanced language models.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
    category: "AI",
    github: "https://github.com/Arsan-sk",
    demo: "https://demo.com",
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
  },
  {
    id: 7,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with customizable charts, filters, and real-time updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["D3.js", "React", "GraphQL", "Material UI"],
    category: "Data Science",
    github: "https://github.com/Arsan-sk/data-viz",
    demo: "https://data-dashboard-demo.vercel.app",
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
  },
  {
    id: 9,
    title: "Augmented Reality Game",
    description: "Mobile AR game that transforms your surroundings into an interactive playground with gesture controls.",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Unity", "ARKit", "ARCore", "C#"],
    category: "AR/VR",
    github: "https://github.com/Arsan-sk/ar-playground",
    demo: "https://ar-game-demo.io",
  },
  {
    id: 10,
    title: "Machine Learning Model API",
    description: "API service exposing machine learning models for image recognition, natural language processing, and recommendation systems.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Python", "TensorFlow", "Flask", "Docker"],
    category: "Machine Learning",
    github: "https://github.com/Arsan-sk/ml-api-service",
    demo: "https://ml-models-api.herokuapp.com",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [displayMode, setDisplayMode] = useState<'featured' | 'all'>('featured');

  const categories = ["All", ...Array.from(new Set(projectsData.map(project => project.category)))];
  
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    // Reset scroll position when category changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
      setScrollPosition(0);
      setShowLeftArrow(false);
      
      // Check if we need to show right arrow
      setTimeout(() => {
        if (scrollContainerRef.current) {
          setShowRightArrow(
            scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
          );
        }
      }, 100);
    }
  };

  // Handle display mode change
  const handleDisplayModeChange = (mode: 'featured' | 'all') => {
    setDisplayMode(mode);
    // Reset category when switching display modes
    if (mode === 'all') {
      setActiveCategory("All");
      
      // Reset arrows after DOM updates
      setTimeout(() => {
        if (scrollContainerRef.current) {
          setShowLeftArrow(false);
          setShowRightArrow(
            scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
          );
        }
      }, 100);
    }
  };

  // Handle scroll for parallax effects
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
      
      // Update arrow visibility
      setShowLeftArrow(scrollContainerRef.current.scrollLeft > 0);
      setShowRightArrow(
        scrollContainerRef.current.scrollLeft < 
        scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      
      // Check initial arrow visibility
      setShowRightArrow(
        scrollContainer.scrollWidth > scrollContainer.clientWidth
      );
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeCategory]);

  // Reset scroll position when category changes - this is now handled by handleCategoryChange
  // but we'll keep a simplified version here for safety
  useEffect(() => {
    if (scrollContainerRef.current) {
      setScrollPosition(0);
      setShowLeftArrow(false);
    }
  }, [activeCategory]);

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    
    const targetPosition = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: targetPosition,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
      className={`py-24 overflow-hidden section-transition ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
                onClick={() => handleDisplayModeChange('featured')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  displayMode === 'featured' 
                    ? 'bg-purple-500 text-white shadow' 
                    : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Featured
              </button>
              <button
                onClick={() => handleDisplayModeChange('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  displayMode === 'all' 
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
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                    activeCategory === category 
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
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className={`rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group ${
                    theme === 'dark'
                      ? 'bg-gray-900 hover:shadow-purple-500/20 border border-gray-700'
                      : 'bg-white hover:shadow-purple-500/20 border border-gray-200'
                  }`}
                  onMouseEnter={() => setActiveProject(project)}
                  onMouseLeave={() => setActiveProject(null)}
                  variants={itemVariants}
                >
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        console.log(`Project image failed to load: ${project.image}`);
                        const target = e.target as HTMLImageElement;
                        // Create a colored SVG placeholder based on project id
                        const colors = ['6366f1', '8b5cf6', 'ec4899', '06b6d4', '10b981'];
                        const color = colors[project.id % colors.length];
                        target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23${color}"/><text x="50%" y="50%" font-family="Arial" font-size="48" fill="%23FFF" text-anchor="middle" dominant-baseline="middle">${project.title}</text></svg>`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    
                    {/* Category tag */}
                    <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className={`p-6 relative z-10 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-b from-gray-900 to-gray-800'
                      : 'bg-gradient-to-b from-white to-gray-50'
                  }`}>
                    <h3 className={`text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`text-xs px-3 py-1 rounded-full border ${
                            theme === 'dark'
                              ? 'bg-gray-800 text-gray-300 border-gray-700'
                              : 'bg-gray-100 text-gray-700 border-gray-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`flex justify-between items-center pt-4 border-t ${
                      theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <div className="flex space-x-2">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`p-2 transition-colors ${
                              theme === 'dark' ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                            }`}
                            aria-label="GitHub repository"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`p-2 transition-colors ${
                              theme === 'dark' ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                            }`}
                            aria-label="Live demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                      
                      <a 
                        href={project.demo || project.github || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors group-hover:underline"
                      >
                        View Details
                      </a>
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
