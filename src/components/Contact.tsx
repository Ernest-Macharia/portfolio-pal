import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Let's Connect
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to help streamline your business operations. Let's discuss how 
              I can support your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="mailto:risperchakongo@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-card-gradient rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground text-sm">
                risperchakongo@gmail.com
              </p>
            </motion.a>

            <motion.a
              href="tel:+254757558525"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-card-gradient rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Phone
              </h3>
              <p className="text-muted-foreground text-sm">
                +254 757 558 525
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-card-gradient rounded-2xl p-8 shadow-card border border-border text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Location
              </h3>
              <p className="text-muted-foreground text-sm">
                Nairobi, Kenya (Remote)
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <a
              href="mailto:risperchakongo@gmail.com?subject=Virtual Assistant Inquiry"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:shadow-elevated transition-all duration-300 hover:scale-105"
            >
              <Send size={20} />
              Send Me a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
