import React from "react";
import { Icon } from "../NavBar/NavbarElements";
import {
  BannerSection,
  BannerImg,
  BannerTextContainer,
  BannerDiv,
  BannerHeading,
  BannerText,
  ButtonContainer,
  ButtonLink,
} from "./BannerElements";
// import bannerImg from "../images/banner.jpg";

const BannerContainer = () => {
  return (
    <>
      <BannerSection>
        {/* <BannerImg src={bannerImg} alt="banner" /> */}
        <BannerImg />
        <BannerTextContainer>
          <BannerDiv>
            <BannerHeading>
              Forget Sweaty Armpits and Stained Shirts!
            </BannerHeading>
            <BannerText>
              NGwear sweatproof undershirts fight odor and block underarm sweat.
              This way you are guaranteed to stay dry and fresh regardless of
              how warm it gets. And your precious shirts are guaranteed to last
              longer.
            </BannerText>
          </BannerDiv>
          <ButtonContainer>
            <ButtonLink
              to="/"
              color="true"
              backgroundcolor="true"
              radius="true"
            >
              SHOP NOW
              <Icon className="fa-solid fa-chevron-right" />
            </ButtonLink>
          </ButtonContainer>
        </BannerTextContainer>
      </BannerSection>
    </>
  );
};

export default BannerContainer;
