import React from "react";
import HeroSection from "./HeroSection";
import LookbookGrid from "./LookbookGrid";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FeaturedProducts from "./FeaturedProducts";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-['Google_Sans_Flex']">
      {/* HERO SECTION (LOOKBOOK) */}
      <HeroSection />

      {/* LOOKBOOK GRID */}
      <LookbookGrid />

      <FeaturedProducts />

      <AboutSection />

      <ContactSection />
    </div>
  );
};

export default LandingPage;
