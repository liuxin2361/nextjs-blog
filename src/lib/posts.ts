import fs from 'fs';
import path from 'path';

export function loadPosts(slug: string): string {
    return fs.readFileSync(path.join(process.cwd(), 'content', `${slug}.mdx`), 'utf-8');
};
