import { PATHS } from '@/constants/path';
import { BlogProps, BlogPost } from '@/lib/definitions';
import { getPost as getPostNotCached, getPosts } from '@/lib/posts';
import { sizes, variants } from '@/lib/variants';
import { ChevronLeft } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';

const getPost = cache(async (slug: string) => await getPostNotCached(slug));

// combines with dynamic toute segments to statically generate routes
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
    const { posts } = await getPosts({ limit: 1000 });
    return posts.map(post => ({
        slug: post.slug,
    }));
}

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
            <div className="flex max-w-screen-xl mx-auto w-full mb-8">
                <Link href={`${PATHS.BLOG_PATH}`} className={`${variants['ghost']} ${sizes['default']} flex items-center space-x-2 text-sm`}>
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                </Link>
            </div>
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