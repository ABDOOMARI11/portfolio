import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  features: string[];
  duration: string;
  role: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DAcademy - Online Learning System",
    description: "A web-based e-learning and course management platform developed with Laravel (back-end), ReactJS (front-end), and MongoDB.",
    detailedDescription: "DAcademy is a comprehensive online learning management system designed to facilitate modern education through technology. The platform features user authentication, course creation and management, interactive quizzes, progress tracking, and real-time communication between instructors and students. Built with a microservices architecture for scalability and performance.",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Laravel", "ReactJS", "MongoDB"],
    features: ["User Authentication", "Course Management", "Interactive Quizzes", "Progress Tracking", "Real-time Chat"],
    duration: "4 months",
    role: "Full Stack Developer"
  },
  {
    id: 2,
    title: "Human Resources Management Platform",
    description: "A web platform for managing human resources for the Province of Rehamna, built with Bootstrap for the front-end and Laravel for the back-end.",
    detailedDescription: "A comprehensive HR management system designed specifically for government institutions. The platform streamlines employee management, payroll processing, leave requests, performance evaluations, and document management. Features include automated reporting, dashboard analytics, and integration with existing government databases.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Bootstrap", "Laravel", "MySQL"],
    features: ["Employee Management", "Payroll System", "Leave Management", "Performance Tracking", "Document Storage"],
    duration: "6 months",
    role: "Lead Developer"
  },
  {
    id: 3,
    title: "DAR-TIFL Internal Affairs Management",
    description: "A platform for digitalizing the internal affairs of the DAR-TIFL institution, using ReactJS and Tailwind CSS for the front-end, and Laravel for the back-end.",
    detailedDescription: "Digital transformation solution for DAR-TIFL institution's internal processes. The system handles administrative workflows, document management, approval processes, and inter-department communication. Features a modern, responsive interface with role-based access control and automated workflow management.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["ReactJS", "Tailwind CSS", "Laravel","MySQL"],
    features: ["Workflow Management", "Document Control", "Role-based Access", "Approval System", "Reporting Dashboard"],
    duration: "5 months",
    role: "co-developer"
  },
  {
    id: 4,
    title: "Stock Management Web Application",
    description: "A web-based inventory management system for the Specialized Institute of Traditional Arts, developed with HTML, CSS, Bootstrap, and PHP.",
    detailedDescription: "Inventory management solution tailored for educational institutions specializing in traditional arts. The system tracks art supplies, equipment, and materials with barcode scanning, low-stock alerts, supplier management, and detailed reporting. Includes features for equipment lending and maintenance scheduling.",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["PHP", "Bootstrap", "MySQL"],
    features: ["Inventory Tracking", "Barcode Scanning", "Supplier Management", "Low Stock Alerts", "Equipment Lending"],
    duration: "3 months",
    role: "Solo Developer"
  },
  {
    id: 5,
    title: "World Cup 2030 Fan ID System",
    description: "A secure web platform for generating and verifying Fan IDs for the 2030 FIFA World Cup, integrating biometric authentication and QR code verification.",
    detailedDescription: "High-security digital identity platform for FIFA World Cup 2030 fan identification and verification. Features biometric enrollment, secure QR code generation, real-time verification at venues, and integration with international security databases. Built with enterprise-grade security protocols and multi-language support.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569517282132-25d22f4573a4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Next.js", "TypeScript", "Spring Boot", "Mysql"],
    features: ["Biometric Authentication", "QR Code Generation", "Real-time Verification", "Multi-language Support", "Security Integration"],
    duration: "8 months",
    role: "Security Lead Developer"
  },
  {
    id: 6,
    title: "Interns Management Platform",
    description: "An academic web application for managing master's students' final internships, permissions, and administrative processes. Developed by me and my partner Yahya Lemkharbech.",
    detailedDescription: "This platform streamlines the management of final internships for master's students, providing tools for internship assignment, permissions workflow, supervisor and student management, document uploads, and progress tracking. Role-based access ensures secure operations for students, supervisors, and administrators. Built as an academic project using modern technologies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Spring Boot", "ReactJS", "MySQL"],
    features: [
      "Internship Assignment",
      "Permissions Management",
      "Role-based Access",
      "Supervisor & Student Management",
      "Document Uploads",
      "Progress Tracking"
    ],
    duration: "2 months",
    role: "Co-Developer (with Yahya Lemkharbech)"
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/50 dark:bg-morocco-dark/30">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            <span className="section-title">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of web applications and digital solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants} 
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-background rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <Button variant="ghost" size="sm" onClick={closeModal}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                  {/* Image Gallery */}
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {selectedProject.gallery.length > 1 && (
                      <>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                          onClick={nextImage}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                        
                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {selectedProject.gallery.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                              onClick={() => setCurrentImageIndex(index)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedProject.detailedDescription}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Duration</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.duration}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Role</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}