import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };
  
  const sections = ["home", "about", "education", "experience", "skills", "projects", "contact"];
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-morocco-dark/80 border-b border-border"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <span className="text-lg font-bold bg-gradient-to-r from-morocco-blue to-morocco-gold dark:from-morocco-gold dark:to-morocco-orange bg-clip-text text-transparent">
            ABDELMOUGHITH
          </span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          <motion.nav 
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-6"
          >
            {sections.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                variants={itemVariants}
                className="text-sm font-medium hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors capitalize"
              >
                {section}
              </motion.a>
            ))}
          </motion.nav>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <a href="https://github.com/ABDOOMARI11" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-morocco-dark dark:text-morocco-beige hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/abdelmoughith-el-aoumari" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-morocco-dark dark:text-morocco-beige hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors" />
            </a>
            <a href="mailto:abdelmoughithelaoumari@gmail.com">
              <Mail className="w-5 h-5 text-morocco-dark dark:text-morocco-beige hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors" />
            </a>
            <ThemeToggle />
          </motion.div>
        </div>
        
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md bg-secondary text-secondary-foreground"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-2 hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors capitalize"
              >
                {section}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <a href="https://github.com/ABDOOMARI11" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abdelmoughith-el-aoumari" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:abdelmoughithelaoumari@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
