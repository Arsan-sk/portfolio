import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      // Add cursor tracking
      const updateMousePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        // Check if we're on a clickable element
        const target = e.target as HTMLElement;
        const isHoverable = target.tagName === 'A' || 
                             target.tagName === 'BUTTON' || 
                             target.closest('a') || 
                             target.closest('button') ||
                             target.classList.contains('hoverable');
        
        setIsHovering(isHoverable);
        setIsVisible(true);
      };

      // Hide cursor when it leaves the window
      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      // Show cursor when it enters the window
      const handleMouseEnter = () => {
        setIsVisible(true);
      };

      // Handle mouse down/up for click effect
      const handleMouseDown = () => {
        setIsClicking(true);
      };

      const handleMouseUp = () => {
        setIsClicking(false);
      };

      // Hide default cursor
      if (document && document.body) {
        document.body.style.cursor = 'none';
      }

      // Add event listeners
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mouseenter', handleMouseEnter);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      // Cleanup event listeners
      return () => {
        if (document && document.body) {
          document.body.style.cursor = 'auto';
        }
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('mouseenter', handleMouseEnter);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    } catch (error) {
      console.error("Error in CustomCursor component:", error);
      // Reset cursor if something goes wrong
      if (document && document.body) {
        document.body.style.cursor = 'auto';
      }
    }
  }, []);

  // Don't render the cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  try {
    return (
      <>
        {/* Main cursor - follows mouse precisely */}
        <div
          className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: isHovering ? '50px' : '10px',
            height: isHovering ? '50px' : '10px',
            backgroundColor: isClicking ? '#ec4899' : '#fff',
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.2s, height 0.2s, background-color 0.2s',
          }}
        />

        {/* Trailing cursor */}
        <div
          className={`fixed pointer-events-none z-40 rounded-full bg-white/20 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '30px',
            height: '30px',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.1s, opacity 0.3s',
            transitionTimingFunction: 'ease-out',
          }}
        />
      </>
    );
  } catch (error) {
    console.error("Error rendering CustomCursor:", error);
    return null;
  }
};

export default CustomCursor; 