import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas to full screen
      const handleResize = () => {
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initParticles();
        }
      };

      // Handle window resize
      window.addEventListener('resize', handleResize);
      handleResize();

      // Create particles
      const initParticles = () => {
        try {
          const particleCount = Math.min(Math.floor(window.innerWidth / 20), 100);
          particlesRef.current = [];

          for (let i = 0; i < particleCount; i++) {
            const size = Math.random() * 3 + 1;
            particlesRef.current.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              size,
              speedX: (Math.random() - 0.5) * 0.5,
              speedY: (Math.random() - 0.5) * 0.5,
              color: getRandomColor(0.5),
            });
          }
        } catch (error) {
          console.error("Error initializing particles:", error);
          setHasError(true);
        }
      };

      // Animation loop
      const animate = () => {
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Update and draw particles
          particlesRef.current.forEach((particle, index) => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off edges
            if (particle.x > canvas.width || particle.x < 0) {
              particle.speedX *= -1;
            }
            if (particle.y > canvas.height || particle.y < 0) {
              particle.speedY *= -1;
            }
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            // Connect particles with lines if they're close enough
            connectParticles(particle, index);
          });
          
          animationFrameRef.current = requestAnimationFrame(animate);
        } catch (error) {
          console.error("Error in animation loop:", error);
          setHasError(true);
          cancelAnimationFrame(animationFrameRef.current);
        }
      };

      // Connect particles with lines
      const connectParticles = (particle: Particle, index: number) => {
        const distance = 100;
        
        for (let i = index + 1; i < particlesRef.current.length; i++) {
          const dx = particle.x - particlesRef.current[i].x;
          const dy = particle.y - particlesRef.current[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < distance) {
            // The closer they are, the more opaque the line
            const opacity = 1 - (dist / distance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 115, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.stroke();
          }
        }
      };

      // Helper function to get random color
      const getRandomColor = (opacity: number = 1) => {
        const colors = [
          `rgba(99, 102, 241, ${opacity})`,  // Indigo
          `rgba(139, 92, 246, ${opacity})`,  // Purple
          `rgba(236, 72, 153, ${opacity})`,  // Pink
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      };

      // Start animation
      initParticles();
      animate();

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameRef.current);
      };
    } catch (error) {
      console.error("Error in Particles component:", error);
      setHasError(true);
      return () => {};
    }
  }, []);

  if (hasError) {
    // Return an empty div instead of the canvas if we had an error
    return <div className="absolute inset-0 -z-10 bg-transparent"></div>;
  }

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 -z-10 bg-transparent pointer-events-none"
    />
  );
};

export default Particles; 