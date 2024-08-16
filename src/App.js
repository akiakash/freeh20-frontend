import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import FeatureSection from "./sections/FeatureSection";
import AdvertiseSection from "./sections/AdvertiseSection";
import DistributionSection from "./sections/DistributionSection";
import PartnersSection from "./sections/PartnersSection";
import Footer from "./components/Footer";

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
              <AdvertiseSection />
              <DistributionSection />
              <PartnersSection />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
