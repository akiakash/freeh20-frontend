import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import FeatureSection from "./sections/FeatureSection";
import AdvertiseSection from "./pages/AdvertiseSection";
import DistributionSection from "./pages/DistributionSection";
import AdCarousel from "./sections/AdCarousel";
import InfoSection from "./sections/InfoSection";
import PartnersSection from "./sections/PartnersSection";
import Footer from "./components/Footer";
import HeroAdvertise from "./pages/Advertise/Hero";
import AdvertisePage from "./pages/AdvertisePage";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeatureSection />
              {/* <AdCarousel /> */}
              <InfoSection />
              {/* <AdvertiseSection /> */}
              {/* <DistributionSection />
              <PartnersSection /> */}
            </>
          }
        />
        <Route path="/advertise" element={<AdvertiseSection />} />
        <Route path="/distribute" element={<AdvertisePage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
