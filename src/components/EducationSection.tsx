import { motion } from "framer-motion";

export function EducationSection() {
  const educationData = [
    {
      institution: "Faculty of Sciences Semlalia of Marrakech",
      degree: "Master's",
      field: "Information Systems Engineering",
      period: "Ongoing",
      status: "current"
    },
    {
      institution: "Higher School of Technology of Safi",
      degree: "Professional Bachelor's",
      field: "Information Systems and Networks Engineering",
      period: "Oct 2023 - June 2024",
      status: "completed"
    },
    {
      institution: "Higher School of Technology of Safi",
      degree: "University Diploma of Technology (DUT) in Computer Science",
      field: "Option: Systems and Network Administration",
      period: "Sep 2021 - June 2023",
      status: "completed"
    },
    {
      institution: "Faculty of Science and Technology of Béni-Mellal",
      degree: "1st Year Program",
      field: "Mathematics - Computer Science - Physics - Chemistry",
      period: "Sep 2020 - June 2021",
      status: "completed"
    }
  ];

  // Sort by date (descending)
  educationData.sort((a, b) => {
    if (a.period === "Ongoing") return -1;
    if (b.period === "Ongoing") return 1;

    const aDateStr = a.period.split('-')[0].trim();
    const bDateStr = b.period.split('-')[0].trim();
    const aDate = new Date(aDateStr);
    const bDate = new Date(bDateStr);

    if (isNaN(aDate.getTime()) || isNaN(bDate.getTime())) {
      return 0;
    }

    return bDate.getTime() - aDate.getTime();
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: -30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 20,
        duration: 0.6
      }
    }
  };

  const timelineDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-secondary/30 via-secondary/50 to-secondary/70 dark:from-accent/20 dark:via-accent/30 dark:to-accent/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.morocco-blue/0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,theme(colors.morocco-gold/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.morocco-gold/0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,theme(colors.morocco-blue/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-title bg-gradient-to-r from-morocco-blue to-morocco-gold bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
              Academic Journey
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-morocco-blue to-morocco-gold mx-auto mt-3 sm:mt-4 rounded-full"
            />
          </div>
          
          {/* Mobile Layout - Vertical timeline */}
          <div className="lg:hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6 sm:space-y-8 relative"
            >
              {/* Mobile timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-morocco-blue via-morocco-gold to-morocco-blue dark:from-morocco-gold dark:via-morocco-blue dark:to-morocco-gold rounded-full shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-morocco-blue/50 to-morocco-gold/50 dark:from-morocco-gold/50 dark:to-morocco-blue/50 blur-sm rounded-full"></div>
              </div>

              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Mobile timeline dot */}
                  <motion.div
                    variants={timelineDotVariants}
                    className={`flex-shrink-0 mt-2 mr-4 z-20 ${
                      item.status === 'current' 
                        ? 'w-4 h-4 bg-gradient-to-br from-morocco-gold to-yellow-400 shadow-md shadow-morocco-gold/50' 
                        : 'w-3 h-3 bg-gradient-to-br from-morocco-blue to-blue-600 shadow-md shadow-morocco-blue/30'
                    } rounded-full border-2 border-white dark:border-gray-900 relative`}
                  >
                    {item.status === 'current' && (
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-morocco-gold rounded-full"
                      />
                    )}
                  </motion.div>

                  {/* Mobile content card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.01,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 group overflow-hidden ${
                      item.status === 'current' 
                        ? 'ring-1 ring-morocco-gold/30 shadow-morocco-gold/10' 
                        : 'hover:ring-1 hover:ring-morocco-blue/30'
                    }`}
                  >
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      item.status === 'current'
                        ? 'bg-gradient-to-br from-morocco-gold/5 to-yellow-400/5'
                        : 'bg-gradient-to-br from-morocco-blue/5 to-blue-600/5'
                    }`}></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-morocco-blue dark:group-hover:text-morocco-gold transition-colors duration-300 leading-tight">
                        {item.institution}
                      </h3>
                      <h4 className={`text-sm sm:text-base font-semibold mb-1 sm:mb-2 ${
                        item.status === 'current' 
                          ? 'text-morocco-gold' 
                          : 'text-morocco-blue dark:text-morocco-gold'
                      }`}>
                        {item.degree}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                        {item.field}
                      </p>
                      <p className={`text-xs font-medium px-2 py-1 rounded-md inline-block ${
                        item.status === 'current'
                          ? 'bg-morocco-gold/10 text-morocco-gold border border-morocco-gold/20'
                          : 'bg-morocco-blue/10 text-morocco-blue dark:bg-morocco-gold/10 dark:text-morocco-gold border border-morocco-blue/20 dark:border-morocco-gold/20'
                      }`}>
                        {item.period}
                      </p>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 ${
                      item.status === 'current' 
                        ? 'bg-gradient-to-bl from-morocco-gold/20 to-transparent' 
                        : 'bg-gradient-to-bl from-morocco-blue/20 to-transparent dark:from-morocco-gold/20'
                    } rounded-bl-full`}></div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Layout - Alternating timeline */}
          <div className="hidden lg:block relative">
            {/* Desktop timeline line */}
            <div className="absolute left-1/2 w-1 bg-gradient-to-b from-morocco-blue via-morocco-gold to-morocco-blue dark:from-morocco-gold dark:via-morocco-blue dark:to-morocco-gold h-full transform -translate-x-1/2 rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-morocco-blue/50 to-morocco-gold/50 dark:from-morocco-gold/50 dark:to-morocco-blue/50 blur-sm rounded-full"></div>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-16 relative"
            >
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`timeline-item flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full relative`}
                >
                  {/* Desktop timeline dot */}
                  <motion.div
                    variants={timelineDotVariants}
                    className={`absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-20 ${
                      item.status === 'current' 
                        ? 'w-6 h-6 bg-gradient-to-br from-morocco-gold to-yellow-400 shadow-lg shadow-morocco-gold/50' 
                        : 'w-4 h-4 bg-gradient-to-br from-morocco-blue to-blue-600 shadow-lg shadow-morocco-blue/30'
                    } rounded-full border-4 border-white dark:border-gray-900`}
                  >
                    {item.status === 'current' && (
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-morocco-gold rounded-full"
                      />
                    )}
                  </motion.div>

                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 group overflow-hidden ${
                        item.status === 'current' 
                          ? 'ring-2 ring-morocco-gold/30 shadow-morocco-gold/20' 
                          : 'hover:ring-2 hover:ring-morocco-blue/30'
                      }`}
                    >
                      {/* Background gradient overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        item.status === 'current'
                          ? 'bg-gradient-to-br from-morocco-gold/5 to-yellow-400/5'
                          : 'bg-gradient-to-br from-morocco-blue/5 to-blue-600/5'
                      }`}></div>
                      
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-morocco-blue dark:group-hover:text-morocco-gold transition-colors duration-300">
                          {item.institution}
                        </h3>
                        <h4 className={`text-lg font-semibold mb-2 ${
                          item.status === 'current' 
                            ? 'text-morocco-gold' 
                            : 'text-morocco-blue dark:text-morocco-gold'
                        }`}>
                          {item.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                          {item.field}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium px-3 py-1 rounded-lg ${
                            item.status === 'current'
                              ? 'bg-morocco-gold/10 text-morocco-gold border border-morocco-gold/20'
                              : 'bg-morocco-blue/10 text-morocco-blue dark:bg-morocco-gold/10 dark:text-morocco-gold border border-morocco-blue/20 dark:border-morocco-gold/20'
                          }`}>
                            {item.period}
                          </p>
                        </div>
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className={`absolute top-0 left-0 w-16 h-16 ${
                        item.status === 'current' 
                          ? 'bg-gradient-to-br from-morocco-gold/20 to-transparent' 
                          : 'bg-gradient-to-br from-morocco-blue/20 to-transparent dark:from-morocco-gold/20'
                      } rounded-br-full`}></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}