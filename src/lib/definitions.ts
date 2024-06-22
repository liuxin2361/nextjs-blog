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