import { useEffect, useRef, useState } from "react";
import { User, Code, Palette, Cpu, BrainCircuit, Filter, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "HTML/CSS",
    level: 90,
    category: "Frontend",
    icon: "🌐",
    color: "from-red-500 to-orange-500",
    description: "Expert in creating responsive layouts and modern CSS techniques including Grid, Flexbox, and animations."
  },
  {
    name: "JavaScript",
    level: 85,
    category: "Frontend",
    icon: "📜",
    color: "from-yellow-500 to-amber-500",
    description: "Strong proficiency in ES6+, asynchronous programming, and working with browser APIs."
  },
  {
    name: "React",
    level: 80,
    category: "Frontend",
    icon: "⚛️",
    color: "from-cyan-500 to-blue-500",
    description: "Building dynamic UIs with React hooks, context API, and integrating with state management libraries."
  },
  {
    name: "TypeScript",
    level: 75,
    category: "Languages",
    icon: "📘",
    color: "from-blue-500 to-indigo-500",
    description: "Using type definitions to create safer, more maintainable code with better developer experience."
  },
  {
    name: "UI/UX Design",
    level: 70,
    category: "Design",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    description: "Designing intuitive user interfaces with a focus on accessibility and user experience."
  },
  {
    name: "Node.js",
    level: 65,
    category: "Backend",
    icon: "🖥️",
    color: "from-green-500 to-emerald-500",
    description: "Building server-side applications and APIs with Express and other Node.js frameworks."
  },
  {
    name: "AI Tools & Prompting",
    level: 85,
    category: "AI",
    icon: "🤖",
    color: "from-violet-500 to-purple-500",
    description: "Leveraging AI platforms for development, content creation, and problem-solving with effective prompt engineering."
  },
  {
    name: "Python",
    level: 70,
    category: "Languages",
    icon: "🐍",
    color: "from-blue-400 to-green-400",
    description: "Data analysis, automation, and backend development with Python and its extensive library ecosystem."
  },
  {
    name: "DevOps",
    level: 60,
    category: "Operations",
    icon: "⚙️",
    color: "from-gray-500 to-slate-500",
    description: "Implementing CI/CD pipelines, containerization, and deployment automation for faster development cycles."
  },
];

const services = [
  {
    icon: <Code className="h-10 w-10 text-purple-500" />,
    title: "Web Development",
    description:
      "Building responsive and performant web applications using modern technologies and best practices.",
  },
  {
    icon: <Palette className="h-10 w-10 text-blue-500" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-green-500" />,
    title: "AI-Powered Development",
    description:
      "Leveraging cutting-edge AI tools to accelerate development workflows, create innovative solutions, and solve complex problems.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-pink-500" />,
    title: "Technical Solutions",
    description:
      "Providing technical consultancy and solutions to complex problems with effective approaches.",
  },
  {
    icon: <Code className="h-10 w-10 text-orange-500" />,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications with React Native and other modern frameworks.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-teal-500" />,
    title: "Data Analysis",
    description:
      "Extracting meaningful insights from data to drive decision-making and business strategy.",
  },
];

