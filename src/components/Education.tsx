import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, Heart } from "lucide-react";

const education = [
  {
    title: "Diploma in Information Communication Technology (ICT)",
    institution: "Institute of Advanced Technology",
    period: "2017 – 2018",
    icon: GraduationCap,
  },
  {
    title: "Certificate in ICT & Life Skills",
    institution: "Digital Opportunity Trust",
    period: "2017",
    icon: Award,
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Swahili", level: "Fluent" },
];

const volunteer = [
  "Community ICT training for youth",
  "Digital skills mentorship and team coordination",
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-card">
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
              Background
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Education & More
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Education & Certifications
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <p className="text-xs text-primary mt-1">{item.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Bilingual communication ability to serve diverse clients effectively.
              </p>
            </motion.div>

            {/* Volunteer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Volunteer Experience
              </h3>
              <ul className="space-y-4">
                {volunteer.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-6">
                Giving back to the community through technology education.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
