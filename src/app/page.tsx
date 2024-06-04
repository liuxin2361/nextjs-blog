import { IndexInfo } from "@/components/ui/home/index-info";

export default function Home() {
  return (
    <div className="h-[calc(50vh-32px)] grid place-content-center relative">
      <p className="text-2xl md:text-5xl tracking-widest animate-fade-up animate-ease-in-out">
        Welcome to my website!
      </p>
      {/* <strong className="text-5xl md:text-8xl tracking-widest font-black bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-fade-up animate-ease-in-out">
        {NICK_NAME}
      </strong> */}
      <div className="animate-fade-up animate-ease-in-out">
        <IndexInfo />
      </div>
      <p className="text-base md:text-2xl text-muted-foreground tracking-widest">
        This website records my growth and efforts to become a better engineer.💪
      </p>
    </div>
  );
}
