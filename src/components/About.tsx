
import { useEffect } from "react";
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-skill");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".skill-bar").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <User className="mr-3 text-purple-500" /> Who I Am
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate web developer and designer with a strong
              background in creating interactive digital experiences. With [X]
              years of experience, I specialize in building modern web
              applications that are both beautiful and functional.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in tech began when I [your story here]. Since then,
              I've worked on various projects ranging from [types of projects]
              for [types of clients/companies].
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me [your hobbies/interests].
              These activities help me maintain a creative mindset and bring
              fresh perspectives to my work.
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
