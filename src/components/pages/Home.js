import React from "react";
import BannerContainer from "../BannerContainer";
import CardsContainer from "../CardsContainer";
import ExclusiveSection from "../ExclusiveSection";
import HeroVideoSection from "../HeroVideoSection";
import { NavBar } from "../NavBar";
import ServicesContainer from "../ServicesContainer";
import HeroSection from "../HeroSection";
import Hero from "../HeroContainer";
import GetElement from "../GetItNow";

const Home = () => {
  return (
    <>
      <NavBar />
      <BannerContainer />
      <ExclusiveSection />
      <HeroVideoSection />
      <ServicesContainer />
      <CardsContainer />
      <HeroSection />
      <Hero />
      <GetElement />
    </>
  );
};

export default Home;
