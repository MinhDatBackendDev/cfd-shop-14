import AuthModal from "@components/AuthModal";
import BackToTopButton from "@components/BackToTopButton";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MobileMenu from "@components/MobileMenu";
import MobileOverlay from "@components/MobileOverlay";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Outlet />
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
