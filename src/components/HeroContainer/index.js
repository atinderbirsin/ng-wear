import React from "react";
import {
  Container,
  HeroHeading,
  HeroSubHeading,
} from "../HeroVideoSection/HeroElements";
import {
  HeroContainer,
  HeroFlexDiv,
  HeroTextBox,
  HeroText,
  HeroImgBox,
  HeroImg,
} from "../HeroSection/HeroElements";
import { List, ListHeading, ListItem } from "./HeroElements";
import banner5 from "../images/banner-5-resize.webp";

function Hero() {
  return (
    <>
      <HeroContainer>
        <Container>
          <HeroHeading>India’s First Sweatproof Undershirt</HeroHeading>
          <HeroSubHeading>
            NGwear is bringing functional sweat and odor-fighting tech to India
            to empower your daily life.
          </HeroSubHeading>
        </Container>
        <HeroFlexDiv>
          <HeroTextBox>
            <HeroText>
              If you are looking to get rid of excessive sweat that shows on
              your clothing, our sweat proof undershirt offers the perfect
              solution. You can now feel comfortable, look great, and regain
              your confidence without worrying about sweat marks or bad odor.
            </HeroText>
            <List>
              <ListHeading>
                Here are some of the key benefits that our undershirts offer:
              </ListHeading>

              <ListItem>Contains excessive sweat</ListItem>
              <ListItem>
                Protects your clothes from unsightly sweat marks
              </ListItem>
              <ListItem>Keeps you fresh and dry all day long</ListItem>
              <ListItem>Prevents sweat stains and odor</ListItem>
              <ListItem>
                Effectively absorbs perspiration to keep your outer garments dry
              </ListItem>
              <ListItem>
                Ultra-comfortable and stylish, offering a slim fit for all body
                types
              </ListItem>
            </List>
          </HeroTextBox>
          <HeroImgBox>
            <HeroImg src={banner5} alt="Hero Img" />
          </HeroImgBox>
        </HeroFlexDiv>
      </HeroContainer>
    </>
  );
}

export default Hero;
