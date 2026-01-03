import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide">
              Virtual Assistant & Administrative Specialist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
          >
            Risper{" "}
            <span className="text-gradient">Chakongo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            Highly reliable and detail-oriented Virtual Assistant with a strong background 
            in administrative support, customer communication, and digital tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="mailto:risperchakongo@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-elevated transition-all duration-300 hover:scale-105"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-full font-medium shadow-soft hover:shadow-card transition-all duration-300 border border-border"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              risperchakongo@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              +254 757 558 525
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Nairobi, Kenya (Remote)
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="block animate-bounce">
            <ArrowDown size={24} className="text-primary/60" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
