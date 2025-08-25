// app/page.tsx
import AmbientBackground from "./components/AmbientBackround";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowPoints from "./components/HowPoints";
import AppScreens from "./components/AppScrean";
import RestaurantsCTA from "./components/RestaurantsCTA";
import Highlights from "./components/Features";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <main id="main" className="relative min-h-screen text-foreground">
      {/* Subtle animated background behind everything */}
      <AmbientBackground />

      {/* Sticky, glassy navbar (client component) */}
      <Navbar />

      {/* Hero (no anchor needed) */}
      <Hero />

      {/* Anchored sections for the navbar */}
      <section id="how-points">
        <HowPoints />
      </section>

      <section id="screens">
        <AppScreens />
      </section>

      <section id="restaurants">
        <RestaurantsCTA />
      </section>

      <section id="features">
        <Highlights />
      </section>

      {/* Footer also serves as the #download anchor for the navbar CTA */}
      <section id="download">
        <SiteFooter />
      </section>
    </main>
  );
}
