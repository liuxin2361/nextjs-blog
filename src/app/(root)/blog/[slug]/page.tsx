import { BlogProps } from '@/lib/definitions';
import { getPost as getPostNotCached } from '@/lib/posts';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';

const getPost = cache(async (slug: string) => await getPostNotCached(slug));

export async function generateMetadata({ params }: BlogProps, parent: ResolvingMetadata): Promise<Metadata> {
    const { frontmatter } = await getPost(params.slug);
    return frontmatter;
};

export default async function BlogPage({ params }: { params?: { slug?: string, }; }) {
    let post;
    try {
        post = await getPost(params?.slug as string);
    } catch (e) {
        notFound();
    }

    return (
        <main className="flex flex-col p-6 min-h-screen">
            <article className="max-w-screen-xl mx-auto relative w-full prose dark:prose-invert">
                {post.content}
            </article>
        </main>
    );
}