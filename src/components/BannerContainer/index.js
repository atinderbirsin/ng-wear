import React from "react";
import {
  BannerSection,
  BannerImg,
  BannerTextContainer,
  BannerDiv,
  BannerHeading,
  BannerText,
  ButtonContainer,
  Btn,
  BtnIcon,
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
            <Btn>
              <ButtonLink to="/">SHOP NOW </ButtonLink>
              <BtnIcon>
                <i class="fa-solid fa-chevron-right"></i>
              </BtnIcon>
            </Btn>
          </ButtonContainer>
        </BannerTextContainer>
      </BannerSection>
    </>
  );
};

export default BannerContainer;
