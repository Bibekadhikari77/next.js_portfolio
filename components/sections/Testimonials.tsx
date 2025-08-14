"use client";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80',
    quote: 'Bibek is a highly skilled developer who consistently delivers high-quality solutions on time.'
  },
  {
    id: 2,
    name: 'David Kim',
    role: 'CTO',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80',
    quote: 'His attention to detail and ability to solve complex problems is impressive.'
  },
  {
    id: 3,
    name: 'Sarah Lee',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80',
    quote: 'Collaborating with Bibek has been a pleasure; he truly cares about user experience.'
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
  <section className="section-padding">
      <div className="container-base">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div key={testimonials[index].id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="text-center space-y-6">
              <div className="flex justify-center">
                <Image src={testimonials[index].avatar} alt={testimonials[index].name} width={96} height={96} className="rounded-full object-cover" />
              </div>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">“{testimonials[index].quote}”</p>
              <div>
                <p className="font-semibold">{testimonials[index].name}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((t, i) => (
              <button key={t.id} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-primary-600' : 'bg-neutral-300 dark:bg-neutral-600'}`} aria-label={`Go to testimonial ${i + 1}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
