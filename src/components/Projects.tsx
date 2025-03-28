
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

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
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, and payment processing.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website with interactive elements and smooth animations.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-800">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group border border-gray-700"
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4`}
                >
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full hover:bg-purple-500 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full hover:bg-purple-500 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github className="mr-2" size={20} />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
