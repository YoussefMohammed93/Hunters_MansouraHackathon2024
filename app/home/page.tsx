import { FAQ } from "./_components/faq";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { OffersSection } from "./_components/offers-section";

export default function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <OffersSection />
      <FAQ />
      <Footer />
    </>
  );
}
