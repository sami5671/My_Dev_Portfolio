"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Lock, TestTubes } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend",
      skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Axios", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      title: "Backend",
      skills: ["Node.js", "Express.js", "Mongoose", "REST APIs"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "MySQL", "Firebase"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lock,
      title: "Auth & Security",
      skills: ["JWT", "Firebase Auth", "OAuth", "NextAuth", "Bcrypt"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TestTubes,
      title: "Testing",
      skills: ["Playwright", "Selenium", "Postman"],
      color: "from-green-500 to-lime-200",
    },
  ];

  const languages = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 70 },
    { name: "Python", level: 90 },
    { name: "Java", level: 70 },
    { name: "C++", level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-foreground/60 text-lg">Comprehensive skill set in modern web development</p>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={itemVariants} className="group relative">
                {/* Glass card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 sm:p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-background/50 border border-border/30 text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Language Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50"
        >
          <h3 className="text-2xl font-bold mb-8">Programming Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">{lang.name}</span>
                  <span className="text-sm text-foreground/60">{lang.level}%</span>
                </div>
                <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden border border-border/30">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
