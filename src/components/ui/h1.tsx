export default function H1({ children }: { children?: React.ReactNode }) {
    return <h1 className="text-3xl font-bold md:text-4xl mb-8">{children}</h1>;
}