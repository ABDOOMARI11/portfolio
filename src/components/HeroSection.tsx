
import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
  
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 pattern-overlay z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-lg font-medium text-morocco-blue dark:text-morocco-gold mb-2"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Abdelmoughith <br />
              <span className="bg-gradient-to-r from-morocco-blue to-morocco-gold dark:from-morocco-gold dark:to-morocco-orange bg-clip-text text-transparent">
                El Aoumari
              </span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg mb-8 text-muted-foreground max-w-lg"
            >
              Full-stack developer specializing in React.js, Next.js, Laravel, PHP, and modern web technologies.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-morocco-blue text-white dark:bg-morocco-gold dark:text-morocco-dark rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Contact Me
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 border border-morocco-blue dark:border-morocco-gold text-morocco-blue dark:text-morocco-gold rounded-md font-medium hover:bg-morocco-blue/5 dark:hover:bg-morocco-gold/5 transition-all"
              >
                View Experience
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              delay: 0.5 
            }}
            className="relative flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-morocco-blue dark:border-morocco-gold">
              <img 
                src="/lovable-uploads/8baff5af-d089-49db-be2b-20082654af5f.png" 
                alt="Abdelmoughith El Aoumari" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-morocco-beige dark:bg-morocco-blue/20 translate-x-5 translate-y-5"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
