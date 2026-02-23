"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function Blog() {
  const blogs = [
    {
      title: "Building Scalable MERN Applications",
      excerpt:
        "Explore best practices for structuring large-scale MERN stack applications with proper middleware, error handling, and performance optimization.",
      date: "Feb 20, 2026",
      category: "Backend",
      slug: "scalable-mern-apps",
    },
    {
      title: "React Performance Optimization",
      excerpt:
        "Learn advanced techniques for optimizing React applications including code splitting, lazy loading, and memoization strategies.",
      date: "Feb 15, 2026",
      category: "Frontend",
      slug: "react-optimization",
    },
    {
      title: "Secure Payment Integration Guide",
      excerpt:
        "Complete guide to integrating payment systems like Stripe and SSLCOMMERZ with proper security measures and error handling.",
      date: "Feb 10, 2026",
      category: "Integration",
      slug: "payment-integration",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-foreground/60 text-lg">Latest articles and technical deep dives</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.slug}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 flex-1 leading-relaxed">{blog.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all blogs button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-foreground font-semibold px-8 py-6 text-base">
            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
