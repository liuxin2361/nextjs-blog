import type { MDXComponents } from 'mdx/types';
import H1 from './components/ui/h1';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props) => <H1 {...props} />,
        ...components,
    }
}