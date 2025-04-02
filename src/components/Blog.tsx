import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new project with React and TypeScript to build type-safe applications.",
    date: "October 15, 2023",
    readTime: "5 min read",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=React+TypeScript",
    category: "Development",
    slug: "getting-started-with-react-typescript"
  },
  {
    id: 2,
    title: "Designing UI Components with Tailwind CSS",
    excerpt: "Explore how to create reusable UI components using Tailwind CSS utility classes.",
    date: "September 22, 2023",
    readTime: "6 min read",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Tailwind+CSS",
    category: "Design",
    slug: "designing-ui-components-tailwind-css"
  },
  {
    id: 3,
    title: "The Future of AI in Web Development",
    excerpt: "Discover how AI tools are changing the landscape of web development and what it means for developers.",
    date: "August 10, 2023",
    readTime: "8 min read",
    image: "https://placehold.co/600x400/ec4899/ffffff?text=AI+Web+Dev",
    category: "AI",
    slug: "future-of-ai-web-development"
  }
];

const Blog = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      id="blog" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-blue-50'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            My Blog
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Thoughts, insights, and tutorials on web development, design, and emerging technologies.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:shadow-purple-500/20 border border-gray-700' 
                  : 'bg-white hover:shadow-purple-500/30 border border-gray-200'
              }`}
              variants={itemVariants}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500 text-xs font-medium text-white">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-xs mb-4">
                  <span className={`flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </span>
                  <span className="mx-2">•</span>
                  <span className={`flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {post.title}
                </h3>
                
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </p>
                
                <a 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center text-purple-500 hover:text-purple-600 transition-colors"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
              theme === 'dark' 
                ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700' 
                : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 hover:shadow-md'
            }`}
          >
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog; 