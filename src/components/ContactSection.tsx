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
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-8 sm:mb-12">Contact Me</h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              {/* Contact Info Section */}
              <div className="text-center lg:text-left">
                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                  Feel free to reach out to me through any of these channels or by using the contact form.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 rounded-lg bg-accent/50">
                  <div className="w-12 h-12 rounded-full bg-morocco-blue/10 dark:bg-morocco-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-morocco-blue dark:text-morocco-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:abdelmoughithelaoumari@gmail.com" 
                      className="font-medium hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors break-all sm:break-normal text-sm sm:text-base"
                    >
                      abdelmoughithelaoumari@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 rounded-lg bg-accent/50">
                  <div className="w-12 h-12 rounded-full bg-morocco-blue/10 dark:bg-morocco-gold/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-morocco-blue dark:text-morocco-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/abdelmoughith-el-aoumari" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors break-all sm:break-normal text-sm sm:text-base"
                    >
                      abdelmoughithelaoumari
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 rounded-lg bg-accent/50">
                  <div className="w-12 h-12 rounded-full bg-morocco-blue/10 dark:bg-morocco-gold/10 flex items-center justify-center flex-shrink-0">
                    <Github className="w-6 h-6 text-morocco-blue dark:text-morocco-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground mb-1">GitHub</p>
                    <a 
                      href="https://github.com/ABDOOMARI11" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium hover:text-morocco-blue dark:hover:text-morocco-gold transition-colors text-sm sm:text-base"
                    >
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
              className="flex-1 mt-8 lg:mt-0"  
            >
              {/* Contact Form Section */}
              <div className="bg-card border rounded-lg p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center lg:text-left">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-morocco-blue dark:focus:ring-morocco-gold focus:border-transparent transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-morocco-blue dark:focus:ring-morocco-gold focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-morocco-blue dark:focus:ring-morocco-gold focus:border-transparent transition-all"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-morocco-blue text-white dark:bg-morocco-gold dark:text-morocco-dark rounded-md font-medium hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-morocco-blue dark:focus:ring-morocco-gold transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}