import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const ResumeButton: React.FC = () => {
  const resumePath = "/Resume/Shaikh_Mohd_Arsan_Resume.docx";

  return (
    <motion.a
      href={resumePath}
      download="Shaikh_Mohd_Arsan_Resume.docx"
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
      <Download className="mr-2 h-5 w-5" />
      <span className="relative z-10">Download Resume</span>
    </motion.a>
  );
};

export default ResumeButton; 