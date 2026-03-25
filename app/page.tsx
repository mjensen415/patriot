import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CoffeeSection from "@/components/CoffeeSection";
import AffiliatePicks from "@/components/AffiliatePicks";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <CoffeeSection />
        <AffiliatePicks />
        <EmailSignup />
      </div>
      <Footer />
    </main>
  );
}
