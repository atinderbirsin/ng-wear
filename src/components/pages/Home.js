import React, { useRef, useEffect } from "react";
import BannerContainer from "../BannerContainer";
import CardsContainer from "../CardsContainer";
import ExclusiveSection from "../ExclusiveSection";
import HeroVideoSection from "../HeroVideoSection";
import { NavBar } from "../NavBar";
import ServicesContainer from "../ServicesContainer";
import HeroSection from "../HeroSection";
import Hero from "../HeroContainer";
import GetElement from "../GetItNow";
import Subscribe from "../Subscribe";
import Testimonials from "../testimonials";
import Footer from "../Footer";

const Home = () => {
  const NavBarRef = useRef(null);
  const BannerRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      NavBarRef.current.classList.add("sticky");
    } else {
      NavBarRef.current.classList.add("remove");
    }
  };

  const options = {
    root: null,
    rootMargin: "-88px",
    threshold: 0,
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      callbackFunction,
      options
    );

    if (BannerRef.current) intersectionObserver.observe(BannerRef.current);

    return () => {
      if (BannerRef.current) intersectionObserver.unobserve(BannerRef.current);
    };
  });

  return (
    <>
      <NavBar ref={NavBarRef} />
      <BannerContainer ref={BannerRef} />
      <ExclusiveSection />
      <HeroVideoSection />
      <ServicesContainer />
      <CardsContainer />
      <HeroSection />
      <Hero />
      <GetElement />
      <Subscribe />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
