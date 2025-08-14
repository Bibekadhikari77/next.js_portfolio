"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CosmicBackground } from "../ui/CosmicBackground";

export function Hero() {
  return (
    <section id="home" className="section-padding relative overflow-hidden bg-hero-gradient">
  <CosmicBackground vignette starClass="rounded-full bg-primary-400/70 dark:bg-primary-300/80" meteorClass="h-px bg-gradient-to-r from-primary-400/70 via-primary-200/50 to-transparent dark:from-primary-300 dark:via-white" />
      <div className="container-base grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm <span className="gradient-text">Bibek Adhikari</span>
            <br />
            Full-Stack Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 dark:text-neutral-300 max-w-xl"
          >
            I build performant, scalable and delightful web applications with
            modern technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-500 transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center h-72 md:h-96"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/30 via-fuchsia-500/20 to-indigo-500/30 blur-3xl" />
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl relative z-10">
            <Image
              src="/20231115142837_IMG_9876.JPG"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
