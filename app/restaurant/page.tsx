import Navbar from "../components/Navbar";
import RestaurantsHero from "../components/RestaurantsHero";
import RestaurantsFeatures from "../components/RestaurantsFeatures";
import RestaurantsPricing from "../components/RestaurantsPricing";
import RestaurantsTestimonials from "../components/RestaurantsTestimonials";
import RestaurantsCTA from "../components/RestaurantsCTA";
import RestaurantsFooter from "../components/RestaurantsFooter";

export default function RestaurantsPage() {
  return (
    <main id="main" className="relative min-h-screen text-foreground">
      {/* Sticky, glassy navbar (client component) */}
      <Navbar />

      {/* Hero Section */}
      <RestaurantsHero />

      {/* Features Section */}
      <section id="features">
        <RestaurantsFeatures />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <RestaurantsPricing />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <RestaurantsTestimonials />
      </section>

      {/* CTA Section */}
      <section id="cta">
        <RestaurantsCTA />
      </section>

      {/* Footer */}
      <RestaurantsFooter />
    </main>
  );
}
