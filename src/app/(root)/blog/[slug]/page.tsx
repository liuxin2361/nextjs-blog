import { MDXRemote } from 'next-mdx-remote/rsc';
import { loadPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export default function BlogPage({ params, }: { params?: { slug?: string, }; }) {
    let markdown: string;
    try {
        markdown = loadPosts(params?.slug as string);
    } catch (e) {
        notFound();
    }

    return (
        <main className="flex flex-col p-6 min-h-screen">
            <article className="max-w-screen-xl mx-auto relative w-full">
                <MDXRemote source={markdown} />
            </article>
        </main>
    );
}