import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DAcademy - Online Learning System",
    description: "A web-based e-learning and course management platform developed with Laravel (back-end), ReactJS (front-end), and MongoDB.",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    tags: ["Laravel", "ReactJS", "MongoDB"],
    github: "https://github.com/ABDOOMARI11/dacademy",
    demo: "https://dacademy-demo.com"
  },
  {
    id: 2,
    title: "Human Resources Management Platform",
    description: "A web platform for managing human resources for the Province of Rehamna, built with Bootstrap for the front-end and Laravel for the back-end.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Bootstrap", "Laravel", "MySQL"],
    github: "https://github.com/ABDOOMARI11/hr-management"
  },
  {
    id: 3,
    title: "DAR-TIFL Internal Affairs Management",
    description: "A platform for digitalizing the internal affairs of the DAR-TIFL institution, using ReactJS and Tailwind CSS for the front-end, and Laravel for the back-end.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    tags: ["ReactJS", "Tailwind CSS", "Laravel"],
    github: "https://github.com/ABDOOMARI11/dar-tifl"
  },
  {
    id: 4,
    title: "Stock Management Web Application",
    description: "A web-based inventory management system for the Specialized Institute of Traditional Arts, developed with HTML, CSS, Bootstrap, and PHP.",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=800&q=80",
    tags: ["PHP", "Bootstrap", "MySQL"],
    github: "https://github.com/ABDOOMARI11/stock-management"
  },
  {
    id: 5,
    title: "World Cup 2030 Fan ID System",
    description: "A secure web platform for generating and verifying Fan IDs for the 2030 FIFA World Cup, integrating biometric authentication and QR code verification.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/ABDOOMARI11/worldcup-fanid",
    demo: "https://fanid2030-demo.com"
  }
];


export function ProjectsSection() {
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
            Check out some of my recent work.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -5 }}>
              <Card>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-muted text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" /> Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}