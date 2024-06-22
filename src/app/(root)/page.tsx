import HomeMain from "@/components/ui/home/home-main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="flex flex-col p-6 min-h-screen">
      <HomeMain />
    </main>
  );
}
