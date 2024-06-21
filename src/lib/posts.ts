import fs from 'fs';
import path from 'path';
import { CompileMDXResult, compileMDX } from 'next-mdx-remote/rsc';

export function loadPosts(slug: string): string {
    const decodeSlug: string = decodeURIComponent(slug);
    const filename: string = decodeSlug.endsWith('.mdx') ? decodeSlug : `${decodeSlug}.mdx`;

    return fs.readFileSync(path.join(process.cwd(), 'content', filename), 'utf-8');
};

/**
 * get single blog
 */
export async function getPost(slug: string): Promise<CompileMDXResult<Record<string, any>>> {
    const source = loadPosts(slug);
    return await compileMDX({
        source,
        // Optionally pass remark/rehype plugins
        options: {
            parseFrontmatter: true
        },
    });
};

/**
 * Get multiple blogs
 */
export async function getPosts({
    sortByDate = false,
    page = 1,
    limit = 10,
    tags = [] }: {
        sortByDate?: boolean,
        page?: number,
        limit?: number,
        tags?: string[]
    }): Promise<{ frontmatter: Record<string, any>; slug: string; }[]> {
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

    let filteredPosts = posts;

    if (tags.length > 0) {
        filteredPosts = filteredPosts.filter(
            post => post.frontmatter.tags && post.frontmatter.tags.some(
                (tag: string) => tags.includes(tag)
            )
        );
    }

    return filteredPosts;
}