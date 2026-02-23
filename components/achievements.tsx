"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Star, Trophy } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Hult Prize DIU Champion",
      description: "Won DIU Regional Championship 2023 & World Semi-Finalist",
      year: "2023",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Rocket,
      title: "NASA Space Apps Finalist",
      description: "Selected as finalist in NASA Space Apps Challenge 2024",
      year: "2024",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Stand Up Hackathon",
      description: "Ranked in Top 10 teams for innovative solutions",
      year: "2024",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      title: "Open Source Contributor",
      description: "Active contributor to multiple open source projects",
      year: "Ongoing",
      color: "from-green-500 to-emerald-500",
    },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            Recognition and accomplishments that shape my professional journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{achievement.title}</h3>
                      <span className="inline-block text-sm text-primary/80 font-semibold">{achievement.year}</span>
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">{achievement.description}</p>

                  {/* Animated border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50"
        >
          <h3 className="text-2xl font-bold mb-8">Journey Highlights</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{achievement.title}</p>
                  <p className="text-sm text-foreground/60">{achievement.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
