import { motion } from "framer-motion";
import { MapPin, Mail, Phone, User, GraduationCap, Code, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const personalInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Marrakech, Morocco",
    color: "text-red-500"
  },
  {
    icon: Mail,
    label: "Email",
    value: "abdelmoughithelaoumari@gmail.com",
    color: "text-blue-500",
    isLink: true
  },
  {
    icon: Phone,
    label: "Phone",
    value: "06-2086-5442",
    color: "text-green-500"
  }
];

const skills = [
  { name: "JAVA", level: 90, color: "bg-orange-500" },
  { name: "Spring Boot", level: 85, color: "bg-green-500" },
  { name: "React", level: 92, color: "bg-blue-500" },
  { name: "Next.js", level: 88, color: "bg-gray-800" },
  { name: "Laravel", level: 95, color: "bg-red-500" },
  { name: "PHP", level: 90, color: "bg-purple-500" }
];



const interests = [
  { name: "Reading", icon: "📚" },
  { name: "Music", icon: "🎵" },
  { name: "Handball", icon: "🤾‍♂️" },
  { name: "Technology", icon: "💻" }
];

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title mb-4">About Me</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Personal Info & Photo */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <Card className="p-6 bg-gradient-to-br from-secondary/50 to-background">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 relative">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-morocco-blue to-morocco-gold p-1">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                          <User className="w-16 h-16 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Abdelmoughith El Aoumari</h3>
                    <p className="text-muted-foreground flex items-center justify-center gap-2">
                      <Code className="w-4 h-4" />
                      Full Stack Developer
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    {personalInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        <info.icon className={`w-5 h-5 mt-0.5 ${info.color}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.isLink ? (
                            <a 
                              href={`mailto:${info.value}`}
                              className="text-sm font-medium hover:text-morocco-blue transition-colors break-words"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium break-words">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>


            </motion.div>

            {/* Right Column - Description & Skills */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-morocco-gold" />
                    <h3 className="text-2xl font-bold">My Story</h3>
                  </div>
                  
                  <div className="space-y-6 text-lg leading-relaxed">
                    <motion.p variants={itemVariants} className="text-muted-foreground">
                      I'm a passionate <span className="text-foreground font-semibold">full-stack developer</span> with 
                      a love for building modern, scalable web applications that solve real-world problems. 
                    </motion.p>
                    
                    <motion.p variants={itemVariants} className="text-muted-foreground">
                      Currently pursuing a <span className="text-foreground font-semibold">Master's degree in Information Systems Engineering</span> at 
                      Faculté des Sciences Semlalia in Marrakech, I bridge the gap between academic knowledge 
                      and practical industry experience.
                    </motion.p>
                    
                    <motion.p variants={itemVariants} className="text-muted-foreground">
                      My expertise spans from <span className="text-foreground font-semibold">Laravel backend development</span> to 
                      <span className="text-foreground font-semibold"> React/Next.js frontend</span> creation, specializing in 
                      responsive, user-friendly interfaces. I've successfully delivered e-learning platforms, 
                      HR management systems, and digital transformation solutions.
                    </motion.p>

                    <motion.div variants={itemVariants} className="bg-secondary/30 p-4 rounded-lg border-l-4 border-morocco-blue">
                      <p className="text-muted-foreground italic">
                        "Code is poetry written in logic, and every application tells a story of problems solved and dreams realized."
                      </p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>


            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}