
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="h-screen flex flex-col justify-center relative bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
          Hello, I'm <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Your Name</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-8 h-12">
          I am a <span className="text-purple-500 font-semibold">{typedText}<span className="animate-blink">|</span></span>
        </h2>
        
        <p className="text-gray-300 max-w-2xl mb-10 text-lg animate-fadeInUp animation-delay-300">
          I create stunning digital experiences with clean code and user-centered design. Let's build something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-600">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore My Work
          </button>
          
          <a 
            href="#contact"
            className="px-8 py-3 border-2 border-purple-500 text-white font-medium rounded-full hover:bg-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
          <ArrowDown className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
