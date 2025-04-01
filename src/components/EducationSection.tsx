
import { motion } from "framer-motion";

export function EducationSection() {
  const educationData = [
    {
      institution: "Faculté des Sciences Semlalia de Marrakech",
      degree: "Master",
      field: "Ingénierie des Systèmes d'information",
      period: "En cours",
    },
    {
      institution: "École Supérieure de Technologie de SAFI",
      degree: "Licence Professionnelle",
      field: "Ingénierie des Systèmes d'information et Réseaux",
      period: "Oct 2023 - Juin 2024",
    },
    {
      institution: "École Supérieure de Technologie de SAFI",
      degree: "DUT Génie Informatique",
      field: "Option : Administration des systèmes réseaux",
      period: "Sep. 2021 - Juin 2023",
    },
    {
      institution: "Faculté des Science et Techniques de Béni-Mellal",
      degree: "1er Année filière",
      field: "Mathématique-Informatique-Physique-Chimie",
      period: "Sep. 2020 - Juin 2021",
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