const About = () => {
  const { theme } = useTheme();
  const bioRef = useRef(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];
  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const width = el.dataset.width;
            el.style.setProperty('--width', width);
            el.classList.add('animate-skill');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".skill-bar").forEach((el) => {
      observer.observe(el);
    });

    // Add fade-in effect for bio paragraphs
    const bioObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const paragraphs = entry.target.querySelectorAll('p');
            paragraphs.forEach((p, index) => {
              setTimeout(() => {
                p.classList.add('opacity-100');
                p.classList.remove('opacity-0', 'translate-y-4');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bioRef.current) {
      bioObserver.observe(bioRef.current);
    }

    return () => {
      observer.disconnect();
      bioObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div data-aos="fade-right" ref={bioRef} className="space-y-6">
            <h3 className={`text-2xl font-bold mb-6 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              <User className="mr-3 text-purple-500 animate-pulse" /> Who I Am
            </h3>
            <p className={`mb-6 transition-all duration-500 opacity-0 translate-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I am a technology enthusiast, problem solver, and lifelong learner, passionate about exploring the intersection of AI, cybersecurity, full-stack development, and algorithmic problem-solving. With a strong foundation in both software development and system analysis, I focus on building efficient, scalable, and secure digital solutions.
            </p>
            <p className={`mb-6 transition-all duration-500 opacity-0 translate-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              My journey in tech started with a curiosity for how things work, evolving into a deeper understanding of software engineering, machine learning, and cybersecurity. Over time, I have worked on projects ranging from AI-driven applications to secure web platforms, always striving to combine logic, efficiency, and creativity in my work.
            </p>
            <p className={`mb-6 transition-all duration-500 opacity-0 translate-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I enjoy tackling complex challenges, whether it's optimizing algorithms, improving system security, or developing intelligent applications. I strongly believe in continuous learning and keeping up with the latest advancements to refine my skills and contribute to meaningful projects.
            </p>
            <p className={`mb-6 transition-all duration-500 opacity-0 translate-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Beyond coding, I actively research emerging technologies, contribute to open-source, and share insights through technical discussions and writing. My approach is rooted in critical thinking, structured problem-solving, and a desire to innovate responsibly.
            </p>
            <p className="text-purple-500 transition-all duration-500 opacity-0 translate-y-4 italic border-l-4 border-purple-500 pl-4">
              "Superposition of ideas, collapsing into action when observed. ✨"
            </p>
            <p className={`transition-all duration-500 opacity-0 translate-y-4 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="text-purple-400">📌</span> Always learning, always building—one challenge at a time. Let's create something impactful. <span className="text-blue-400 animate-bounce inline-block">🚀</span>
            </p>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30 animate-pulse-glow"></div>
            <div className={`relative rounded-lg p-8 border ${theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-white border-gray-200'
              }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                <span className="h-8 w-1 bg-purple-500 mr-3"></span>My Journey
              </h3>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-purple-500/30">
                  <div className="absolute w-4 h-4 rounded-full bg-purple-500 left-[-9px] top-0"></div>
                  <h4 className="text-lg font-semibold text-purple-400">Bachelor of Engineering</h4>
                  <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Electronics and Computer Science</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Currently Pursuing</p>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute w-4 h-4 rounded-full bg-blue-500 left-[-9px] top-0"></div>
                  <h4 className="text-lg font-semibold text-blue-400">High School</h4>
                  <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Completed with 79.17%</p>
                </div>

                <div className="relative pl-8 border-l-2 border-pink-500/30">
                  <div className="absolute w-4 h-4 rounded-full bg-pink-500 left-[-9px] top-0"></div>
                  <h4 className="text-lg font-semibold text-pink-400">Secondary School</h4>
                  <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Completed with 87%</p>
                </div>

                {/* Scroll indicator */}
                <div className="text-center pt-4 opacity-70 hover:opacity-100 transition-opacity">
                  <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>More experiences below</p>
                  <ArrowDown className="mx-auto text-purple-500 animate-bounce h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              My <span className="text-purple-500">Skills</span>
            </h3>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Hover over the cards to learn more about my technical expertise and proficiency levels.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[44px] px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center ${activeCategory === category
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
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className="skill-card bg-transparent perspective-1000 h-48 sm:h-64 w-full cursor-pointer group"
              >
                <div className={`relative preserve-3d w-full h-full duration-700 ${flippedCards.has(index) ? 'rotate-y-180' : ''} group-hover:rotate-y-180`}>
                  {/* Front of card */}
                  <div className={`skill-card-front absolute inset-0 rounded-xl p-4 sm:p-6 border flex flex-col items-center justify-center backface-hidden ${theme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                    }`}>
                    <div className={`text-3xl sm:text-5xl mb-2 sm:mb-4 bg-gradient-to-br ${skill.color} rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center`}>
                      {skill.icon}
                    </div>
                    <h4 className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{skill.name}</h4>
                    <div className={`w-full h-1.5 sm:h-2 rounded-full overflow-hidden mt-1 sm:mt-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className={`text-xs sm:text-sm mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}% Proficiency</p>
                  </div>

                  {/* Back of card */}
                  <div className={`skill-card-back absolute inset-0 rounded-xl p-4 sm:p-6 border flex flex-col justify-between backface-hidden rotate-y-180 ${theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-100 border-gray-200'
                    }`}>
                    <div className="overflow-y-auto">
                      <div className="flex justify-between items-center mb-2 sm:mb-4">
                        <h4 className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{skill.name}</h4>
                        <span className={`text-xl sm:text-2xl`}>{skill.icon}</span>
                      </div>
                      <p className={`text-xs sm:text-sm mb-2 sm:mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{skill.description}</p>
                    </div>
                    <div>
                      <span className={`text-xs inline-block px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-700'
                        }`}>{skill.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-24 relative">
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Services I <span className="text-purple-500">Offer</span>
            </h3>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Specialized expertise to help bring your ideas to life with quality and innovation.
            </p>
          </div>

          {/* Light effects */}
          <div className="absolute top-1/2 left-0 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 right-0 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          {/* Horizontal scrollable services */}
          <div
            ref={servicesRef}
            className="overflow-x-auto snap-x snap-mandatory pb-12"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex w-max px-4 space-x-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="w-[85vw] sm:w-[45vw] lg:w-[30vw] snap-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-6 sm:p-8 rounded-lg transition-all duration-300 border h-full relative overflow-hidden ${theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 hover:shadow-purple-500/20 hover:border-purple-500/50'
                    : 'bg-white border-gray-200 hover:shadow-purple-500/20 hover:border-purple-500/50'
                    } shadow-lg`}>

                    <div className="mb-4 sm:mb-6 relative z-10">
                      {service.icon}
                    </div>

                    <h4 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                      }`}>{service.title}</h4>

                    <p className={`text-sm sm:text-base relative z-10 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{service.description}</p>

                    {/* Simple hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
