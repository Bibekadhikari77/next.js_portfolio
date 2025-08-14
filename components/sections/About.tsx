"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CosmicBackground } from "../ui/CosmicBackground";

export function About() {
  return (
  <section id="about" className="section-padding relative overflow-hidden">
      <CosmicBackground
        stars={45}
        meteors={1}
        enableMeteors
        collisionIntervalMs={2200}
        className="opacity-70"
        starClass="rounded-full bg-fuchsia-400/70 dark:bg-fuchsia-300/80"
        meteorClass="h-px bg-gradient-to-r from-fuchsia-400/70 via-fuchsia-200/50 to-transparent dark:from-fuchsia-300 dark:via-white"
      />
      <div className="container-base grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            I'm a passionate full-stack developer with experience building modern web applications. I enjoy solving complex problems with clean and efficient code, and crafting user experiences that delight.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            My focus is on React, Next.js, Node.js and cloud-native solutions. I'm always exploring new tools and best practices to improve performance and maintainability.
          </p>
          <div className="flex gap-4">
            {/* Updated to use your actual PDF file in /public (spaces URL-encoded). */}
            <a
              href="/Bibek%20Adhikari.pdf"
              download="Bibek-Adhikari-Resume.pdf"
              className="px-5 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-500"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-80">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-500/20 via-fuchsia-500/20 to-indigo-500/20 blur-xl" />
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Working" className="rounded-2xl object-cover" fill />
        </motion.div>
      </div>
    </section>
  );
}
