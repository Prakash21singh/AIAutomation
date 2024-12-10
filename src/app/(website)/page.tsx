import { NavBar } from "@/components/section/Landing/NavBar";
import { Hero } from "@/components/section/Landing/Hero";
import { Feature } from "@/components/section/Landing/Feature";
import { Solution } from "@/components/section/Landing/Solution";
import { Product } from "@/components/section/Landing/Product";
import { Pricing } from "@/components/section/Landing/Pricing";
import { Testimonial } from "@/components/section/Landing/Testimonial";
import { Footer } from "@/components/section/Landing/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Feature />
        <Solution />
        <Product />
        <Pricing />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
