import React from "react";
import BannerContainer from "../BannerContainer";
import ExclusiveSection from "../ExclusiveSection";
import HeroSection from "../HeroSection";
import { NavBar } from "../NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <BannerContainer />
      <ExclusiveSection />
      <HeroSection />
    </>
  );
};

export default Home;
