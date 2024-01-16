import AuthModal from "@components/AuthModal";
import BackToTopButton from "@components/BackToTopButton";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MobileMenu from "@components/MobileMenu";
import MobileOverlay from "@components/MobileOverlay";
import AuthContextProvider from "@contexts/AuthContext";
import MainContextProvider from "@contexts/MainContext";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <MainContextProvider>
      <AuthContextProvider>
        <div className="page-wrapper">
          <Header />
          <Outlet />
          <Footer />
        </div>
        <BackToTopButton />
        <MobileOverlay />
        <MobileMenu />
        <AuthModal />
      </AuthContextProvider>
    </MainContextProvider>
  );
};

export default MainLayout;
