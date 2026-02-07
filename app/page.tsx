"use client";

import { useAppStore } from "./store/useAppStore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import CompanyLogoSection from "./components/sections/CompanyLogoSection";
import ServiceFeaturesSection from "./components/sections/ServiceFeaturesSection";
import FindnStrengthsSection from "./components/sections/FindnStrengthsSection";
import VideoSection from "./components/sections/VideoSection";
import FeaturedFunctionsSection from "./components/sections/FeaturedFunctionsSection";
import CustomerVoiceSection from "./components/sections/CustomerVoiceSection";
import PricingSection from "./components/sections/PricingSection";
import ContactSection from "./components/sections/ContactSection";
import DemoModal from "./components/modals/DemoModal";
import TrialModal from "./components/modals/TrialModal";
import LoginModal from "./components/modals/LoginModal";

export default function Home() {
  const openDemoModal = useAppStore((state) => state.openDemoModal);
  const openTrialModal = useAppStore((state) => state.openTrialModal);
  const openLoginModal = useAppStore((state) => state.openLoginModal);

  return (
    <>
      <Navbar
        onLoginClick={openLoginModal}
        onDemoClick={openDemoModal}
        onTrialClick={openTrialModal}
      />

      <HeroSection onTrialClick={openTrialModal} />
      <CompanyLogoSection />
      <ServiceFeaturesSection />
      <FindnStrengthsSection />
      <VideoSection />
      <FeaturedFunctionsSection />
      <CustomerVoiceSection />
      <PricingSection />
      <ContactSection />
      <Footer />

      {/* Modals */}
      <DemoModal />
      <TrialModal />
      <LoginModal />
    </>
  );
}
