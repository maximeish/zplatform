import React from "react";
import Nav from "../components/Nav";
import WelcomeSection from "../components/WelcomeSection";
import Footer from "../components/Footer";

const LandingView = () => (
  <div className="flex flex-col overflow-hidden">
    <Nav />
    <main className="flex-grow">
      <WelcomeSection />
    </main>

    <Footer />
  </div>
);

export default LandingView;
