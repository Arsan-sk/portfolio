import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Code, Briefcase, Medal, Calendar, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Experience = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([0, 1, 2]);
  const itemsPerPage = 3;

  const experiences = [
    {
      title: "Algorithm 8.0 National Hackathon",
      role: "1st Runner Up (2nd Prize)",
      description: "Participated in a 32 Hour Long National Level Hackathon organised by Anjuman-e-Islam Kalsekar Technical Campus and Won 2nd Prize among 45 other teams. Created VR applications with hand gesture recognition systems.",
      highlights: [
        "Implemented a Hand Gesture Recognizer",
        "Created VR Games playable using Hand Gestures",
        "Developed Virtual Control Interfaces (VCI)",
        "Won prizes worth ₹1,00,000+ INR"
      ],
      timeline: "01/02/2024 - 02/02/2024",
      icon: <Trophy className="h-5 w-5 text-yellow-400" />,
      color: "border-yellow-500/30",
      dotColor: "bg-yellow-500",
      titleColor: "text-yellow-400",
    },
    {
      title: "Frontend Development",
      role: "Developer",
      description: "Built responsive and interactive web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
      timeline: "2023 - Present",
      icon: <Code className="h-5 w-5 text-purple-400" />,
      color: "border-purple-500/30",
      dotColor: "bg-purple-500",
      titleColor: "text-purple-400",
    },
    {
      title: "Portfolio Website",
      role: "Frontend Developer",
      description: "Designed and developed a personal portfolio website using modern frontend technologies including React, TypeScript, and Tailwind CSS.",
      timeline: "2022 - Present",
      icon: <Code className="h-5 w-5 text-blue-400" />,
      color: "border-blue-500/30",
      dotColor: "bg-blue-500",
      titleColor: "text-blue-400",
    },
    {
      title: "Open Source Contributions",
      role: "Contributor",
      description: "Actively contributed to open source projects, improving documentation and adding new features.",
      timeline: "2021 - Present",
      icon: <Briefcase className="h-5 w-5 text-green-400" />,
      color: "border-green-500/30",
      dotColor: "bg-green-500",
      titleColor: "text-green-400",
    },
    {
      title: "Web Development",
      role: "Freelancer",
      description: "Worked on various client projects, developing websites and web applications tailored to specific business needs.",
      timeline: "2021 - 2022",
      icon: <Code className="h-5 w-5 text-pink-400" />,
      color: "border-pink-500/30",
      dotColor: "bg-pink-500",
      titleColor: "text-pink-400",
    },
    {
      title: "Technical Workshops",
      role: "Participant",
      description: "Attended technical workshops to enhance skills in web development, UI/UX design, and programming concepts.",
      timeline: "2020 - Present",
      icon: <Award className="h-5 w-5 text-orange-400" />,
      color: "border-orange-500/30",
      dotColor: "bg-orange-500",
      titleColor: "text-orange-400",
    }
  ];

  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  // Change page and update visible experiences
  const changePage = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
      const startIndex = newPage * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, experiences.length);
      setVisibleExperiences(Array.from({ length: endIndex - startIndex }, (_, i) => startIndex + i));
    }
  };

  // Initialize visible experiences
  useEffect(() => {
    changePage(0);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="experience" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500`}>
            My Experience
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            A timeline of my professional journey and notable experiences that have shaped my skills and perspective.
          </p>
        </div>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`${!visibleExperiences.includes(index) ? 'hidden' : ''}`}
                variants={itemVariants}
              >
                <div className={`relative pl-6 border-l-2 h-full ${exp.color}`}>
                  <div className={`absolute w-6 h-6 rounded-full ${exp.dotColor} left-[-13px] top-0 flex items-center justify-center`}>
                    {exp.icon}
                  </div>
                  
                  <div className={`rounded-lg p-6 border transition-all shadow-lg h-full
                    ${theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 hover:border-gray-600 hover:shadow-purple-900/20'
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-purple-300/20'
                    }
                  `}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className={`text-xl font-bold ${exp.titleColor}`}>{exp.title}</h4>
                      <span className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.timeline}
                      </span>
                    </div>
                    
                    <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4
                      ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}
                    `}>
                      {exp.role}
                    </span>
                    
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      {exp.description}
                    </p>

                    {exp.highlights && (
                      <ul className="mt-3 space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className={`flex items-start ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className="text-purple-500 mr-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-2">
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 0}
                className={`p-2 rounded-full ${
                  currentPage === 0 
                    ? `${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} cursor-not-allowed` 
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                } transition-colors`}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>
              
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => changePage(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentPage 
                      ? 'bg-purple-500 w-6' 
                      : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
              
              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className={`p-2 rounded-full ${
                  currentPage === totalPages - 1 
                    ? `${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} cursor-not-allowed` 
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                } transition-colors`}
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience; 