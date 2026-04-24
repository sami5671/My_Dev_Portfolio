"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSqa() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    { number: "2+", label: "Manual Testing" },
    { number: "3+", label: "Automation Testing" },
    { number: "1", label: "Hult Prize Champion" },
    { number: "1", label: "NASA Finalist" },
  ];

  return (
    <section id="home" className="min-h-screen px-4 sm:px-6 lg:px-8 py-40 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-3">
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-5xl sm:text-6xl font-bold text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  MD Sami Alam
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-primary/80 font-semibold">SQA Engineer</p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-foreground/70 text-lg leading-relaxed">
              I believe that code may build the product, but testing ensures its success. I'm passionate about software
              testing & delivering bug free software so that users can get the best experience.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl bg-card/50 backdrop-blur border border-border/50 text-center"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-foreground/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#projects" className="flex-1">
                <Button className="w-full cursor-pointer bg-gradient-to-r from-primary to-accent hover:opacity-90 text-foreground font-semibold py-6 text-base">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="#contact" className="flex-1">
                <Button className="w-full border-primary/50 cursor-pointer font-semibold py-6 text-base bg-slate-800 text-white hover:bg-slate-700">
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a
                href="https://github.com/sami5671"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur border border-border/50 hover:bg-primary/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sami5671/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur border border-border/50 hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:samialam5671@gmail.com"
                className="p-3 rounded-full bg-card/50 backdrop-blur border border-border/50 hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group lg:-mt-20">
              {/* Glowing gradient border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 blur-2xl group-hover:opacity-100 animate-glow-pulse transition-all duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full " />

              {/* Image container */}
              <div className="relative w-full h-full animate-float rounded-full overflow-hidden bg-background/50 backdrop-blur-xl border-2 border-primary/30 shadow-2xl">
                <Image src="/profile.jpeg" alt="MD Sami Alam" fill className="object-cover object-top" priority />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
