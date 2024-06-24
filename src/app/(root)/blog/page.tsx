'use server';

import BlogPagination from '@/components/blog-pagination';
import H1 from '@/components/ui/h1';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, ORDER } from '@/constants/pagination';
import { SortOrder } from '@/lib/definitions';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function BlogPostsPage({
    searchParams
}: {
    searchParams: { tag: string, limit: number, page: number, order: SortOrder }
}) {
    const tags: string[] = searchParams.tag?.split(',');
    const order = searchParams.order ?? ORDER.NEWEST;
    const page = searchParams.page ?? DEFAULT_PAGE;
    const limit = searchParams.limit ?? DEFAULT_PAGE_SIZE;
    const { posts, pageCount } = await getPosts({
        tags,
        newest: order === ORDER.NEWEST,
        page,
        limit
    });

    return (
        <main className="flex flex-col p-6 min-h-screen">
            <div className="max-w-screen-xl mx-auto relative w-full">
                <section className="w-screen-wrapper prose-neutral mx-auto max-w-screen-wrapper dark:prose-invert">
                    <H1>Recent Blog</H1>
                    <div className='animate-fade-up animate-ease-in-out mb-8'>Stay up to date with most recent blogs</div>
                    <div className='mb-8'>
                        Display&nbsp;
                        {order === 'newest' &&
                            <Link className='underline' href={`/blog?order=${ORDER.OLDEST}`}>
                                {ORDER.OLDEST}
                            </Link>}
                        {order === 'oldest' &&
                            <Link className='underline' href={`/blog?order=${ORDER.NEWEST}`}>
                                {ORDER.NEWEST}
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
                    <div className='mt-8'>
                        <BlogPagination pageCount={pageCount} />
                    </div>
                </section>
            </div>
        </main >
    )
}