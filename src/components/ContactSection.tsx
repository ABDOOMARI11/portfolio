import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";  // Import EmailJS

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_jmlojol";  // Your EmailJS service ID
    const templateId = "template_2kb0cqa";  // Replace with your EmailJS template ID
    const publicKey = "UY0q1RQoQ9FN7FtzJ";  // Replace with your EmailJS public key

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title">Contact Me</h2>

          <div className="flex gap-10">  {/* Utilisation de flex avec un espace entre les divs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              {/* Contact Info Section */}
              <p>Feel free to reach out to me through any of these channels or by using the contact form.</p>

              <div className="space-y-4 pt-4">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-morocco-blue/10 dark:bg-morocco-gold/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-morocco-blue dark:text-morocco-gold" />
                  </div>
                  <div className="">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:abdelmoughithelaoumari@gmail.com" className="font-medium hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors ">
                      abdelmoughithelaoumari@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-morocco-blue/10 dark:bg-morocco-gold/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-morocco-blue dark:text-morocco-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/abdelmoughith-el-aoumari" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors">
                      abdelmoughithelaoumari
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-morocco-blue/10 dark:bg-morocco-gold/10 flex items-center justify-center">
                    <Github className="w-5 h-5 text-morocco-blue dark:text-morocco-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a href="https://github.com/ABDOOMARI11" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors">
                      ABDOOMARI11
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-1 gap-4 mt-6"  
            >
              {/* Contact Form Section */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-morocco-blue text-white dark:bg-morocco-gold dark:text-morocco-dark rounded-md font-medium hover:bg-opacity-90 transition-all w-full"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}
