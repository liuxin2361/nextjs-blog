import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function BlogPostsPage({
    searchParams
}: {
    searchParams: { tags: string, limit: number, page: number, order: 'newest' | 'oldest' }
}) {
    const tags = searchParams.tags?.split(',');
    const order = searchParams.order ?? 'newest';
    const posts = await getPosts({
        tags,
        newest: order === 'newest',
    });

    return (
        <main className="flex flex-col p-6 min-h-screen">
            <div className="max-w-screen-xl mx-auto relative w-full">
                <section className="w-screen-wrapper prose-neutral mx-auto max-w-screen-wrapper dark:prose-invert">
                    <h2 className='text-3xl font-bold md:text-4xl mb-8'>Recent Blog</h2>
                    <div className='animate-fade-up animate-ease-in-out mb-8'>Stay up to date with most recent blogs</div>
                    <div className='mb-8'>
                        Display&nbsp;
                        {order === 'newest' &&
                            <Link className='underline' href="/blog?order=oldest">
                                oldest
                            </Link>}
                        {order === 'oldest' &&
                            <Link className='underline' href="/blog?order=newest">
                                newest
                            </Link>}
                    </div>
                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {posts.map(post => (
                            <li key={post.slug}>
                                <Link href={`/blog/${post.slug}`} className='hover:font-semibold hover:text-primary-500 transitio text-2xl'>{post.frontmatter.title}</Link>
                                <div className='text-gray-400 text-sm mt-2'>{post.frontmatter.date}</div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main >
    )
}