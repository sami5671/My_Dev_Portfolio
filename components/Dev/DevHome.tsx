"use client";

import { Achievements } from "@/components/achievements";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient-background";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Resume } from "@/components/resume";
import { ScrollProgress } from "@/components/scroll-progress";
import { Skills } from "@/components/skills";

export function DevHome() {
  return (
    <>
      <GradientBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
