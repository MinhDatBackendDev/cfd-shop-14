import scrollTop from "@utils/scrollTop";
import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    handleCloseMobileMenu();
    const myTimeOut = setTimeout(() => {
      scrollTop();
    }, 100);
    return () => {
      clearTimeout(myTimeOut);
    };
  }, [pathname]);

  const handleShowMobileMenu = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    $("body").addClass("mmenu-active");
  };

  const handleCloseMobileMenu = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    $("body").removeClass("mmenu-active");
  };

  return (
    <MainContext.Provider
      value={{ handleShowMobileMenu, handleCloseMobileMenu }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export const useMainContext = () => useContext(MainContext);
