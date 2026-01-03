import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Star } from "lucide-react";

const experiences = [
  {
    company: "Spur Steak Ranches",
    role: "Service Operations & Team Support Assistant",
    period: "2022 – Present",
    current: true,
    achievements: [
      "Provided consistent operational and administrative support in fast-paced environments",
      "Managed multiple tasks with minimal supervision",
      "Supported supervisors with reporting, coordination, and documentation",
      "Improved workflow efficiency by 30% during peak periods",
    ],
  },
  {
    company: "Artcaffe Coffee & Bakery",
    role: "Customer Service & Operations Assistant",
    period: "2019 – 2021",
    current: false,
    achievements: [
      "Managed high-volume customer communications professionally and efficiently",
      "Maintained digital and manual records with high accuracy",
      "Coordinated tasks and schedules to support daily operations",
      "Resolved customer concerns independently with a 98% satisfaction rate",
      "Assisted with inventory tracking and reporting",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
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
              Career Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Experience
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-soft" />

                <div
                  className={`bg-card-gradient rounded-2xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase size={24} className="text-primary" />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium">{exp.role}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>

                  <ul className={`space-y-3 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <Star size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.achievements.some(a => a.includes('%')) && (
                    <div className={`mt-6 flex items-center gap-2 text-primary font-medium ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <TrendingUp size={18} />
                      <span>Key Performance Metrics Achieved</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
