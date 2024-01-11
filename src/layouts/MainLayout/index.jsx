import AuthModal from "@components/AuthModal";
import BackToTopButton from "@components/BackToTopButton";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MobileMenu from "@components/MobileMenu";
import MobileOverlay from "@components/MobileOverlay";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>

      <BackToTopButton />

      <MobileOverlay />

      <MobileMenu />

      <AuthModal />
    </>
  );
};

export default MainLayout;
