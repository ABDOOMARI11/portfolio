
import { motion } from "framer-motion";

export function ExperienceSection() {
  const experienceData = [
    {
      company: "Mediaverse",
      position: "End-of-Year Internship",
      period: "Apr 2024 - June 2024",
      description: "Developed an online learning and course management system, 'DAcademy,' using Laravel for the back-end, ReactJS for the front-end, and MongoDB as the database."
    },
    {
      company: "Province of Rehamna",
      position: "Final-Year Internship",
      period: "Apr 2023 - June 2023",
      description: "Developed a web platform for human resource management for the province of Rehamna using Bootstrap for the front-end and Laravel for the back-end."
    },
    {
      company: "EST Safi",
      position: "Final-Year Project",
      period: "Dec 2022 - June 2023",
      description: "Developed a web platform for digitizing the internal affairs management of the DAR-TIFL institution using React JS and Tailwind CSS for the front-end, and Laravel for the back-end."
    },
    {
      company: "Specialized Institute of Traditional Arts",
      position: "Initiation Internship",
      period: "July 2022 - Aug 2022",
      description: "Developed a web application for inventory management for the institute using HTML, CSS, and Bootstrap for the front-end, and PHP for the back-end."
    }
  ];
  
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 24 
      }
    }
  };
  
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title">Professional Experience</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{item.company}</h3>
                  <span className="text-sm text-morocco-blue dark:text-morocco-gold font-medium px-3 py-1 rounded-full bg-morocco-blue/10 dark:bg-morocco-gold/10">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-morocco-blue dark:text-morocco-gold">
                  {item.position}
                </h4>
                <p className="mt-2">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
