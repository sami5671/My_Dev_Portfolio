"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/sami5671", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sami5671/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:samialam5671@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Sami.dev
            </h3>
            <p className="text-foreground/60 text-sm">Full-stack MERN developer crafting scalable web solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-border/30 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between text-sm text-foreground/60"
        >
          <p>© {currentYear} MD Sami Alam. All rights reserved.</p>
          <p>
            Built with <span className="text-primary">Next.js</span> & <span className="text-accent">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
