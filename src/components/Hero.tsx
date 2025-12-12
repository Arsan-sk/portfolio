import { useState, useEffect, useRef } from "react";
import { ArrowDown, MousePointerClick } from "lucide-react";
import Particles from "./ui/Particles";
import ResumeButton from "./ui/ResumeButton";
import { useTheme } from "@/context/ThemeContext";
import { HERO_ROLES } from "@/data/portfolio";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const profileRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();



  const textOptions = HERO_ROLES;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isTyping) {
      const currentText = textOptions[currentTextIndex];

      if (typedText.length < currentText.length) {
        interval = setInterval(() => {
          setTypedText(currentText.substring(0, typedText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        interval = setInterval(() => {
          setTimeout(() => {
            setIsTyping(false);
          }, 1500);
        }, 100);
      }
    } else {
      if (typedText.length > 0) {
        interval = setInterval(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentTextIndex((currentTextIndex + 1) % textOptions.length);
      }
    }

    return () => clearInterval(interval);
  }, [typedText, isTyping, currentTextIndex, textOptions]);

  // 3D tilt effect for profile picture
  useEffect(() => {
    const profile = profileRef.current;
    if (!profile) return;

    // Check if device is mobile/tablet
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = profile.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;

      profile.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      profile.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    profile.addEventListener('mousemove', handleMouseMove);
    profile.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      profile.removeEventListener('mousemove', handleMouseMove);
      profile.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center relative overflow-hidden py-20 ${theme === 'dark'
        ? 'bg-gradient-to-b from-gray-900 to-gray-800'
        : 'bg-gradient-to-b from-blue-50 to-white'
        }`}
    >
      {/* Particles background */}
      <Particles />

      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between z-10">
        <div className="lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp ${theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
            Hello, I'm <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent block sm:inline">Shaikh Mohd Arsan</span>
            {/* <span className="block text-lg font-semibold text-gray-500 mt-2">Frontend & Web Developer — React, TypeScript, UI/UX</span> */}
          </h1>

          <h2 className={`text-2xl md:text-3xl mb-8 h-12 animate-fadeInUp animation-delay-300 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
            I am a <span className="text-purple-500 font-semibold">{typedText}<span className="animate-blink">|</span></span>
          </h2>

          <p className={`max-w-2xl mx-auto lg:mx-0 mb-10 text-lg animate-fadeInUp animation-delay-600 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
            I create stunning digital experiences with clean code and user-centered design. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animation-delay-900 w-full sm:w-auto">
            <button
              onClick={scrollToAbout}
              className="min-h-[48px] px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 group w-full sm:w-auto"
            >
              Explore My Work
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            <a
              href="#contact"
              className={`min-h-[48px] px-8 py-4 border-2 border-purple-500 font-medium rounded-full hover:bg-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group flex items-center justify-center w-full sm:w-auto ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>

            {/* Resume Button */}
            <div className="w-full sm:w-auto flex justify-center">
              <ResumeButton />
            </div>
            {/* Mobile arrow: placed in the column under buttons on small screens */}
            <div className="sm:hidden flex justify-center">
              <button onClick={scrollToAbout} className={`mt-2 p-2 rounded-full hover:bg-opacity-30 transition-all ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-purple-500/20 hover:bg-purple-500/40 text-purple-700'}`}>
                <ArrowDown className={theme === 'dark' ? 'text-white' : 'text-purple-700'} />
              </button>
            </div>
          </div>

          <div className={`mt-16 hidden sm:flex items-center justify-center lg:justify-start animate-fadeInUp animation-delay-1200 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
            <span className="mr-4">Scroll to explore</span>
            <MousePointerClick className="text-purple-500 animate-bounce" size={20} />
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <div
            ref={profileRef}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 transition-all duration-300 animate-scaleIn"
          >
            {/* Profile image with glowing border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 blur-xl animate-pulse-glow"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient-flow"></div>

            {/* Background for transparent image */}
            <div className={`absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full z-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}></div>

            <img
              src="/images/AS.jpg"
              alt="Shaikh Mohd Arsan"
              className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover border-2 border-white/20 shadow-2xl z-10"
              onError={(e) => {
                console.log("Profile image failed to load, using fallback");
                // Create a base64 SVG as a fallback
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23${theme === 'dark' ? '333' : 'f5f5f5'}" /><text x="50%" y="50%" font-family="Arial" font-size="36" fill="%23${theme === 'dark' ? 'FFF' : '333'}" text-anchor="middle" dominant-baseline="middle">Arsan</text></svg>`;
              }}
            />

            {/* Orbital rings */}
            <div className="absolute inset-0 border-4 border-dashed border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
            <div className="absolute inset-12 border-2 border-dashed border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>

      {/* absolute mobile arrow removed; arrow is now placed below ResumeButton inside the buttons column for mobile */}
    </section>
  );
};

export default Hero;
