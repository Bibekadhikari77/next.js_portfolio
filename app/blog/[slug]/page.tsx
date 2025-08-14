import { notFound } from 'next/navigation';
import Image from 'next/image';

const posts = [
  {
    slug: 'improving-performance-with-nextjs',
    title: 'Improving Performance with Next.js',
    date: '2025-06-01',
    content: `# Improving Performance with Next.js\n\nThis is a placeholder blog post. Replace with real content.`,
    cover: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80'
  }
];

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <article className="prose dark:prose-invert mx-auto py-20 px-4 max-w-3xl">
      <h1>{post.title}</h1>
      <p className="text-sm text-neutral-500">{new Date(post.date).toLocaleDateString()}</p>
      <div className="my-8 relative h-80 w-full">
        <Image src={post.cover} alt={post.title} fill className="object-cover rounded-xl" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
    </article>
  );
}
