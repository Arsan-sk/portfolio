import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Award, ExternalLink } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  url?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Web Development Certification",
    issuer: "Udemy",
    date: "2023",
    category: "Web Development",
    image: "https://placehold.co/400x300/2563eb/ffffff?text=Web+Dev",
    url: "#"
  },
  {
    id: 2,
    title: "React Advanced Course",
    issuer: "Coursera",
    date: "2022",
    category: "Frontend",
    image: "https://placehold.co/400x300/8b5cf6/ffffff?text=React",
    url: "#"
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    issuer: "Google",
    date: "2022",
    category: "Design",
    image: "https://placehold.co/400x300/ec4899/ffffff?text=UI/UX",
    url: "#"
  },
  {
    id: 4,
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "2021",
    category: "Programming",
    image: "https://placehold.co/400x300/ca8a04/ffffff?text=JavaScript",
    url: "#"
  },
  {
    id: 5,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2021",
    category: "Web Development",
    image: "https://placehold.co/400x300/2563eb/ffffff?text=Responsive",
    url: "#"
  },
  {
    id: 6,
    title: "TypeScript Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    category: "Programming",
    image: "https://placehold.co/400x300/3b82f6/ffffff?text=TypeScript",
    url: "#"
  }
];

const Certifications = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [filteredCertificates, setFilteredCertificates] = useState<Certificate[]>(certificates);

  const categories = ["All", ...Array.from(new Set(certificates.map(cert => cert.category)))];

  // Update filtered certificates when category changes
  useEffect(() => {
    const filtered = activeCategory === "All"
      ? certificates
      : certificates.filter(cert => cert.category === activeCategory);

    setFilteredCertificates(filtered);
  }, [activeCategory]);

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
      id="certifications"
      className={`py-12 md:py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Certifications
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional certifications and courses I've completed to enhance my skills and knowledge.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-4 gap-2 justify-start md:justify-center mb-8 md:mb-12 hide-scrollbar px-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center whitespace-nowrap ${activeCategory === category
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                : theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {activeCategory === category && <Filter className="mr-1 h-3 w-3" />}
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory} // Force re-render when category changes
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
          >
            {filteredCertificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                className={`rounded-lg overflow-hidden border transition-all duration-300 group ${theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-900/20'
                  : 'bg-white border-gray-200 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20'
                  }`}
                variants={itemVariants}
                layout
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="py-1 px-3 rounded-full text-xs bg-gray-900/80 text-white">
                      {certificate.category}
                    </div>
                    <div className="py-1 px-3 rounded-full text-xs bg-gray-900/80 text-white">
                      {certificate.date}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className={`text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                      }`}>
                      {certificate.title}
                    </h3>
                    <Award className="h-5 w-5 text-purple-500 flex-shrink-0" />
                  </div>

                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    Issued by <span className="text-blue-400">{certificate.issuer}</span>
                  </p>

                  {certificate.url && (
                    <button
                      onClick={() => {
                        if (certificate.url === "#") {
                          navigate("/updating-soon");
                        } else {
                          window.open(certificate.url, "_blank", "noopener,noreferrer");
                        }
                      }}
                      className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 cursor-pointer bg-transparent border-none p-0"
                    >
                      View Certificate <ExternalLink className="ml-1 h-3 w-3" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state message */}
        {filteredCertificates.length === 0 && (
          <div className={`text-center py-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            <Award className="mx-auto h-12 w-12 mb-4 opacity-50" />
            <h3 className="text-xl font-medium mb-2">No certificates in this category</h3>
            <p>Please select another category to view certificates.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;