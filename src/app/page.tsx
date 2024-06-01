import PageHeader from "@/components/common/PageHeader";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-white p-6">
      <div className="flex flex-col min-h-screen">
        <PageHeader />
      </div>
    </main>
  );
}
