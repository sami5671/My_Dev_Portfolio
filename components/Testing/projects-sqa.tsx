"use client";

import { Button } from "@/components/ui/button";
import notfound from "@/public/404 Page not found.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export function ProjectsSqa() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Add To Cart Testing With Price Calculation",
      description: "Automation Testing",
      type: "automation",
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
      githubLink: "https://github.com/sami5671/Playwright_Exercise?tab=readme-ov-file",
      applicationLink: "https://automationexercise.com/",
    },
    {
      id: 2,
      title: "AI Professor Performance Testing k6",
      description: "Performance Testing",
      type: "performance",
      image: "/performance1.png",
      achievements: [
        "Login Performance Under different Load",
        "Grafana k6 Dashboard Report Generation",
        "Admin & Student Individual Performance Testing",
        "Root Cause Analysis (RCA)",
      ],
      tech: ["k6", "Grafana Cloud", "JavaScript"],
      liveLink: "#",
      githubLink:
        "https://github.com/sami5671/AI_Professor_PerformanceTesting_k6?tab=readme-ov-file#-performance-testing-report-student--teacher-performance-dashboards",
      applicationLink: "https://diu.aiteacher.daffodilglobal.ai/",
    },
    {
      id: 3,
      title: "End-to-End Automation E-Commerce Website",
      description: "Automation Testing",
      type: "automation",
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
      githubLink: "https://github.com/sami5671/NopCommerce_selenium_web_automation?tab=readme-ov-file",
      applicationLink: "https://demo.nopcommerce.com/",
    },
    {
      id: 4,
      title: "360 Patshala Authentication Manual Testing",
      description: "Manual Testing",
      type: "manual",
      image: "/360patshala.png",
      achievements: [
        "Login functionality test",
        "Registration functionality test",
        "Bug Report of Login & Registration",
      ],
      tech: ["Manual Testing", "MS Word", "MS Excel"],
      githubLink: "https://github.com/sami5671/Manual_Testing_Authentication",
      applicationLink: "https://360pathshala.com/",
    },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.type === activeFilter);

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
        {/* Heading */}
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
          <p className="text-foreground/60 text-md">
            I believe that Code may build the product, but Testing builds the trust that every client truly values
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "manual", "automation", "performance", "api", "database", "security", "mobile"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300
                ${
                  activeFilter === type
                    ? "bg-gradient-to-r from-primary to-accent text-foreground border-primary rounded-md"
                    : "bg-background/50 border-border/30 text-foreground/70 hover:bg-primary/10 border-primary rounded-md"
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter} // ✅ IMPORTANT FIX
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center py-10">
              <Lottie animationData={notfound} loop className="w-82 h-82" />
              <p className="text-foreground/60 mt-4 text-lg">No projects found</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-background/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fit transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 space-y-4 flex flex-col">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                      <p className="text-primary/80 font-medium">{project.description}</p>
                    </div>

                    <ul className="space-y-2 flex-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-background/50 border border-border/30 text-xs font-medium text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-border/30">
                      <a href={project.applicationLink} className="flex-1">
                        <Button
                          size="sm"
                          className="w-full text-white font-semibold bg-gradient-to-r from-primary to-accent cursor-pointer"
                        >
                          App Link
                          <ExternalLink className="w-4 h-4 mr-2" />
                        </Button>
                      </a>
                      <a href={project.githubLink} className="flex-1">
                        <Button
                          size="sm"
                          className="w-full text-white font-semibold bg-gradient-to-r from-primary to-accent cursor-pointer"
                        >
                          Github
                          <Github className="w-4 h-4 mr-2" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
