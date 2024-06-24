import { PATHS } from '@/constants/path';
import { BlogProps, BlogPost } from '@/lib/definitions';
import { getPost as getPostNotCached } from '@/lib/posts';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';

const getPost = cache(async (slug: string) => await getPostNotCached(slug));

export async function generateMetadata({ params }: BlogProps, parent: ResolvingMetadata): Promise<Metadata> {
    const { frontmatter } = await getPost(params.slug);
    return frontmatter;
};

export default async function BlogPage({ params }: { params?: { slug?: string, }; }) {
    let post: BlogPost;
    try {
        post = await getPost(params?.slug as string);
    } catch (e) {
        notFound();
    }

    return (
        <main className="flex flex-col p-6 min-h-screen">
            <div className='flex space-x-2 mb-8 max-w-screen-xl mx-auto w-full'>
                {post.frontmatter.tags?.map(tag =>
                    <Link key={tag} href={`${PATHS.BLOG_PATH}?tag=${tag}`} className='underline'>#{tag}</Link>
                )}
            </div>
            <article className="max-w-screen-xl mx-auto relative w-full prose dark:prose-invert">
                {post.content}
            </article>
        </main>
    );
}