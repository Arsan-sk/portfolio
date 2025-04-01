import { useState, useEffect, useRef } from "react";
import { ArrowDown, MousePointerClick } from "lucide-react";
import Particles from "./ui/Particles";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const profileRef = useRef<HTMLDivElement>(null);

  const textOptions = [
    "Frontend Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Creative Thinker"
  ];

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
      className="min-h-screen flex items-center relative bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden py-20"
    >
      {/* Particles background */}
      <Particles />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Hello, I'm <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Shaikh Mohd Arsan</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 h-12 animate-fadeInUp animation-delay-300">
            I am a <span className="text-purple-500 font-semibold">{typedText}<span className="animate-blink">|</span></span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10 text-lg animate-fadeInUp animation-delay-600">
            I create stunning digital experiences with clean code and user-centered design. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animation-delay-900">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              Explore My Work
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            
            <a 
              href="#contact"
              className="px-8 py-3 border-2 border-purple-500 text-white font-medium rounded-full hover:bg-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </div>

          <div className="mt-16 hidden sm:flex items-center justify-center lg:justify-start animate-fadeInUp animation-delay-1200">
            <span className="text-gray-400 mr-4">Scroll to explore</span>
            <MousePointerClick className="text-purple-500 animate-bounce" size={20} />
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div 
            ref={profileRef}
            className="relative w-64 h-64 sm:w-80 sm:h-80 transition-all duration-300 animate-scaleIn"
          >
            {/* Profile image with glowing border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 blur-xl animate-pulse-glow"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient-flow"></div>
            <img 
              src="/images/my_photo.jpg" 
              alt="Shaikh Mohd Arsan" 
              className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover border-2 border-white/20 shadow-2xl z-10"
              onError={(e) => {
                console.log("Profile image failed to load, using fallback");
                // Create a base64 SVG as a fallback
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23333"/><text x="50%" y="50%" font-family="Arial" font-size="36" fill="%23FFF" text-anchor="middle" dominant-baseline="middle">Arsan</text></svg>`;
              }}
            />
            
            {/* Orbital rings */}
            <div className="absolute inset-0 border-4 border-dashed border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
            <div className="absolute inset-12 border-2 border-dashed border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce sm:hidden">
        <button onClick={scrollToAbout} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
          <ArrowDown className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
