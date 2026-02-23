"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function Resume() {
  const handleDownload = () => {
    // Create a sample PDF or download link
    const link = document.createElement("a");
    link.href = "#"; // Replace with actual resume URL
    link.download = "MD_Sami_Alam_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />

          <div className="relative p-12 sm:p-16 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                    Download My{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Resume
                    </span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>

                <p className="text-foreground/70 text-lg leading-relaxed">
                  Get a quick overview of my experience, technical expertise, project portfolio, and professional
                  achievements. My resume highlights my full-stack development capabilities, successful project
                  implementations, and recognized leadership accomplishments.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/80">3+ Years of Full Stack Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">Expert in MERN Stack Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/80">Proven Track Record with Startups & Scale-ups</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">Leadership Experience in Hackathons</span>
                  </div>
                </div>

                <p className="text-sm text-foreground/60 pt-4">Last Updated: February 2026</p>
              </motion.div>

              {/* Right side - Download Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center items-center"
              >
                <div className="relative group/button">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-40 group-hover/button:opacity-100 transition-all duration-300 animate-pulse" />

                  <Button
                    onClick={handleDownload}
                    size="lg"
                    className="relative bg-gradient-to-r from-primary to-accent hover:opacity-90 text-foreground font-bold py-8 px-12 text-lg h-auto rounded-2xl group-hover/button:shadow-2xl group-hover/button:shadow-primary/40 transition-all duration-300"
                  >
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Download className="w-6 h-6" />
                      <span>Download Resume (PDF)</span>
                    </motion.div>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
