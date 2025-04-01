
import { motion } from "framer-motion";

export function EducationSection() {
  const educationData = [
    {
      institution: "Faculty of Sciences Semlalia of Marrakech",
      degree: "Master’s",
      field: "Information Systems Engineering",
      period: "Ongoing",
    },
    {
      institution: "Higher School of Technology of Safi",
      degree: "Professional Bachelor's",
      field: "Information Systems and Networks Engineering",
      period: "Oct 2023 - June 2024",
    },
    {
      institution: "Higher School of Technology of Safi",
      degree: "University Diploma of Technology (DUT) in Computer Science",
      field: "Option: Systems and Network Administration",
      period: "Sep 2021 - June 2023",
    },
    {
      institution: "Faculty of Science and Technology of Béni-Mellal",
      degree: "1st Year Program",
      field: "Mathematics - Computer Science - Physics - Chemistry",
      period: "Sep 2020 - June 2021",
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
    hidden: { x: -20, opacity: 0 },
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
    <section id="education" className="py-20 bg-secondary/50 dark:bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title">Education</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <h3 className="text-xl font-semibold">{item.institution}</h3>
                <h4 className="text-lg font-medium text-morocco-blue dark:text-morocco-gold">
                  {item.degree}
                </h4>
                <p className="text-muted-foreground">{item.field}</p>
                <p className="text-sm mt-1">{item.period}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
