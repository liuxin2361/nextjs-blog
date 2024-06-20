import { getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params?: { slug?: string } }, parent: string) {
    const { frontmatter } = await getPost(params?.slug as string);
    return frontmatter;
};

export default async function BlogPage({ params, }: { params?: { slug?: string, }; }) {
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