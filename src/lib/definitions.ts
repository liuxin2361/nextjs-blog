export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

export type SortOrder = 'newest' | 'oldest';

export type BlogProps = {
    params: { slug: string }
};

export type Frontmatter = {
    title: string;
    description?: string;
    date: string;
    tags?: string[];
};

export type BlogPost = {
    content: React.ReactElement;
    frontmatter: Frontmatter;
}

export type Post = {
    frontmatter: Frontmatter;
    slug: string;
}