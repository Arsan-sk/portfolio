import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Debug log
    console.log("Index component mounted");
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log("Loading completed");
      
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore and get in touch.",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    console.log("Rendering loading state");
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <h2 className="text-2xl font-bold text-white mt-4">Loading...</h2>
        </div>
      </div>
    );
  }

  console.log("Rendering main content");
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
