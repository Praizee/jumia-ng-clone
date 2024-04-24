import Hero from "@/components/Hero/Hero";
import HomePage from "@/components/HomePage/HomePage";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <HomePage />
    </main>
  );
}
