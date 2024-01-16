import { useMainContext } from "@contexts/MainContext";
import React from "react";

const MobileOverlay = () => {
  const { handleCloseMobileMenu } = useMainContext();
  return (
    <div className="mobile-menu-overlay" onClick={handleCloseMobileMenu} />
  );
};

export default MobileOverlay;
