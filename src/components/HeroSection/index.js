import React from "react";
import AdvancedTechnology from "../images/Advanced-Technology.webp";
import {
  HeroContainer,
  HeroFlexDiv,
  HeroImgBox,
  HeroImg,
  HeroTextBox,
  HeroTextBoxHeading,
  HeroText,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer primary>
        <HeroFlexDiv>
          <HeroImgBox>
            <HeroImg src={AdvancedTechnology} alt="Hero Img" />
          </HeroImgBox>
          <HeroTextBox>
            <HeroTextBoxHeading>Advanced Technology</HeroTextBoxHeading>
            <HeroText>
              You may wonder why these shirts are so effective, and the answer
              lies in our advanced technology. The innovative technology used to
              make these sweat proof undershirts not only prevents sweat from
              getting on to your clothes, but it also helps to regulate your
              body temperature. These sweat proof shirts make use of a silver
              infused fabric, which helps to keep your body warm in cold
              temperatures and absorb heat in hot temperatures. This is a great
              advantage as you will stay fresh and dry all day long.
            </HeroText>
            <HeroText>
              The level of comfort of our undershirts is simply amazing as it is
              made of silky smooth material that does not irritate the skin. Due
              to the high-quality material that we use in these high-quality
              sweat-proof shirts, you can easily wear it underneath any other
              outer garment without it showing. Due to the versatile nature of
              these undershirts, you can wear them on any occasion, day or
              night. You can wear them with casual shirts, or formal wear with a
              suit and tie, and still be completely comfortable. It also offers
              a slim fit, and as such, you can choose a shirt that fits you
              perfectly.
            </HeroText>
          </HeroTextBox>
        </HeroFlexDiv>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
