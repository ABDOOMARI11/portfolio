
import { motion } from "framer-motion";

export function ExperienceSection() {
  const experienceData = [
    {
      company: "Mediaverse",
      position: "Stage de Fin d'année",
      period: "Avr 2024 - Juin 2024",
      description: "Réaliser un système d'apprentissage en ligne et de gestion des cours \"DAcademy\" en utilisant Laravel pour le back-end et ReactJS pour le front-end et MongoDB comme base de données."
    },
    {
      company: "Province REHAMNA",
      position: "Stage de Fin d'études",
      period: "Avr 2023 - Juin 2023",
      description: "Réaliser une plateforme web de gestion des ressources humaines pour la province de Rehamna en utilisant Bootstrap pour le front-end et Laravel pour le back-end."
    },
    {
      company: "EST SAFI",
      position: "Projet de Fin d'études",
      period: "Déc 2022 - Juin 2023",
      description: "Réaliser une plateforme web pour la digitalisation de la gestion des affaires intérieures de l'établissement DAR-TIFL en utilisant React JS et Tailwind CSS pour le front-end, et Laravel pour le back-end."
    },
    {
      company: "Institut Spécialisé des Arts Traditionnels",
      position: "Stage d'initiation",
      period: "Juil. 2022 - Aout. 2022",
      description: "Réaliser une application web de gestion de stock pour l'institut en utilisant HTML, CSS, Bootstrap pour le front-end et PHP pour le back-end."
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
