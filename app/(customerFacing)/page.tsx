import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import ProductSection from "@/components/shared/ProductSection";
import TopHeader from "@/components/shared/TopHeader";

export default async function Home() {
  return (
    <main className="w-[98%] md:w-[90%] m-auto max-w-[1600px] mb-56">
      <div>
        <TopHeader />
        <Header />
        <Hero />
        <ProductSection />
      </div>
    </main>
  );
}
