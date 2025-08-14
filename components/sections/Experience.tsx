"use client";
import { motion } from 'framer-motion';

const experiences = [
  {
    type: 'Experience',
    company: 'Tech Corp',
    role: 'Senior Full-Stack Developer',
    period: '2023 - Present',
    description: 'Leading development of scalable web applications and mentoring junior developers.'
  },
  {
    type: 'Experience',
    company: 'Startup Labs',
    role: 'Full-Stack Developer',
    period: '2021 - 2023',
    description: 'Built end-to-end features across frontend and backend with focus on performance.'
  },
  {
    type: 'Education',
    company: 'University Name',
    role: 'BSc Computer Science',
    period: '2017 - 2021',
    description: 'Studied software engineering, algorithms, databases and web technologies.'
  }
];

export function Experience() {
  return (
  <section className="section-padding bg-neutral-50 dark:bg-neutral-950/40">
      <div className="container-base">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience & Education</h2>
        <div className="relative border-l border-neutral-300 dark:border-neutral-700 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative">
              <span className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-white dark:bg-neutral-900 border-2 border-primary-500 flex items-center justify-center text-[10px] font-bold text-primary-600">{i + 1}</span>
              <h3 className="font-semibold text-xl">{exp.role} - <span className="text-primary-600 dark:text-primary-400">{exp.company}</span></h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{exp.period}</p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
