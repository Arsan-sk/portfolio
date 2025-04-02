import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-300 ${
        theme === "dark" 
          ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" 
          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
      }`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="animate-spin-slow" />
      ) : (
        <Moon size={20} />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 