
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title">About Me</h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            <div className="md:col-span-1">
              <div className="flex flex-col gap-3">
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Marrakech, Morocco</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:abdelmoughithelaoumari@gmail.com" className="font-medium hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors">
                    abdelmoughithelaoumari@gmail.com
                  </a>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">06-2086-5442</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-4">
              <p>
                I'm a full-stack developer with a passion for building modern web applications. 
                Currently pursuing a Master's degree in Information Systems Engineering at Faculté des 
                Sciences Semlalia in Marrakech, I combine academic knowledge with practical experience 
                in web development.
              </p>
              
              <p>
                With expertise in Laravel for backend and React/Next.js for frontend development, 
                I specialize in creating responsive and user-friendly interfaces. My experience 
                includes building e-learning platforms, HR management systems, and digital 
                transformation solutions.
              </p>
              
              <p>
                I'm fluent in Arabic, French (B2), and English (B1), which helps me collaborate 
                effectively in international environments. When I'm not coding, I enjoy reading, 
                music, and playing handball.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-3">
                <span className="skill-badge">HTML/CSS</span>
                <span className="skill-badge">React</span>
                <span className="skill-badge">Next.js</span>
                <span className="skill-badge">Tailwind CSS</span>
                <span className="skill-badge">Laravel</span>
                <span className="skill-badge">PHP</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
