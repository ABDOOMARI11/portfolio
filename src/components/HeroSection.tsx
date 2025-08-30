import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// Import des icônes React Icons
import { FaReact, FaNodeJs, FaPython, FaPhp, FaJava, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiSpring, SiLaravel, SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiJavascript,SiDjango,SiSpringboot } from "react-icons/si";

// Données des technologies avec vraies icônes
const technologies = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Spring", icon: SiSpring, color: "#6DB33F" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "PHP", icon: FaPhp, color: "#777BB4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" }
];

// Composant TechCarousel
const TechCarousel = ({ itemVariants }: { itemVariants: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-défilement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= technologies.length - 5 ? 0 : prevIndex + 1
      );
    }, 2500); // Change toutes les 2.5 secondes
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      variants={itemVariants}
      className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 relative justify-center"
    >
      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Tech Stack:
        </span>
        
        {/* Container du carrousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: -currentIndex * 72 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            style={{ width: `${technologies.length * 72}px` }}
          >
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 3 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.3, 
                    y: -8,
                    rotate: [0, -5, 5, 0],
                    boxShadow: `0 10px 25px ${tech.color}40`
                  }}
                  className="flex-shrink-0 w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                  title={tech.name}
                >
                  <IconComponent 
                    className="text-2xl transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      color: tech.color,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                  />
                  
                  {/* Nom de la technologie au hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none"
                  >
                    {tech.name}
                  </motion.div>
                  
                  {/* Effet de glow au hover */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ 
                      background: `radial-gradient(circle, ${tech.color}, transparent)`
                    }}
                  />
                  
                  {/* Particule qui traverse l'icône */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "linear"
                    }}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${tech.color}30, transparent)`
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Indicateurs de progression */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(technologies.length / 5) }).map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 5) === index 
                    ? 'bg-morocco-blue dark:bg-morocco-gold w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentIndex(index * 5)}
              />
            ))}
          </div>
        </div>
        
        {/* Animation de particules flottantes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-40"
              style={{
                background: `linear-gradient(45deg, #1e40af, #f59e0b, #dc2626)`
              }}
              animate={{
                x: [0, 300, 600, 300, 0],
                y: [0, -30, 0, -20, 0],
                opacity: [0, 0.6, 0.8, 0.4, 0],
                scale: [0, 1, 1.5, 1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 80}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullName = "Abdelmoughith El Aoumari";
  
  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullName.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 120); // Adjust speed here (lower = faster)
      
      return () => clearTimeout(timer);
    } else {
      // Hide cursor after typing is complete
      const timer = setTimeout(() => {
        setShowCursor(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullName]);
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorTimer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.8
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden py-20">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-morocco-beige/20 dark:from-gray-900 dark:via-gray-800 dark:to-morocco-blue/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.morocco-blue/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.morocco-gold/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,theme(colors.morocco-orange/0.05),transparent_50%)]"></div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-morocco-blue/20 to-morocco-gold/20 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "-2s" }}
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-morocco-gold/15 to-morocco-orange/15 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "-1s" }}
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-morocco-orange/20 to-morocco-blue/20 rounded-full blur-xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Greeting */}
            <motion.div 
              variants={itemVariants} 
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="text-2xl"
              >
                👋
              </motion.div>
              <span className="text-lg font-medium text-morocco-blue dark:text-morocco-gold">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name with typing animation */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-morocco-blue via-morocco-gold to-morocco-orange bg-clip-text text-transparent">
                  {displayedText}
                  {showCursor && currentIndex <= fullName.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-morocco-blue dark:text-morocco-gold ml-1"
                    >
                      |
                    </motion.span>
                  )}
                </span>
              </h1>
            </motion.div>

            {/* Title/Role */}
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                <span className="inline-block">Full-Stack</span>{" "}
                <motion.span
                  className="inline-block bg-gradient-to-r from-morocco-blue to-morocco-gold bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                >
                  Developer
                </motion.span>
              </h2>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
            >
              Passionate about creating innovative web solutions with{" "}
              <span className="font-medium text-morocco-blue dark:text-morocco-gold">React.js</span>,{" "}
              <span className="font-medium text-morocco-blue dark:text-morocco-gold">Next.js</span>,{" "}
              <span className="font-medium text-morocco-blue dark:text-morocco-gold">Spring Boot</span>, and modern technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-morocco-blue to-morocco-blue/90 hover:from-morocco-blue/90 hover:to-morocco-blue text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
              
              <motion.a 
                href="#experience"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-morocco-gold text-morocco-blue dark:text-morocco-gold rounded-xl font-medium hover:bg-morocco-gold/10 dark:hover:bg-morocco-gold/5 transition-all duration-300 text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  View Experience
                  <motion.span
                    className="group-hover:translate-y-[-2px] transition-transform"
                  >
                    ↗
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>

            {/* Tech Stack Carousel */}
            <TechCarousel itemVariants={itemVariants} />
          </motion.div>
          
          {/* Profile Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-morocco-blue via-morocco-gold to-morocco-orange p-1"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-morocco-blue/10 to-morocco-gold/10">
                  <img 
                    src="/lovable-uploads/photo.jpg" 
                    alt="Abdelmoughith El Aoumari" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border-2 border-dashed border-morocco-blue/30 dark:border-morocco-gold/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border border-dotted border-morocco-gold/20 dark:border-morocco-orange/20 rounded-full"
              />

              {/* Background Blob */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -z-10 inset-0 bg-gradient-to-br from-morocco-blue/20 via-morocco-gold/20 to-morocco-orange/20 rounded-full blur-xl transform translate-x-4 translate-y-4"
              />

              {/* Floating Elements around image */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  x: [-5, 5, -5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-morocco-gold to-morocco-orange rounded-full shadow-lg"
              />
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  x: [5, -5, 5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: -1 }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-morocco-blue to-morocco-gold rounded-full shadow-lg"
              />
              <motion.div
                animate={{ 
                  y: [-15, 15, -15],
                  x: [-3, 3, -3]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: -0.5 }}
                className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-morocco-orange to-morocco-blue rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}