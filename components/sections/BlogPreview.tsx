"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  {
    slug: 'improving-performance-with-nextjs',
    title: 'Improving Performance with Next.js',
    date: '2025-06-01',
    excerpt: 'Practical techniques to optimize your Next.js applications for speed and efficiency.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80'
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    date: '2025-05-15',
    excerpt: 'Tips for writing cleaner, safer and more maintainable TypeScript code.',
    image: 'https://images.unsplash.com/photo-1587620931283-d91f0d4a8e21?w=600&q=80'
  },
  {
    slug: 'design-systems-for-scale',
    title: 'Design Systems for Scale',
    date: '2025-04-20',
    excerpt: 'Building and maintaining design systems that evolve with your product.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80'
  }
];

export function BlogPreview() {
  return (
  <section className="section-padding bg-neutral-50 dark:bg-neutral-950/40">
      <div className="container-base">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <Link href="/blog" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">View all</Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col">
              <div className="relative h-44">
                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{new Date(p.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                <h3 className="font-semibold text-lg leading-snug line-clamp-2">{p.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">{p.excerpt}</p>
                <div className="pt-2 mt-auto">
                  <Link href={`/blog/${p.slug}`} className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">Read More →</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
