
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Abdelmoughith El Aoumari. All rights reserved.
            </p>
          </div>
          

        </motion.div>
      </div>
    </footer>
  );
}
