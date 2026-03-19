"use client";

import { Achievements } from "@/components/achievements";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient-background";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Resume } from "@/components/resume";
import { Skills } from "@/components/skills";

export function SqaHome() {
  return (
    <>
      <GradientBackground />
      {/* <ScrollProgress /> */}
      <Navbar />
      {/* <Hero /> */}
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
