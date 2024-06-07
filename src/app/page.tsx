import Media from "@/components/media";
import { buttonVariants } from "@/components/ui/button";
import { IndexInfo } from "@/components/ui/home/index-info";
import { PATHS } from "@/constants/path";
import Link from "next/link";

export default function Home() {
  let delay: number = 0;
  const getDelay = () => (delay += 100);

  return (
    <div className="h-[calc(60vh-16px)] grid place-content-center relative">
      <p className="text-2xl md:text-5xl tracking-widest animate-fade-up animate-ease-in-out" style={{ animationDelay: `${getDelay}ms` }}>
        Welcome to my website!
      </p>
      <div className="animate-fade-up animate-ease-in-out" style={{ animationDelay: `${getDelay}ms` }}>
        <IndexInfo />
      </div>
      <p className="text-base md:text-2xl text-muted-foreground tracking-widest" style={{ animationDelay: `${getDelay}ms` }}>
        This website records my growth and efforts to become a better engineer.💪
      </p>
      <div className="flex space-x-4 animate-fade-up animate-ease-in-out mt-4" style={{ animationDelay: `${getDelay}ms` }}>
        <Link href={PATHS.BLOG_PATH} className={buttonVariants({ variant: 'outline' })}>
          Blog
        </Link>
        <Link href={PATHS.ABOUT_PATH} className={buttonVariants({ variant: 'outline' })}>
          About
        </Link>
      </div>
      <ul className="flex space-x-4 animate-fade-up animate-ease-in-out mt-4" style={{ animationDelay: `${getDelay}ms` }}>
        <Media />
      </ul>
    </div>
  );
}
