import fs from 'fs';
import path from 'path';
import { CompileMDXResult, compileMDX } from 'next-mdx-remote/rsc';
import H1 from '@/components/ui/h1';
import { BlogPost, Post } from './definitions';

export function loadPosts(slug: string): string {
    const decodeSlug: string = decodeURIComponent(slug);
    const filename: string = decodeSlug.endsWith('.mdx') ? decodeSlug : `${decodeSlug}.mdx`;

    return fs.readFileSync(path.join(process.cwd(), 'content', filename), 'utf-8');
};

/**
 * get single blog
 */
export async function getPost(slug: string): Promise<BlogPost> {
    const source = loadPosts(slug);
    return await compileMDX({
        source,
        // Optionally pass remark/rehype plugins
        options: {
            parseFrontmatter: true
        },
        components: {
            // Add custom components here
            h1: H1,
        },
    });
};

/**
 * Get multiple blogs
 */
export async function getPosts({
    newest = true,
    page = 1,
    limit = 10,
    tags = [] }: {
        newest?: boolean,
        page?: number,
        limit?: number,
        tags?: string[]
    }): Promise<{
        posts: Post[];
        pageCount: number;
    }> {
    const files = fs.readdirSync(path.join(process.cwd(), 'content'));

    const posts = await Promise.all(
        files.map(async filename => {
            const { frontmatter } = await getPost(filename);
            return {
                frontmatter,
                slug: filename.replace('.mdx', '')
            }
        })
    );

    let filteredPosts: Post[] = posts;

    if (tags.length > 0) {
        filteredPosts = filteredPosts.filter(
            // TODO frontmatter 类型未定义
            post => post.frontmatter.tags && post.frontmatter.tags.some(
                (tag: string) => tags.includes(tag)
            )
        );
    }

    if (newest) {
        // sorted by the newest
        filteredPosts.sort(
            (a, b) => {
                const aDate = new Date(a.frontmatter.date).getTime();
                const bDate = new Date(b.frontmatter.date).getTime();
                return bDate - aDate;
            }
        );
    } else {
        // sorted by the oldest
        filteredPosts.sort(
            (a, b) => {
                const aDate = new Date(a.frontmatter.date).getTime();
                const bDate = new Date(b.frontmatter.date).getTime();
                return aDate - bDate;
            }
        );
    }

    const startIndex: number = (page - 1) * limit; // page=1 ,start=0
    const endIndex: number = page * limit; // page=1 ,end=10

    return {
        posts: filteredPosts.slice(startIndex, endIndex),
        pageCount: Math.ceil(filteredPosts.length / limit)
    };
}