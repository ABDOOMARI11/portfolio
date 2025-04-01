
import { motion } from "framer-motion";

export function SkillsSection() {
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "Arabic", level: "fluent" },
        { name: "French", level: "B2" },
        { name: "English", level: "B2" }
      ]
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "C", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "Java", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "PHP", level: "Advanced" }
      ]
    },
    {
      name: "Server Side",
      skills: [
        { name: "JAVA", level: "Intermediate" },
        { name: "Spring Boot", level: "Intermediate" },
        { name: "PHP", level: "Advanced" },
        { name: "Laravel", level: "Advanced" }
      ]
    },
    {
      name: "Client Side",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "XML", level: "Intermediate" },
        { name: "NoSQL/MongoDB", level: "Intermediate" }
      ]
    },
    {
      name: "Methods & Concepts",
      skills: [
        { name: "OOP", level: "Advanced" },
        { name: "Merise2", level: "Advanced" },
        { name: "UML", level: "Intermediate" }
      ]
    },
    {
      name: "Certifications",
      skills: [
        { name: "CCNA 1", level: "" },
        { name: "CCNA 2", level: "" },
        { name: "CSE", level: "" }
      ]
    },
    {
      name: "Hobbies",
      skills: [
        { name: "Reading", level: "" },
        { name: "Music", level: "" },
        { name: "Sports (handball)", level: "" }
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 24 }
    }
  };
  
  return (
    <section id="skills" className="py-20 bg-secondary/50 dark:bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title">Skills & Competences</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-lg p-6 shadow-sm border border-border"
              >
                <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-border">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-sm text-morocco-blue dark:text-morocco-gold font-medium">
                          {skill.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
