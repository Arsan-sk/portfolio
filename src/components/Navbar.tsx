import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? theme === 'dark'
          ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-white/90 backdrop-blur-md py-2 shadow-lg"
        : "bg-transparent py-4 md:py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent relative z-50"
          >
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "experience", "certifications", "projects", "blog", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors capitalize hover:text-purple-500 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}
              >
                {item}
              </button>
            ))}

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle with Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4 z-50">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-100'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-opacity-95 backdrop-blur-sm transition-all duration-300 md:hidden flex flex-col justify-center items-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            } ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
        >
          <div className="flex flex-col space-y-6 text-center w-full px-8">
            {["home", "about", "experience", "certifications", "projects", "blog", "contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-2xl font-medium capitalize transition-all duration-300 transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  } ${theme === 'dark' ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
