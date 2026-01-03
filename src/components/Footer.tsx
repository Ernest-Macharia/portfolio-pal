import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Risper Chakongo. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-muted-foreground text-sm">
            Made with <Heart size={14} className="text-primary fill-primary" /> in Nairobi
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
