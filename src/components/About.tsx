import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Proven ability to work independently",
  "Manage multiple priorities effectively",
  "Deliver consistent results with minimal supervision",
  "Recognized for professionalism and accuracy",
  "Strong commitment to confidentiality",
  "Proactive problem-solving approach",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Summary
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I am a highly reliable and detail-oriented Virtual Assistant with a strong 
                background in administrative support, customer communication, and digital tools. 
                My experience spans customer service excellence, operational support, and 
                efficient task management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With fluency in English and Swahili, I bring a unique perspective and 
                communication ability to serve diverse clients. I'm passionate about 
                helping businesses streamline their operations and achieve their goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                What Sets Me Apart
              </h3>
              <ul className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
