import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import TopHeader from "@/components/shared/TopHeader";

export default async function Home() {
  return (
    <main className="w-[98%] md:w-[90%] m-auto">
      <div>
        <TopHeader />
        <Header />
        <Hero />
      </div>
    </main>
  );
}
