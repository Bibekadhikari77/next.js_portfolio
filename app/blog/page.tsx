import Link from 'next/link';

const posts = [
  { slug: 'improving-performance-with-nextjs', title: 'Improving Performance with Next.js', date: '2025-06-01' },
  { slug: 'typescript-best-practices', title: 'TypeScript Best Practices', date: '2025-05-15' },
  { slug: 'design-systems-for-scale', title: 'Design Systems for Scale', date: '2025-04-20' }
];

export default function BlogIndex() {
  return (
    <main className="section-padding container-base">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <ul className="space-y-6">
        {posts.map(p => (
          <li key={p.slug} className="border-b pb-4 border-neutral-200 dark:border-neutral-800">
            <Link href={`/blog/${p.slug}`} className="font-medium text-lg hover:text-primary-600 dark:hover:text-primary-400">{p.title}</Link>
            <p className="text-xs text-neutral-500 mt-1">{new Date(p.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
