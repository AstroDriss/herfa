import About from "@/components/landing/About";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Stats from "@/components/landing/Stats";
import Why from "@/components/landing/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <hr />
      <Stats />
      <Why />
      <Services />
    </>
  );
}
