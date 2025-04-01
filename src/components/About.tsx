import { useEffect, useRef } from "react";
import { User, Code, Palette, Cpu, BrainCircuit } from "lucide-react";

const skills = [
  { name: "HTML/CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React", percentage: 80 },
  { name: "TypeScript", percentage: 75 },
  { name: "UI/UX Design", percentage: 70 },
  { name: "Node.js", percentage: 65 },
  { name: "AI Tools & Prompting", percentage: 85 },
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
];

const About = () => {
  const bioRef = useRef(null);

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
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" ref={bioRef} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <User className="mr-3 text-purple-500 animate-pulse" /> Who I Am
            </h3>
            <p className="text-gray-300 mb-6 transition-all duration-500 opacity-0 translate-y-4">
              I am a technology enthusiast, problem solver, and lifelong learner, passionate about exploring the intersection of AI, cybersecurity, full-stack development, and algorithmic problem-solving. With a strong foundation in both software development and system analysis, I focus on building efficient, scalable, and secure digital solutions.
            </p>
            <p className="text-gray-300 mb-6 transition-all duration-500 opacity-0 translate-y-4">
              My journey in tech started with a curiosity for how things work, evolving into a deeper understanding of software engineering, machine learning, and cybersecurity. Over time, I have worked on projects ranging from AI-driven applications to secure web platforms, always striving to combine logic, efficiency, and creativity in my work.
            </p>
            <p className="text-gray-300 mb-6 transition-all duration-500 opacity-0 translate-y-4">
              I enjoy tackling complex challenges, whether it's optimizing algorithms, improving system security, or developing intelligent applications. I strongly believe in continuous learning and keeping up with the latest advancements to refine my skills and contribute to meaningful projects.
            </p>
            <p className="text-gray-300 mb-6 transition-all duration-500 opacity-0 translate-y-4">
              Beyond coding, I actively research emerging technologies, contribute to open-source, and share insights through technical discussions and writing. My approach is rooted in critical thinking, structured problem-solving, and a desire to innovate responsibly.
            </p>
            <p className="text-purple-500 transition-all duration-500 opacity-0 translate-y-4 italic border-l-4 border-purple-500 pl-4">
              "Superposition of ideas, collapsing into action when observed. ✨"
            </p>
            <p className="text-gray-300 transition-all duration-500 opacity-0 translate-y-4 font-medium">
              <span className="text-purple-400">📌</span> Always learning, always building—one challenge at a time. Let's create something impactful. <span className="text-blue-400 animate-bounce inline-block">🚀</span>
            </p>
          </div>

          <div data-aos="fade-left" className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-purple-500">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="skill-bar h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    style={{ width: "0%" }}
                    data-width={`${skill.percentage}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-12 text-center">
            Services I Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700 hover:border-purple-500 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
