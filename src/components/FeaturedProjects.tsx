import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Algorithm 8.0 Hackathon Project",
    description: "VR application with hand gesture recognition for controlling virtual interfaces. Won 2nd prize at the national hackathon among 45 teams.",
    image: "https://placehold.co/800x400/a855f7/ffffff?text=VR+Gesture+Control",
    tags: ["React", "Three.js", "TensorFlow.js", "WebXR"],
    github: "https://github.com/Arsan-sk/vr-gesture-control",
    demo: "https://vr-gesture-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website with interactive elements, dark/light theme, and smooth animations - my digital showcase for projects and skills.",
    image: "https://placehold.co/800x400/8b5cf6/ffffff?text=Portfolio+Website",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Arsan-sk/My_Portfolio",
    demo: "https://your-portfolio.com",
    featured: true
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts using advanced language models.",
    image: "https://placehold.co/800x400/ec4899/ffffff?text=AI+Content+Generator",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Arsan-sk/ai-content-generator",
    demo: "https://ai-generator-demo.vercel.app",
    featured: true
  }
];

const FeaturedProjects = () => {
  const { theme } = useTheme();
  
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-10">
        <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          <span className="border-b-4 border-purple-500 pb-1">Featured Projects</span>
        </h3>
        <a 
          href="#projects" 
          className={`flex items-center text-sm font-medium transition-colors ${
            theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
          }`}
        >
          View All Projects <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
      
      <div className="space-y-16">
        {featuredProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            className={`grid md:grid-cols-12 gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={`md:col-span-7 relative overflow-hidden rounded-xl group ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="absolute inset-0 bg-purple-500 mix-blend-multiply opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/30 backdrop-blur-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                        theme === 'dark' 
                          ? 'bg-white/10 text-white hover:bg-white/20' 
                          : 'bg-gray-800/30 text-white hover:bg-gray-800/50'
                      }`}
                      aria-label="GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                        theme === 'dark' 
                          ? 'bg-white/10 text-white hover:bg-white/20' 
                          : 'bg-gray-800/30 text-white hover:bg-gray-800/50'
                      }`}
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className={`md:col-span-5 ${index % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}>
              <h4 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {project.title}
              </h4>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className={`flex ${index % 2 !== 0 ? 'justify-end' : ''}`}>
                <a 
                  href={project.demo || project.github || '#projects'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects; 