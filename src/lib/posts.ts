import fs from 'fs';
import path from 'path';
import { CompileMDXResult, compileMDX } from 'next-mdx-remote/rsc';

export function loadPosts(slug: string): string {
    const filename = slug.endsWith('.mdx') ? slug : `${slug}.mdx`;

    return fs.readFileSync(path.join(process.cwd(), 'content', filename), 'utf-8');
};

export async function getPost(slug: string): Promise<CompileMDXResult<Record<string, any>>> {
    const source = loadPosts(slug);
    return await compileMDX({
        source,
        // Optionally pass remark/rehype plugins
        options: {
            parseFrontmatter: true
        },

    });
}