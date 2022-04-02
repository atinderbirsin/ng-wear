import React from "react";
import BannerContainer from "../BannerContainer";
import ExclusiveSection from "../ExclusiveSection";
import HeroSection from "../HeroSection";
import { NavBar } from "../NavBar";
import ServicesContainer from "../ServicesContainer";

const Home = () => {
  return (
    <>
      <NavBar />
      <BannerContainer />
      <ExclusiveSection />
      <HeroSection />
      <ServicesContainer />
    </>
  );
};

export default Home;
