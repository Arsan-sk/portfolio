
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/Arsan-sk" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/yourusername" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/yourusername" },
    { icon: <Instagram size={20} />, url: "https://instagram.com/yourusername" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
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
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-purple-500 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <button
            onClick={scrollToTop}
            className="mb-8 px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-purple-500 transition-colors duration-300"
          >
            Back to Top
          </button>
          
          <p className="text-gray-500 text-sm text-center">
            © {year} Shaikh Mohd Arsan. All rights reserved. <br />
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
