import React from "react";
import IntroSection from "./IntroSection";
import HotProductSection from "./HotProductSection";
import DealSection from "./DealSection";
import BrandSection from "./BrandSection";
import FeaturedSection from "./FeaturedSection";
import ServiceSection from "./ServiceSection";
import GetDealSection from "./GetDealSection";
import useHomePage from "./useHomePage";

const HomePage = () => {
  const {
    introProps,
    hotProductProps,
    dealProps,
    brandProps,
    featureProps,
    serviceProps,
    getDealProps,
  } = useHomePage();

  return (
    <main className="main">
      <IntroSection {...introProps} />
      <HotProductSection {...hotProductProps} />
      <div className="mb-7 mb-lg-11" />
      <DealSection {...dealProps} />
      <BrandSection {...brandProps} />
      <div className="container">
        <hr className="mt-3 mb-6" />
      </div>
      <div className="container">
        <hr className="mt-5 mb-6" />
      </div>
      <FeaturedSection {...featureProps} />
      <div className="container">
        <hr className="mt-5 mb-0" />
      </div>
      <ServiceSection {...serviceProps} />
      <GetDealSection {...getDealProps} />
    </main>
  );
};

export default HomePage;
