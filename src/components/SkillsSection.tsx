import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaReact, FaPhp, FaJava, FaJs, FaDatabase, 
  FaCode, FaServer, FaLaptopCode, FaBookReader, 
  FaMusic, FaRunning, FaCertificate, FaGlobe, FaPython
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiLaravel, SiSpringboot, SiMongodb, SiMysql, SiPostgresql, SiDjango, SiCodeigniter } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedLanguages, setExpandedLanguages] = useState<Set<string>>(new Set());

  const toggleLanguageExpansion = (languageName: string) => {
    const newExpanded = new Set(expandedLanguages);
    if (newExpanded.has(languageName)) {
      newExpanded.delete(languageName);
    } else {
      newExpanded.add(languageName);
    }
    setExpandedLanguages(newExpanded);
  };

  const skillCategories = [
    {
      name: "Languages",
      icon: FaGlobe,
      color: "from-emerald-500 to-teal-600",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      skills: [
        { name: "Arabic", level: "Native", progress: 100, icon: "🇲🇦", description: "Mother tongue" },
        { name: "French", level: "B2", progress: 80, icon: "🇫🇷", description: "Professional level" },
        { name: "English", level: "B2", progress: 75, icon: "🇬🇧", description: "Fluent communication" }
      ]
    },
    {
      name: "Programming Languages",
      icon: FaCode,
      color: "from-indigo-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      skills: [
        { 
          name: "PHP", 
          level: "Advanced", 
          progress: 90, 
          icon: FaPhp, 
          description: "Server-side web development",
          frameworks: [
            { name: "Laravel", level: "Advanced", progress: 85, icon: SiLaravel, description: "Modern PHP framework" },
            { name: "CodeIgniter", level: "Intermediate", progress: 70, icon: SiCodeigniter, description: "Lightweight PHP framework" }
          ]
        },
        { 
          name: "Java", 
          level: "Intermediate", 
          progress: 70, 
          icon: FaJava, 
          description: "Object-oriented programming",
          frameworks: [
            { name: "Spring Boot", level: "Intermediate", progress: 65, icon: SiSpringboot, description: "Microservices & REST API" }
          ]
        },
        { 
          name: "Python", 
          level: "Intermediate", 
          progress: 75, 
          icon: FaPython, 
          description: "Data science & web development",
          frameworks: [
            { name: "Django", level: "Intermediate", progress: 70, icon: SiDjango, description: "Python web framework" }
          ]
        },
        { 
          name: "JavaScript", 
          level: "Advanced", 
          progress: 85, 
          icon: FaJs, 
          description: "ES6+ & modern development",
          frameworks: []
        }
      ]
    },
    {
      name: "Frontend",
      icon: FaLaptopCode,
      color: "from-purple-500 to-pink-600",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      skills: [
        { name: "React.js", level: "Advanced", progress: 90, icon: FaReact, description: "Primary framework" },
        { name: "Next.js", level: "Intermediate", progress: 70, icon: SiNextdotjs, description: "SSR & optimization" },
        { name: "Tailwind CSS", level: "Advanced", progress: 85, icon: SiTailwindcss, description: "Design system" }
      ]
    },
    {
      name: "Backend",
      icon: FaServer,
      color: "from-blue-500 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      skills: [
        { name: "REST API", level: "Advanced", progress: 85, icon: FaServer, description: "API design" },
        { name: "Microservices", level: "Intermediate", progress: 65, icon: FaCode, description: "Distributed architecture" }
      ]
    },
    {
      name: "Databases",
      icon: FaDatabase,
      color: "from-orange-500 to-red-600",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      skills: [
        { name: "MySQL", level: "Advanced", progress: 85, icon: SiMysql, description: "Relational database" },
        { name: "MongoDB", level: "Intermediate", progress: 70, icon: SiMongodb, description: "NoSQL & Documents" },
        { name: "PostgreSQL", level: "Intermediate", progress: 65, icon: SiPostgresql, description: "Advanced database" }
      ]
    },
    {
      name: "Certifications",
      icon: FaCertificate,
      color: "from-morocco-gold to-yellow-500",
      bgPattern: "bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20",
      skills: [
        { name: "CCNA 1", level: "Certified", progress: 100, icon: FaCertificate, description: "Cisco Networking" },
        { name: "CCNA 2", level: "Certified", progress: 100, icon: FaCertificate, description: "Routing & Switching" },
        { name: "CSE", level: "Certified", progress: 100, icon: FaCertificate, description: "Cybersecurity" }
      ]
    },
    {
      name: "Hobbies",
      icon: FaRunning,
      color: "from-green-500 to-emerald-600",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      skills: [
        { name: "Reading", level: "Passionate", progress: 95, icon: FaBookReader, description: "Personal development" },
        { name: "Music", level: "Amateur", progress: 60, icon: FaMusic, description: "Listening & Discovery" },
        { name: "Handball", level: "Athletic", progress: 80, icon: FaRunning, description: "Team sport" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  const frameworkVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: { 
      opacity: 1, 
      height: "auto", 
      y: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,theme(colors.morocco-blue/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,theme(colors.morocco-gold/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title bg-gradient-to-r from-morocco-blue via-morocco-gold to-morocco-blue bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-morocco-blue to-morocco-gold mx-auto mt-4 rounded-full"
          />
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Discover my technical and personal skills through this interactive gallery
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
              className={`relative cursor-pointer group ${category.bgPattern} rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700/30 backdrop-blur-sm overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  {category.name}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {category.skills.length} skill{category.skills.length > 1 ? 's' : ''}
                </div>
              </div>

              {/* Skills preview */}
              <motion.div 
                className="relative z-10"
                animate={{ 
                  height: selectedCategory === category.name ? "auto" : "120px",
                  opacity: selectedCategory === category.name ? 1 : 0.8
                }}
                transition={{ duration: 0.4 }}
              >
                <div className={selectedCategory === category.name ? "" : "overflow-hidden"}>
                  <motion.div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} variants={skillVariants}>
                        {/* Main skill */}
                        <motion.div
                          className={`flex items-center justify-between p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 group-hover:bg-white/70 dark:group-hover:bg-gray-700/70 transition-all duration-300 ${
                            selectedCategory !== category.name && skillIndex >= 2 ? 'opacity-50' : ''
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} text-white text-sm`}>
                              {typeof skill.icon === "string" ? (
                                <span>{skill.icon}</span>
                              ) : (
                                <skill.icon />
                              )}
                            </div>
                            <div>
                              <div className="font-medium text-gray-800 dark:text-white text-sm flex items-center gap-2">
                                {skill.name}
                                {/* Show expand indicator for programming languages with frameworks */}
                                {category.name === "Programming Languages" && skill.frameworks && skill.frameworks.length > 0 && selectedCategory === category.name && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleLanguageExpansion(skill.name);
                                    }}
                                    className="text-xs p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                  >
                                    <span className={`transform transition-transform duration-200 ${expandedLanguages.has(skill.name) ? 'rotate-180' : ''}`}>
                                      ▼
                                    </span>
                                  </button>
                                )}
                              </div>
                              {selectedCategory === category.name && (
                                <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-xs text-gray-500 dark:text-gray-400"
                                >
                                  {skill.description}
                                </motion.div>
                              )}
                            </div>
                          </div>
                          
                          {skill.level && (
                            <div className="text-right">
                              <div className={`text-xs font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {skill.level}
                              </div>
                              {selectedCategory === category.name && skill.progress && (
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  className="mt-1"
                                >
                                  <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${skill.progress}%` }}
                                      transition={{ delay: 0.2, duration: 0.8 }}
                                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                    />
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          )}
                        </motion.div>

                        {/* Frameworks (only for Programming Languages category) */}
                        {category.name === "Programming Languages" && 
                         skill.frameworks && 
                         skill.frameworks.length > 0 && 
                         selectedCategory === category.name && 
                         expandedLanguages.has(skill.name) && (
                          <motion.div
                            variants={frameworkVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="ml-6 space-y-2 border-l-2 border-gray-200 dark:border-gray-600 pl-4"
                          >
                            {skill.frameworks.map((framework, frameworkIndex) => (
                              <motion.div
                                key={frameworkIndex}
                                className="flex items-center justify-between p-2 rounded-lg bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border border-white/40 dark:border-gray-600/40"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: frameworkIndex * 0.1 }}
                              >
                                <div className="flex items-center space-x-2">
                                  <div className={`flex items-center justify-center w-6 h-6 rounded bg-gradient-to-br ${category.color} text-white text-xs`}>
                                    <framework.icon />
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-800 dark:text-white text-xs">
                                      {framework.name}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      {framework.description}
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className={`text-xs font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                    {framework.level}
                                  </div>
                                  <div className="mt-1">
                                    <div className="w-12 h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${framework.progress}%` }}
                                        transition={{ delay: 0.3 + frameworkIndex * 0.1, duration: 0.6 }}
                                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                
                {/* Expand indicator */}
                {selectedCategory !== category.name && category.skills.length > 2 && (
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent flex items-end justify-center">
                    <span className="text-xs text-gray-400 pb-1">+{category.skills.length - 2} more</span>
                  </div>
                )}
              </motion.div>

              {/* Click to expand indicator */}
              <motion.div 
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ 
                  scale: selectedCategory === category.name ? [1, 1.2, 1] : 1,
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: selectedCategory === category.name ? Infinity : 0,
                  repeatDelay: 1
                }}
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${category.color} text-white flex items-center justify-center text-sm font-bold`}>
                  {selectedCategory === category.name ? '−' : '+'}
                </div>
              </motion.div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-br ${category.color} rounded-full opacity-20`}
                    animate={{
                      x: [0, 30, -30, 0],
                      y: [0, -30, 30, 0],
                      scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      left: `${20 + i * 25}%`,
                      top: `${10 + i * 20}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}