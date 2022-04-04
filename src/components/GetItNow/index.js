import React from "react";
import { ButtonLink } from "../BannerContainer/BannerElements";
import { Icon } from "../NavBar/NavbarElements";
import { GetContainer, Container, Heading, Text, Strong } from "./GetElements";

function GetElement() {
  return (
    <>
      <GetContainer>
        <Container>
          <Heading>GET IT NOW</Heading>
          <Text>
            This undershirt offers a combination of amazing features, including
            state-of-the art sweat proof technology. This is ideal for men who
            want to protect their clothes from excessive sweat and those
            annoying sweat marks.
          </Text>
          <Text>
            With our sweat proof shirt you will no longer have to worry about
            those dreaded yellow stains, as our undershirt effectively absorbs
            perspiration and eliminates any marks on your clothing. In fact, we
            have so much confidence in our shirts, that we offer our valued
            customers a <Strong>100% money-back guarantee.</Strong>
          </Text>
          <Text>
            NGwear undershirts are made to contain perspiration and protect your
            outer garments. The fabric is super-absorbent and will prevent sweat
            from penetrating your clothes.
          </Text>
          <ButtonLink to="/" border="true">
            BUY NOW <Icon className="fa-solid fa-chevron-right icon" />
          </ButtonLink>
        </Container>
      </GetContainer>
    </>
  );
}

export default GetElement;
