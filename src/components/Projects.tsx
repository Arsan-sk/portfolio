import { useState, useRef, useEffect } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
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
    github: "https://github.com/Arsan-sk/My_Portfolio",
    demo: "https://your-portfolio.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website with interactive elements and smooth animations.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Arsan-sk",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    github: "https://github.com/Arsan-sk",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts using advanced language models.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Arsan-sk",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart functionality, and secure checkout.",
    image: "https://images.unsplash.com/photo-1629397886781-50dff21a14ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Arsan-sk",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
  }, []);

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

  return (
    <section id="projects" className="py-24 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-opacity duration-300 ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <button 
              onClick={() => scrollTo('left')}
              className="p-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 transition-opacity duration-300 ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <button 
              onClick={() => scrollTo('right')}
              className="p-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Scrollable project container */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory"
          >
            {projectsData.map((project, index) => (
              <div 
                key={project.id}
                className="min-w-[330px] sm:min-w-[400px] lg:min-w-[500px] bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group border border-gray-700 flex-shrink-0 snap-center transform hover:-translate-y-2"
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      transform: `translateX(${(scrollPosition * 0.05 * (index + 1)) % 20}px)`,
                    }}
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
                  
                  {/* Floating tag that shows on hover */}
                  <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-1">
                    Featured
                  </div>
                </div>
                
                <div className="p-6 relative z-10 bg-gradient-to-b from-gray-900 to-gray-800">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                    <div className="flex space-x-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
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
                          className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
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
              </div>
            ))}
          </div>
          
          {/* Scroll progress indicator */}
          <div className="mt-8 max-w-md mx-auto h-1 bg-gray-700 rounded-full overflow-hidden">
            {scrollContainerRef.current && (
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                style={{ 
                  width: scrollContainerRef.current.scrollWidth <= scrollContainerRef.current.clientWidth 
                    ? '100%' 
                    : `${(scrollPosition / (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth)) * 100}%` 
                }}
              ></div>
            )}
          </div>
        </div>

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
