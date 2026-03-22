"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSqa() {
  const projects = [
    {
      title: "Add To Cart Testing With Price Calculation",
      description: "Automation Testing",
      image: "/automation1.png",
      achievements: [
        "Product Add to Cart",
        "Add to Cart Assertion with correct Information",
        "Total price calculation Assertion = Price × Quantity",
        "HTML Report Generation",
        "GitHub Actions CI/CD Pipeline",
        "Page Object Model (POM) design for maintainable code",
      ],
      tech: ["Playwright", "TypeScript", "GitHub Actions", "Page Object Model"],
      liveLink: "#",
      clientLink: "https://github.com/sami5671/Playwright_Exercise?tab=readme-ov-file",
      serverLink: "#",
    },
    {
      title: "AI Professor Performance Testing k6",
      description: "Performance Testing",
      image: "/performance1.png",
      achievements: [
        "Login Performance Under different Load",
        "Grafana k6 Dashboard Report Generation",
        "Admin & Student Individual Performance Testing",
        "Root Cause Analysis (RCA)",
      ],
      tech: ["k6", "Grafana Cloud", "JavaScript"],
      liveLink: "#",
      clientLink:
        "https://github.com/sami5671/AI_Professor_PerformanceTesting_k6?tab=readme-ov-file#-performance-testing-report-student--teacher-performance-dashboards",
      serverLink: "#",
    },
    {
      title: "End-to-End Automation E-Commerce Website",
      description: "Automation Testing",
      image: "/automation2.png",
      achievements: [
        "Login automation",
        "Product search and selection",
        "Add to cart and validate quantity",
        "Page Object Model (POM) design for maintainable code",
        "TestNG integration for structured test execution",
        "Assertions for reliable validation",
      ],
      tech: ["Selenium", "Java", "TestNG", "Maven", "POM"],
      liveLink: "#",
      clientLink: "https://github.com/sami5671/NopCommerce_selenium_web_automation?tab=readme-ov-file",
      serverLink: "#",
    },
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground/60 text-lg">Production-ready applications showcasing technical expertise</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-background/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-fit transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 space-y-4 flex flex-col">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-primary/80 font-medium">{project.description}</p>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 flex-1">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-foreground/70 flex gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-background/50 border border-border/30 text-xs font-medium text-foreground/70 hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-4 border-t border-border/30">
                    <a href={project.liveLink} className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.clientLink} className="flex-1">
                      <Button size="sm" className="btn btn-slate w-full">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
