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
    description: "A web-based e-learning and course management platform developed with Laravel (back-end), ReactJS (front-end), MongoDB, JWT authentication, Redis caching, and WebSocket-powered chat rooms.",
    detailedDescription: "DAcademy is a comprehensive online learning management system designed to facilitate modern education through technology. The platform features user authentication using JWT middleware for secure API access, course creation and management, interactive quizzes, progress tracking, and real-time communication between instructors and students via WebSocket chat rooms. Redis is used for caching frequently accessed data, improving performance and scalability. Built with a microservices architecture for scalability and performance.",
    image: "/lovable-uploads/dacademy/lp-dark-1.png",
    gallery: [
      "/lovable-uploads/dacademy/lp-dark-1.png",
      "/lovable-uploads/dacademy/lp-claire-1.png",
      "/lovable-uploads/dacademy/about.png",
      "/lovable-uploads/dacademy/acces-1.png",
      "/lovable-uploads/dacademy/acces-2.png",
      "/lovable-uploads/dacademy/admin-1.png",
      "/lovable-uploads/dacademy/admin-3.png",
      "/lovable-uploads/dacademy/admin-5.png",
      "/lovable-uploads/dacademy/admin-13.png",
      "/lovable-uploads/dacademy/commande-1.png",
      "/lovable-uploads/dacademy/details-course.png",
      "/lovable-uploads/dacademy/enrolled.png",
      "/lovable-uploads/dacademy/user-profile-1.png",
      "/lovable-uploads/dacademy/user-profile-2.png",
      "/lovable-uploads/dacademy/payement-1.png",
      "/lovable-uploads/dacademy/payement-2.png",
      "/lovable-uploads/dacademy/verification.png"

    ],
    tags: [
      "Laravel (RESTful API, Middleware, JWT Auth)",
      "ReactJS (Hooks, SPA, Context API)",
      "MongoDB (NoSQL, Aggregation)",
      "Redis (Caching, Pub/Sub)",
      "WebSocket (Real-time Chat)"
    ],
    features: [
      "JWT-based User Authentication",
      "Course Management with CRUD Operations",
      "Interactive Quizzes & Progress Tracking",
      "Real-time Chat Room (WebSocket)",
      "Redis Cache for Fast Data Access",
      "Microservices Architecture",
      "Role-based Access Control"
    ],
    duration: "4 months",
    role: "Full Stack Developer"
  },
  {
    id: 2,
    title: "Human Resources Management Platform",
    description: "A web platform for managing human resources for the Province of Rehamna, built with Bootstrap (responsive UI), Laravel (REST API, middleware, JWT), MySQL, and Redis cache.",
    detailedDescription: "A comprehensive HR management system designed specifically for government institutions. The platform streamlines employee management, payroll processing, leave requests, performance evaluations, and document management. Features include automated reporting, dashboard analytics, and integration with existing government databases. Laravel middleware and JWT authentication secure the API endpoints, while Redis cache accelerates dashboard analytics and reporting.",
 image: "/lovable-uploads/rh/4.png",    
 gallery: [
      "/lovable-uploads/rh/1.png",
      "/lovable-uploads/rh/2.png",
      "/lovable-uploads/rh/3.png",
      "/lovable-uploads/rh/5.png",
      "/lovable-uploads/rh/6.png",
      "/lovable-uploads/rh/7.png",
      "/lovable-uploads/rh/8.png",
      "/lovable-uploads/rh/9.png",
      "/lovable-uploads/rh/10.png",
      "/lovable-uploads/rh/11.png"

    ],
    tags: [
      "Bootstrap (Responsive Design)",
      "Laravel (REST API, Middleware, JWT)",
      "MySQL (Relational DB, Transactions)",
      "Redis (Cache, Analytics)"
    ],
    features: [
      "Employee Management & Payroll System",
      "Leave Management & Performance Tracking",
      "Document Storage & Automated Reporting",
      "Dashboard Analytics (Redis Cache)",
      "Secure API (JWT, Middleware)",
      "Integration with Government Databases"
    ],
    duration: "6 months",
    role: "Lead Developer"
  },
  {
    id: 3,
    title: "DAR-TIFL Internal Affairs Management",
    description: "A platform for digitalizing the internal affairs of the DAR-TIFL institution, using ReactJS (SPA, hooks), Tailwind CSS (utility-first styling), Laravel (middleware, JWT), MySQL, and Redis cache.",
    detailedDescription: "Digital transformation solution for DAR-TIFL institution's internal processes. The system handles administrative workflows, document management, approval processes, and inter-department communication. Features a modern, responsive interface with role-based access control and automated workflow management. Laravel middleware and JWT secure sensitive endpoints, while Redis cache speeds up workflow queries.",
    image:"/lovable-uploads/dartifl/s.png",
    gallery: [
      "/lovable-uploads/dartifl/a.png",
      "/lovable-uploads/dartifl/b.png",
      "/lovable-uploads/dartifl/c.png",
      "/lovable-uploads/dartifl/d.png",
      "/lovable-uploads/dartifl/e.png",
      "/lovable-uploads/dartifl/f.png",
      "/lovable-uploads/dartifl/g.png",
      "/lovable-uploads/dartifl/h.png",
      "/lovable-uploads/dartifl/i.png",
      "/lovable-uploads/dartifl/j.png",
      "/lovable-uploads/dartifl/k.png",
      "/lovable-uploads/dartifl/l.png",
      "/lovable-uploads/dartifl/m.png",
      "/lovable-uploads/dartifl/n.png",
      "/lovable-uploads/dartifl/o.png",
      "/lovable-uploads/dartifl/p.png",
      "/lovable-uploads/dartifl/q.png",
      "/lovable-uploads/dartifl/r.png"
    ],
    tags: [
      "ReactJS (SPA, Hooks, Context)",
      "Tailwind CSS (Utility-first Styling)",
      "Laravel (Middleware, JWT, REST API)",
      "MySQL (Relational DB)",
      "Redis (Cache)"
    ],
    features: [
      "Workflow Management & Document Control",
      "Role-based Access & Approval System",
      "Reporting Dashboard (Redis Cache)",
      "Responsive UI (Tailwind CSS)",
      "Secure API (JWT, Middleware)",
      "Automated Workflow Management"
    ],
    duration: "5 months",
    role: "Co-Developer"
  },
  {
    id: 4,
    title: "World Cup 2030 Fan ID System",
    description: "A secure web platform for generating and verifying Fan IDs for the 2030 FIFA World Cup, integrating biometric authentication, QR code verification, JWT, Redis cache, and Spring Boot microservices.",
    detailedDescription: "High-security digital identity platform for FIFA World Cup 2030 fan identification and verification. Features biometric enrollment, secure QR code generation, real-time verification at venues, and integration with international security databases. JWT authentication and middleware secure user sessions, Redis cache accelerates verification, and WebSocket enables real-time venue updates. Built with enterprise-grade security protocols and multi-language support.",
    image:"/lovable-uploads/fanid/1.jpg",

    gallery: [
      "/lovable-uploads/fanid/2.jpg",
      "/lovable-uploads/fanid/3.jpg",
      "/lovable-uploads/fanid/4.jpg",
      "/lovable-uploads/fanid/5.jpg",
      "/lovable-uploads/fanid/6.jpg",
      "/lovable-uploads/fanid/7.jpg",
      "/lovable-uploads/fanid/8.jpg",
      "/lovable-uploads/fanid/9.jpg",
      "/lovable-uploads/fanid/10.jpg",
      "/lovable-uploads/fanid/11.jpg",
    ],
    tags: [
      "Next.js (SSR, TypeScript)",
      "TypeScript (Type Safety)",
      "Spring Boot (Microservices, JWT, Middleware)",
      "MySQL (Relational DB)",
      "Redis (Cache)",
      "WebSocket (Real-time Updates)"
    ],
    features: [
      "Biometric Authentication & QR Code Generation",
      "Real-time Verification (WebSocket)",
      "Multi-language Support",
      "Security Integration (JWT, Middleware)",
      "Redis Cache for Fast Verification",
      "Microservices Architecture (Spring Boot)"
    ],
    duration: "8 months",
    role: "Lead Developer"
  },
  {
    id: 5,
    title: "Interns Management Platform",
    description: "An academic web application for managing master's students' final internships, permissions, and administrative processes. Developed by me and my partner Yahya Lemkharbech using Spring Boot (REST API, JWT, middleware), ReactJS (SPA, hooks), and MySQL.",
    detailedDescription: "This platform streamlines the management of final internships for master's students, providing tools for internship assignment, permissions workflow, supervisor and student management, document uploads, and progress tracking. Role-based access ensures secure operations for students, supervisors, and administrators. JWT authentication and middleware secure the API, while MySQL transactions guarantee data consistency. Built as an academic project using modern technologies.",
    image:"/lovable-uploads/stagaire/1.jpg",

    gallery: [
      "/lovable-uploads/stagaire/2.png",
      "/lovable-uploads/stagaire/3.png",
      "/lovable-uploads/stagaire/4.png",
      "/lovable-uploads/stagaire/5.png",
      "/lovable-uploads/stagaire/6.png",
      "/lovable-uploads/stagaire/7.png",
      "/lovable-uploads/stagaire/8.png",
      "/lovable-uploads/stagaire/9.png",
      "/lovable-uploads/stagaire/10.png",
      "/lovable-uploads/stagaire/11.png",
      "/lovable-uploads/stagaire/12.png",
      "/lovable-uploads/stagaire/13.png",
      "/lovable-uploads/stagaire/14.png",
      "/lovable-uploads/stagaire/15.png",
      "/lovable-uploads/stagaire/16.png",
      "/lovable-uploads/stagaire/17.png"
    ],
    tags: [
      "Spring Boot (REST API, JWT, Middleware)",
      "ReactJS (SPA, Hooks, Context)",
      "MySQL (Transactions, Relational DB)"
    ],
    features: [
      "Internship Assignment & Permissions Management",
      "Role-based Access (JWT, Middleware)",
      "Supervisor & Student Management",
      "Document Uploads & Progress Tracking",
      "Secure API Endpoints",
      "Academic Project Collaboration"
    ],
    duration: "2 months",
    role: "Co-Developer (with Yahya Lemkharbech)"
  },
  {
    id: 6,
    title: "Chat Room for Information System Master's Students",
    description: "A real-time chat room platform for master's students in information systems, built by me and my partner Yahya Lemkharbech using Spring Boot, Spring Security, WebSockets, ReactJS, and Tailwind CSS.",
    detailedDescription: "This project provides a secure and interactive chat room for master's students in information systems to communicate and collaborate. The backend is powered by Spring Boot with Spring Security for authentication and authorization, and WebSocket for real-time messaging. The frontend is built with ReactJS and styled using Tailwind CSS, offering a modern and responsive user experience. Features include user authentication, real-time messaging, and role-based access. Developed as a collaborative academic project.",
    image: "/lovable-uploads/chatroom/1.jpeg",

    gallery: [
      "/lovable-uploads/chatroom/2.jpeg",
      "/lovable-uploads/chatroom/3.jpeg",
      "/lovable-uploads/chatroom/4.jpeg",
      "/lovable-uploads/chatroom/5.jpeg",
      "/lovable-uploads/chatroom/6.jpeg",
      "/lovable-uploads/chatroom/7.jpeg",
      "/lovable-uploads/chatroom/8.jpeg"
    ],
    tags: [
      "Spring Boot (REST API, WebSocket, Security)",
      "Spring Security (Authentication, Authorization)",
      "ReactJS (SPA, Hooks)",
      "Tailwind CSS (Utility-first Styling)"
    ],
    features: [
      "Real-time Messaging (WebSocket)",
      "User Authentication & Role-based Access (Spring Security)",
      "Responsive UI (Tailwind CSS)",
      "Collaborative Chat Room",
      "Academic Project Collaboration"
    ],
    duration: "1 month",
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