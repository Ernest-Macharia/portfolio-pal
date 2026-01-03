import { motion } from "framer-motion";
import { 
  Mail, 
  Calendar, 
  Database, 
  MessageCircle, 
  Clock, 
  FileSpreadsheet, 
  Search, 
  Zap 
} from "lucide-react";

const skills = [
  {
    icon: Mail,
    title: "Email & Calendar Management",
    description: "Efficient inbox organization and scheduling",
  },
  {
    icon: Database,
    title: "Data Entry & Organization",
    description: "Accurate document handling and record keeping",
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    description: "Professional client communication",
  },
  {
    icon: Calendar,
    title: "Scheduling & Coordination",
    description: "Follow-ups and task management",
  },
  {
    icon: FileSpreadsheet,
    title: "Google & Microsoft Suite",
    description: "Workspace and Office proficiency",
  },
  {
    icon: Search,
    title: "Research & Reporting",
    description: "Online research and detailed reports",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Multitasking and prioritization",
  },
  {
    icon: Zap,
    title: "Independent Work",
    description: "Self-directed and proactive approach",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card">
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
              Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set developed through years of hands-on experience 
              in administrative and customer support roles.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-background rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-primary/30"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
