import { motion } from "framer-motion";

export function ExperienceSection() {
  const experienceData = [
    {
      company: "CLV Oralys",
      position: "Internship",
      period: "June 2025 - Aug 2025",
      description:
        "Developed an ERP system for a hospital, including modules for patient management, appointment scheduling, billing, inventory, and staff administration. Implemented JWT authentication in Laravel for secure API access, and used Sanctum middleware to protect sensitive routes and manage user sessions. Integrated real-time notifications for appointment updates and billing alerts, enhancing communication between staff and patients. The system streamlined workflows, improved data accuracy, and enabled secure access for medical staff and administrators.",
      technologies: ["Django", "Bootstrap 5", "PostgreSQL", "Laravel", "JWT", "Sanctum", "Notifications"],
      type: "internship",
      duration: "2 months"
    },
    {
      company: "Mediaverse",
      position: "End-of-Year Internship",
      period: "Apr 2024 - June 2024",
      description:
        "Developed an online learning and course management system, 'DAcademy,' using Spring Boot for the back-end and ReactJS for the front-end. Implemented Redux for state management, integrated Plyr.js for interactive video playback, and used cloud storage for video uploads. Leveraged YouTube API for video streaming, MongoDB Atlas cloud for database hosting, and Redis for caching to optimize performance.",
      technologies: [
        "Spring Boot",
        "ReactJS",
        "Redux",
        "MongoDB Atlas",
        "Redis",
        "Plyr.js",
        "YouTube API",
        "Cloud Storage"
      ],
      type: "internship",
      duration: "3 months"
    },
    {
      company: "Province of Rehamna",
      position: "Final-Year Internship",
      period: "Apr 2023 - June 2023",
      description:
        "Developed a web platform for human resource management for the province of Rehamna using Bootstrap for the front-end and Laravel for the back-end. Implemented JWT authentication and Sanctum middleware to secure user access and API endpoints. Added notification features for leave requests and approvals, improving HR workflow and communication.",
      technologies: ["Bootstrap", "Laravel", "JWT", "Sanctum", "Notifications"],
      type: "internship",
      duration: "3 months"
    },
    {
      company: "EST Safi",
      position: "Final-Year Project",
      period: "Dec 2022 - June 2023",
      description:
        "Developed a web platform for digitizing the internal affairs management of the DAR-TIFL institution using React JS and Tailwind CSS for the front-end, and Laravel for the back-end. Integrated JWT authentication and Sanctum middleware for secure user management. Implemented notifications for administrative updates and document approvals.",
      technologies: ["React JS", "Tailwind CSS", "Laravel", "JWT", "Sanctum", "Notifications"],
      type: "project",
      duration: "7 months"
    },
    {
      company: "Specialized Institute of Traditional Arts",
      position: "Initiation Internship",
      period: "July 2022 - Aug 2022",
      description:
        "Developed a web application for inventory management for the institute using HTML, CSS, and Bootstrap for the front-end, and PHP for the back-end.",
      technologies: ["HTML", "CSS", "Bootstrap", "PHP"],
      type: "internship",
      duration: "2 months"
    }
  ];

  // Sort by date (descending)
  experienceData.sort((a, b) => {
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
      x: 30, 
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return '💼';
      case 'project':
        return '🚀';
      default:
        return '⚡';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'from-morocco-blue to-blue-600';
      case 'project':
        return 'from-morocco-gold to-yellow-500';
      default:
        return 'from-morocco-blue to-morocco-gold';
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,theme(colors.morocco-gold/0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_50%,theme(colors.morocco-blue/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,theme(colors.morocco-blue/0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_20%,theme(colors.morocco-gold/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="section-title bg-gradient-to-r from-morocco-gold to-morocco-blue bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
              Professional Experience
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-morocco-gold to-morocco-blue mx-auto mt-3 sm:mt-4 rounded-full"
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
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-morocco-gold via-morocco-blue to-morocco-gold dark:from-morocco-blue dark:via-morocco-gold dark:to-morocco-blue rounded-full shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-morocco-gold/50 to-morocco-blue/50 dark:from-morocco-blue/50 dark:to-morocco-gold/50 blur-sm rounded-full"></div>
              </div>

              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Mobile timeline dot */}
                  <motion.div
                    variants={timelineDotVariants}
                    className={`flex-shrink-0 mt-2 mr-4 z-20 w-4 h-4 bg-gradient-to-br ${getTypeColor(item.type)} rounded-full border-2 border-white dark:border-gray-900 shadow-md relative`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                    />
                  </motion.div>

                  {/* Mobile content card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.01,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 group overflow-hidden hover:ring-1 hover:ring-morocco-gold/30 dark:hover:ring-morocco-blue/30"
                  >
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${
                      item.type === 'project' 
                        ? 'from-morocco-gold/5 to-yellow-400/5'
                        : 'from-morocco-blue/5 to-blue-600/5'
                    }`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-morocco-gold dark:group-hover:text-morocco-blue transition-colors duration-300 flex-1 leading-tight">
                          {item.company}
                        </h3>
                        <span className={`ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white shadow-sm flex-shrink-0`}>
                          <span className="mr-1 text-xs">{getTypeIcon(item.type)}</span>
                          {item.type === 'internship' ? 'internship' : 'Project'}
                        </span>
                      </div>
                      
                      <h4 className={`text-sm sm:text-base font-semibold mb-2 ${
                        item.type === 'project' 
                          ? 'text-morocco-gold dark:text-morocco-gold' 
                          : 'text-morocco-blue dark:text-morocco-gold'
                      }`}>
                        {item.position}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-md inline-block ${
                          item.type === 'project'
                            ? 'bg-morocco-gold/10 text-morocco-gold border border-morocco-gold/20'
                            : 'bg-morocco-blue/10 text-morocco-blue dark:bg-morocco-gold/10 dark:text-morocco-gold border border-morocco-blue/20 dark:border-morocco-gold/20'
                        }`}>
                          {item.period}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {item.duration}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Technologies with improved mobile styling */}
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {item.technologies.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            whileHover={{ scale: 1.02 }}
                            className={`skill-badge text-xs px-2 py-1 rounded-md font-medium transition-all duration-300 ${
                              item.type === 'project'
                                ? 'bg-morocco-gold/20 text-morocco-gold border border-morocco-gold/30 hover:bg-morocco-gold/30'
                                : 'bg-morocco-blue/20 text-morocco-blue dark:bg-morocco-gold/20 dark:text-morocco-gold border border-morocco-blue/30 dark:border-morocco-gold/30 hover:bg-morocco-blue/30 dark:hover:bg-morocco-gold/30'
                            }`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-bl ${
                      item.type === 'project' 
                        ? 'from-morocco-gold/20 to-transparent' 
                        : 'from-morocco-blue/20 to-transparent dark:from-morocco-gold/20'
                    } rounded-bl-full`}></div>
                    
                    {/* Hover effect line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${getTypeColor(item.type)} rounded-b-xl`}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Layout - Alternating timeline */}
          <div className="hidden lg:block relative">
            {/* Desktop timeline line */}
            <div className="absolute left-1/2 w-1 bg-gradient-to-b from-morocco-gold via-morocco-blue to-morocco-gold dark:from-morocco-blue dark:via-morocco-gold dark:to-morocco-blue h-full transform -translate-x-1/2 rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-morocco-gold/50 to-morocco-blue/50 dark:from-morocco-blue/50 dark:to-morocco-gold/50 blur-sm rounded-full"></div>
            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-16 relative"
            >
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`timeline-item flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full relative`}
                >
                  {/* Desktop timeline dot */}
                  <motion.div
                    variants={timelineDotVariants}
                    className={`absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-20 w-5 h-5 bg-gradient-to-br ${getTypeColor(item.type)} rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-xs`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                    />
                  </motion.div>

                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 group overflow-hidden hover:ring-2 hover:ring-morocco-gold/30 dark:hover:ring-morocco-blue/30"
                    >
                      {/* Background gradient overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${
                        item.type === 'project' 
                          ? 'from-morocco-gold/5 to-yellow-400/5'
                          : 'from-morocco-blue/5 to-blue-600/5'
                      }`}></div>
                      
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-morocco-gold dark:group-hover:text-morocco-blue transition-colors duration-300">
                          {item.company}
                        </h3>
                        
                        <div className="flex items-center justify-between mb-3">
                          <h4 className={`text-lg font-semibold ${
                            item.type === 'project' 
                              ? 'text-morocco-gold dark:text-morocco-gold' 
                              : 'text-morocco-blue dark:text-morocco-gold'
                          }`}>
                            {item.position}
                          </h4>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`text-sm font-medium px-3 py-1 rounded-lg ${
                            item.type === 'project'
                              ? 'bg-morocco-gold/10 text-morocco-gold border border-morocco-gold/20'
                              : 'bg-morocco-blue/10 text-morocco-blue dark:bg-morocco-gold/10 dark:text-morocco-gold border border-morocco-blue/20 dark:border-morocco-gold/20'
                          }`}>
                            {item.period}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {item.duration}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                          {item.description}
                        </p>
                        
                        {/* Technologies with improved styling */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.map((tech, i) => (
                            <motion.span 
                              key={i} 
                              whileHover={{ scale: 1.05 }}
                              className={`skill-badge text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 ${
                                item.type === 'project'
                                  ? 'bg-morocco-gold/20 text-morocco-gold border border-morocco-gold/30 hover:bg-morocco-gold/30'
                                  : 'bg-morocco-blue/20 text-morocco-blue dark:bg-morocco-gold/20 dark:text-morocco-gold border border-morocco-blue/30 dark:border-morocco-gold/30 hover:bg-morocco-blue/30 dark:hover:bg-morocco-gold/30'
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        
                        {/* Type badge at bottom */}
                        <div className="flex justify-end">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white shadow-lg`}>
                            <span className="mr-1">{getTypeIcon(item.type)}</span>
                            {item.type === 'internship' ? 'internship' : 'Project'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${
                        item.type === 'project' 
                          ? 'from-morocco-gold/20 to-transparent' 
                          : 'from-morocco-blue/20 to-transparent dark:from-morocco-gold/20'
                      } rounded-br-full`}></div>
                      
                      {/* Hover effect line */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${getTypeColor(item.type)} rounded-b-2xl`}
                      />
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