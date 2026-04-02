import React from "react";
import HeroSection from "./HeroSection";
import LookbookGrid from "./LookbookGrid";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FeaturedProducts from "./FeaturedProducts";
import { Helmet } from "react-helmet-async";
const LandingPage = () => {
  return (
    <>
      <Helmet>
        {/* Đây là dòng sẽ hiện lên Google */}
        <title>Rovian Watch - Thương hiệu đồng hồ số 1 Việt Nam</title>

        <meta
          name="description"
          content="Khám phá bộ sưu tập đồng hồ Rovian cao cấp, tuyệt tác cơ khí với thiết kế sang trọng. Thương hiệu đồng hồ uy tín hàng đầu Việt Nam."
        />

        <meta
          property="og:title"
          content="Rovian Watch - Thương hiệu đồng hồ số 1 Việt Nam"
        />
        <meta
          property="og:description"
          content="Tuyệt tác thời gian dành cho người sành điệu."
        />
        <meta property="og:image" content="link-anh-thumbnail-cua-ban.jpg" />
      </Helmet>
      <div className="min-h-screen bg-black text-white font-['Google_Sans_Flex']">
        {/* HERO SECTION (LOOKBOOK) */}
        <HeroSection />

        {/* LOOKBOOK GRID */}
        <LookbookGrid />

        <FeaturedProducts />

        <AboutSection />

        <ContactSection />
      </div>
    </>
  );
};

export default LandingPage;
