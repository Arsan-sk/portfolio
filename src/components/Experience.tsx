import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Code, Briefcase, Calendar, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Experience = () => {
  const { theme } = useTheme();
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [expandedExp, setExpandedExp] = useState<number | null>(null); // For mobile click

  const experiences = [
    {
      title: "Algorithm 8.0 National Hackathon",
      role: "1st Runner Up (2nd Prize)",
      description: "Participated in a 32 Hour Long National Level Hackathon organised by Anjuman-e-Islam Kalsekar Technical Campus and Won 2nd Prize among 45 other teams. Created VR applications with hand gesture recognition systems.",
      shortDescription: "Won 2nd Prize in a 32-hour National Hackathon building VR apps with gesture control.",
      highlights: [
        "Implemented a Hand Gesture Recognizer",
        "Created VR Games playable using Hand Gestures",
        "Developed Virtual Control Interfaces (VCI)",
        "Won prizes worth ₹1,00,000+ INR"
      ],
      timeline: "01/02/2024 - 02/02/2024",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/50",
      textColor: "text-yellow-600 dark:text-yellow-400"
    },
    {
      title: "Frontend Development",
      role: "Developer",
      description: "Built responsive and interactive web applications using modern technologies like React, TypeScript, and Tailwind CSS. Focused on performance optimization and creating seamless user experiences.",
      shortDescription: "Building responsive web apps with React, TypeScript, and Tailwind CSS.",
      highlights: [
        "Developed reusable component libraries",
        "Optimized application performance",
        "Implemented responsive designs",
        "Integrated RESTful APIs"
      ],
      timeline: "2023 - Present",
      icon: <Code className="h-6 w-6 text-purple-500" />,
      color: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/50",
      textColor: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Portfolio Website",
      role: "Frontend Developer",
      description: "Designed and developed a personal portfolio website using modern frontend technologies including React, TypeScript, and Tailwind CSS. Implemented dark mode, animations, and responsive layout.",
      shortDescription: "Designed and built a personal portfolio with modern tech stack and animations.",
      highlights: [
        "Implemented Dark/Light mode",
        "Used Framer Motion for animations",
        "Responsive Mobile-First Design",
        "Deployed on Vercel"
      ],
      timeline: "2022 - Present",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    // {
    //   title: "Open Source Contributions",
    //   role: "Contributor",
    //   description: "Actively contributed to open source projects, improving documentation and adding new features. Collaborated with developers worldwide to solve issues and enhance software quality.",
    //   shortDescription: "Contributing to open source projects and collaborating with the community.",
    //   highlights: [
    //     "Fixed bugs in popular repositories",
    //     "Improved documentation",
    //     "Added new features",
    //     "Participated in Hacktoberfest"
    //   ],
    //   timeline: "2021 - Present",
    //   icon: <Briefcase className="h-6 w-6 text-green-500" />,
    //   color: "from-green-500/20 to-emerald-500/20",
    //   borderColor: "border-green-500/50",
    //   textColor: "text-green-600 dark:text-green-400"
    // },
    {
      title: "Web Development",
      role: "Freelancer",
      description: "Worked on various client projects, developing websites and web applications tailored to specific business needs. Managed client requirements and delivered projects on time.",
      shortDescription: "Freelance web development for various client projects.",
      highlights: [
        "Delivered 5+ client projects",
        "Custom WordPress themes",
        "E-commerce integration",
        "SEO optimization"
      ],
      timeline: "2021 - 2022",
      icon: <Code className="h-6 w-6 text-pink-500" />,
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/50",
      textColor: "text-pink-600 dark:text-pink-400"
    },
    {
      title: "Technical Workshops",
      role: "Participant",
      description: "Attended technical workshops to enhance skills in web development, UI/UX design, and programming concepts. Networked with industry professionals and learned best practices.",
      shortDescription: "Attending workshops to upskill in web dev and UI/UX.",
      highlights: [
        "Web Development Bootcamp",
        "UI/UX Design Masterclass",
        "Cloud Computing Workshop",
        "Cybersecurity Basics"
      ],
      timeline: "2020 - Present",
      icon: <Award className="h-6 w-6 text-orange-500" />,
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/50",
      textColor: "text-orange-600 dark:text-orange-400"
    }
  ];

  const handleInteraction = (index: number) => {
    // On mobile, toggle expansion. On desktop, this might be redundant if hover works, 
    // but good for touch devices.
    if (window.innerWidth < 768) {
      setExpandedExp(expandedExp === index ? null : index);
    }
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
      id="experience"
      className={`py-12 md:py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            My Experience
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            A timeline of my professional journey and notable experiences that have shaped my skills and perspective.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 h-[320px] group cursor-pointer ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                } ${expandedExp === index ? 'ring-2 ring-purple-500' : ''}`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredExp(index)}
              onMouseLeave={() => setHoveredExp(null)}
              onClick={() => handleInteraction(index)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="p-6 h-full flex flex-col relative z-10">
                {/* Header: Icon & Date */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg bg-opacity-10 bg-current ${exp.textColor}`}>
                    {exp.icon}
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                    {exp.timeline}
                  </span>
                </div>

                {/* Title & Role */}
                <div className="mb-4">
                  <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {exp.title}
                  </h3>
                  <p className={`text-sm font-medium ${exp.textColor}`}>
                    {exp.role}
                  </p>
                </div>

                {/* Content Area */}
                <div className="relative flex-grow overflow-hidden">
                  {/* Default View: Short Description */}
                  <div className={`transition-all duration-300 absolute inset-0 ${(hoveredExp === index || expandedExp === index) ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
                    }`}>
                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center text-purple-500 text-sm font-medium">
                      Read More <ChevronDown className="ml-1 h-4 w-4" />
                    </div>
                  </div>

                  {/* Hover/Expanded View: Full Details */}
                  <div className={`transition-all duration-300 absolute inset-0 overflow-y-auto pr-2 scrollbar-thin ${(hoveredExp === index || expandedExp === index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.description}
                    </p>
                    {exp.highlights && (
                      <div className="space-y-2">
                        <h4 className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                          Key Highlights
                        </h4>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-xs">
                              <span className={`mr-2 mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${exp.textColor.split(' ')[0].replace('text-', 'bg-')}`}></span>
                              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;