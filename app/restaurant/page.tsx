import Navbar from "../components/Navbar";
import RestaurantHero from "../components/RestaurantHero";
import RestaurantChallenges from "../components/RestaurantChallenges";
import RestaurantSolution from "../components/RestaurantSolution";
import RestaurantManagerApp from "../components/RestaurantManagerApp";
import RestaurantLoyaltyProgram from "../components/RestaurantLoyaltyProgram";
import RestaurantLocalAdvantage from "../components/RestaurantLocalAdvantage";
import RestaurantPricing from "../components/RestaurantPricing";
import RestaurantVision from "../components/RestaurantVision";
import RestaurantOffer from "../components/RestaurantOffer";
import SiteFooter from "../components/SiteFooter";

export default function RestaurantPage() {
  return (
    <main id="main" className="relative min-h-screen text-foreground">
      {/* Sticky, glassy navbar (client component) */}
      <Navbar />

      {/* Hero Section */}
      <RestaurantHero />

      {/* Challenges Section */}
      <RestaurantChallenges />

      {/* Solution Section */}
      <RestaurantSolution />

      {/* Pricing Section */}
      <RestaurantPricing />

      {/* Manager App Section */}
      <RestaurantManagerApp />

      {/* Loyalty Program Section */}
      <RestaurantLoyaltyProgram />

      {/* Local Advantage Section */}
      {/* <RestaurantLocalAdvantage /> */}

      {/* Vision Section */}
      {/* <RestaurantVision /> */}

      {/* Offer Section */}
      {/* <RestaurantOffer /> */}

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
