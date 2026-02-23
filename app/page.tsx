"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Resume } from "@/components/resume";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient-background";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
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
    </main>
  );
}
