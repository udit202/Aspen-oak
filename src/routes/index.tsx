import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Residences } from "@/components/Residences";
import { Experience } from "@/components/Experience";
import { Investment } from "@/components/Investment";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aspen Oak Realty — Elevating Real Estate Experiences" },
      { name: "description", content: "A private brokerage of architectural residences in Dubai, Aspen, the Côte d'Azur and the Hamptons. Discreet representation for an elite global clientele." },
      { property: "og:title", content: "Aspen Oak Realty — Elevating Real Estate Experiences" },
      { property: "og:description", content: "A private brokerage of architectural residences for an elite global clientele." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Story />
      <Residences />
      <Experience />
      <Investment />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
