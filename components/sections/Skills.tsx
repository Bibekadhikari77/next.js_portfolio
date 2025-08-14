"use client";
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTool } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiGit, SiJest, SiVercel } from 'react-icons/si';
import { CosmicBackground } from "../ui/CosmicBackground";

const categories = [
  {
    title: 'Frontend',
    icon: <FiCode />,
    skills: [
      { name: 'React', icon: <SiReact className="text-sky-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Redux Toolkit' }
    ]
  },
  {
    title: 'Backend',
    icon: <FiDatabase />,
    skills: [
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-700 dark:text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" /> },
      { name: 'REST / GraphQL', icon: <SiGraphql className="text-pink-500" /> }
    ]
  },
  {
    title: 'Tools',
    icon: <FiTool />,
    skills: [
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
      { name: 'Jest', icon: <SiJest className="text-red-600" /> },
      { name: 'CI/CD' },
      { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> }
    ],
  },
];

export function Skills() {
  return (
  <section id="skills" className="section-padding bg-neutral-50 dark:bg-neutral-950/40 relative overflow-hidden scroll-mt-24">
      <CosmicBackground
        stars={55}
        meteors={2}
        enableMeteors
        collisionIntervalMs={2400}
        className="opacity-60"
        starClass="rounded-full bg-indigo-400/70 dark:bg-indigo-300/80"
        meteorClass="h-px bg-gradient-to-r from-indigo-400/70 via-indigo-200/50 to-transparent dark:from-indigo-300 dark:via-white"
      />
      <div className="container-base relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
  <div className="grid gap-10 md:gap-12 xl:gap-16 sm:grid-cols-1 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 hover:shadow-lg hover:border-primary-400/60 transition relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-fuchsia-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-fuchsia-500/10 group-hover:to-indigo-500/10 transition" />
              <div className="flex items-center gap-3 mb-4 text-primary-600 dark:text-primary-400 text-2xl">
                {cat.icon}
                <span className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">{cat.title}</span>
              </div>

              <div className="flex flex-wrap gap-2 relative">
                {cat.skills.map((s, idx) => {
                  const key = typeof s === 'string' ? s : s.name + idx;
                  const label = typeof s === 'string' ? s : s.name;
                  const icon = typeof s !== 'string' ? s.icon : null;
                  return (
                    <div
                      key={key}
                      className="px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-700 dark:text-neutral-200 flex items-center gap-2 border border-neutral-200 dark:border-neutral-700 hover:border-primary-400/60 hover:bg-neutral-50 dark:hover:bg-neutral-700/70 transition"
                    >
                      {icon && <span className="text-base leading-none">{icon}</span>}
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
