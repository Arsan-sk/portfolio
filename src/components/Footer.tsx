import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/Arsan-sk" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/" },
    { icon: <Twitter size={20} />, url: "https://x.com/Shaikh_Arsan09" },
    { icon: <Instagram size={20} />, url: "https://instagram.com/@arsan_sk_09" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className={`border-t ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Shaikh Mohd Arsan
          </h3>
          
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-purple-500'
                    : 'bg-gray-200 text-gray-600 hover:text-white hover:bg-purple-500'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <button
            onClick={scrollToTop}
            className={`mb-8 px-4 py-2 rounded-lg text-sm transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-purple-500'
                : 'bg-gray-200 text-gray-600 hover:text-white hover:bg-purple-500'
            }`}
          >
            Back to Top
          </button>
          
          <p className={`text-sm text-center ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            © {year} Shaikh Mohd Arsan. All rights reserved. <br />
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
