"use client";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { CosmicBackground } from "../ui/CosmicBackground";

const allProjects = [
  {
    id: 'nextjs-dashboard',
    title: 'Next.js Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80&auto=format&fit=crop',
  description: 'Interactive analytics dashboard built with Next.js, featuring responsive UI, reusable components, and modern styling.',
  longDescription: 'This dashboard showcases dynamic data visualization, modular component architecture, route-based code splitting, and responsive design patterns. Built with accessibility and performance in mind, it leverages Next.js server components for faster initial loads and Tailwind utility classes for rapid UI iteration.',
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Bibekadhikari77/nextjs-dashboard',
    demo: '#'
  },
  {
  id: 'blog-app',
  title: 'Blog App',
  category: 'Web',
  image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80&auto=format&fit=crop',
  description: 'Full‑stack blogging platform with CRUD posts, auth, and rich text editing.',
  longDescription: 'A full-featured blogging application supporting user authentication, post creation with rich text/Markdown editor, tag-based categorization, dynamic routing, and SEO-friendly meta tags. Implements secure API routes, optimistic UI updates, pagination, and reusable UI primitives. Focus on accessibility, performance, and clean folder architecture.',
  tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'Auth'],
  github: 'https://github.com/Bibekadhikari77/blog-app',
  demo: '#'
  },
  {
    id: 'p3',
    title: 'Project Three',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    description: 'Real-time dashboard with websockets.',
  longDescription: 'Real-time dashboard utilizing WebSockets (Socket.IO) for live updates, featuring data streaming, optimistic UI, and scalable Node.js backend patterns.',
    tech: ['Next.js', 'Socket.IO', 'Node.js'],
    github: '#',
    demo: '#'
  }
];

const categories = ['All', 'Web', 'Mobile'];

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState<typeof allProjects[number] | null>(null);
  const filtered = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);

  // ESC to close modal
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setActive(null);
  }, []);
  useEffect(() => {
    if (active) {
      document.addEventListener('keydown', handleKey);
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.documentElement.style.overflow = '';
    };
  }, [active, handleKey]);

  const openProject = (p: typeof allProjects[number]) => setActive(p);
  const closeProject = () => setActive(null);

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
                    <button
                      onClick={() => openProject(p)}
                      className="text-sm font-medium px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                      aria-haspopup="dialog"
                      aria-controls="project-modal"
                    >
                      Details
                    </button>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    >GitHub</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Modal */}
        <AnimatePresence>
          {active && (
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-neutral-900/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
            >
              <motion.div
                id="project-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="relative w-full max-w-2xl rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="relative h-60">
                  <Image src={active.image} alt={active.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/60 via-neutral-900/20 to-transparent" />
                  <button
                    onClick={closeProject}
                    className="absolute top-3 right-3 rounded-full bg-neutral-900/70 text-white px-3 py-1 text-xs font-medium hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                    aria-label="Close details"
                  >Close</button>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-col gap-2">
                    <h3 id="project-modal-title" className="text-2xl font-semibold tracking-tight">{active.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{active.longDescription || active.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-300 border border-primary-200/60 dark:border-primary-500/30">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {active.github !== '#' && (
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90"
                      >GitHub</a>
                    )}
                    {active.demo !== '#' && (
                      <a
                        href={active.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-500"
                      >Live Demo</a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
