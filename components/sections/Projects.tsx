"use client";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CosmicBackground } from "../ui/CosmicBackground";

const allProjects = [
  {
    id: 'nextjs-dashboard',
    title: 'Next.js Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80&auto=format&fit=crop',
    description: 'Interactive analytics dashboard built with Next.js, featuring responsive UI, reusable components, and modern styling.',
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Bibekadhikari77/nextjs-dashboard',
    demo: '#'
  },
  {
    id: 'p2',
    title: 'Project Two',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1587620931283-d91f0d4a8e21?w=600&q=80',
    description: 'Cross-platform mobile app with React Native.',
    tech: ['React Native', 'Expo'],
    github: '#',
    demo: '#'
  },
  {
    id: 'p3',
    title: 'Project Three',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    description: 'Real-time dashboard with websockets.',
    tech: ['Next.js', 'Socket.IO', 'Node.js'],
    github: '#',
    demo: '#'
  }
];

const categories = ['All', 'Web', 'Mobile'];

export function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);
  return (
  <section id="projects" className="section-padding relative overflow-hidden">
      <CosmicBackground
        stars={50}
        meteors={2}
        enableMeteors
        collisionIntervalMs={2100}
        className="opacity-70"
        starClass="rounded-full bg-primary-400/70 dark:bg-primary-300/80"
        meteorClass="h-px bg-gradient-to-r from-primary-400/70 via-primary-200/50 to-transparent dark:from-primary-300 dark:via-white"
      />
      <div className="container-base relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <p className="text-neutral-600 dark:text-neutral-300">Selected work that showcases my skills and experience.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-full text-sm font-medium border ${filter === c ? 'bg-primary-600 text-white border-primary-600' : 'border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10, scale: 1.02, boxShadow: '0 12px 32px -8px rgba(0,0,0,0.25)' }}
                whileTap={{ scale: 0.97 }}
                className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 hover:shadow-xl flex flex-col transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-fuchsia-500/0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.18 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800">{t}</span>)}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a href={p.demo} className="text-sm font-medium px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-500">Live Demo</a>
                    <a href={p.github} className="text-sm font-medium px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">GitHub</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
