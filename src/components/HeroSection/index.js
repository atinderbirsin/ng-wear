import React from "react";
import {
  HeroContainer,
  Container,
  HeroHeading,
  HeroSubHeading,
  HeroFlexContainer,
  HeroTextBox,
  HeroText,
  HeroVideoBox,
  HeroIFrame,
  HeroIFrameDescription,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <Container>
          <HeroHeading>Restrained by the“Rain” Under Your Arms?</HeroHeading>
          <HeroSubHeading>
            Break Free & Lift Your Arms with Confidence as High as You Like,
            Whenever you Feel Like it!
          </HeroSubHeading>
        </Container>
        <HeroFlexContainer>
          <HeroTextBox>
            <HeroText>
              Excessive sweat can easily cause you to lose focus during your
              day; it can take a toll on your work and social life, which is why
              you should switch to sweat proof undershirts from NGwear. Our
              super absorbent undershirts are sweat proof, which means you can
              enjoy your work and social gatherings with complete confidence.
            </HeroText>
            <HeroText>
              Made from breathable, flexible and odor neutralizing micro modal
              fabric, our high-quality undershirts are ideal for people who
              sweat as a result of high temperatures or health conditions such
              as hyperhidrosis. You’ll be fresh and dry all day long – you can
              wear your favorite shirts again without worrying about any sweat
              marks.
            </HeroText>
          </HeroTextBox>
          <HeroVideoBox>
            <HeroIFrame
              src="https://www.youtube.com/embed/z4VyqitFAjs"
              frameborder="0"
              height="270"
              title="Youtube Video"
              allowfullscreen
            />
            <HeroIFrameDescription>
              Functions of NGwear undershirt
            </HeroIFrameDescription>
          </HeroVideoBox>
        </HeroFlexContainer>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
