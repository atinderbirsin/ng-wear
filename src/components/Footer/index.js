import React from "react";
import { Icon } from "../NavBar/NavbarElements";
import {
  FooterSection,
  Container,
  FooterList,
  FooterListHeading,
  ListItem,
  FooterIcon,
  CopyrightContainer,
  CenteredContainer,
  CopyrightText,
  SocialLinks,
  HoverLink,
} from "./FooterElements";

const Footer = () => {
  const Link = (props) => <a {...props} children={props.children} />;
  // const FooterIcon = (props) => <i {...props} children={props.children} />;

  return (
    <>
      <FooterSection>
        <Container>
          <FooterList>
            <FooterListHeading>Quick Links</FooterListHeading>
            <ListItem to="/">SLIM FIT - CREWNECK</ListItem>
            <ListItem to="/">SLIM FIT - DEEP V-NECK</ListItem>
            <ListItem to="/">SLIM FIT - V-NECK</ListItem>
            <ListItem to="/">SHOP</ListItem>
            {/* <a href={"mailto:" + this.props.email}>email</a> */}
            <ListItem to="/">PAYMENT METHODS</ListItem>
          </FooterList>
          <FooterList>
            <FooterListHeading>Important Info</FooterListHeading>
            <ListItem to="/">FAQ</ListItem>
            <ListItem to="/">Terms & Conditions</ListItem>
            <ListItem to="/">Return & Exchanges</ListItem>
            <ListItem to="/">Undershirt Care</ListItem>
            <ListItem to="/">About Us</ListItem>
            <ListItem to="/">Reviews</ListItem>
            <ListItem to="/">Add Review</ListItem>
            <ListItem to="/">Contact Us</ListItem>
          </FooterList>
          <FooterList>
            <FooterListHeading>Contacts</FooterListHeading>

            <ListItem to="/">
              <Icon as={FooterIcon} className="fa-solid fa-map-pin" /> G.H.S.
              IMPEX CABIN NO-6, MADHOK BUSINESS CENTRE NEAR AARTI CHOWK,
              FEROZEPUR ROAD LUDHIANA 141001, PUNJAB INDIA
            </ListItem>
            <ListItem as={Link} href={`tel:0161-5090428`}>
              <Icon as={FooterIcon} className="fa-solid fa-phone" />
              0161-5090428
            </ListItem>
            <ListItem as={Link} href="mailto:support@ngwear.in">
              <Icon as={FooterIcon} className="fa-solid fa-envelope" />
              support@ngwear.in
            </ListItem>
          </FooterList>
        </Container>
      </FooterSection>
      <CopyrightContainer>
        <CenteredContainer>
          <CopyrightText>
            Copyright © NG Wear, 2021 All Rights Reserved.
          </CopyrightText>
          <SocialLinks>
            <ListItem to="/" as={HoverLink}>
              <Icon className="fa-brands fa-facebook-f" />
            </ListItem>
            <ListItem to="/" as={HoverLink}>
              <Icon className="fa-brands fa-twitter" />
            </ListItem>
            <ListItem to="/" as={HoverLink}>
              <Icon className="fa-brands fa-google-plus-g" />
            </ListItem>
            <ListItem to="/" as={HoverLink}>
              <Icon className="fa-brands fa-instagram" />
            </ListItem>
            <ListItem to="/" as={HoverLink}>
              <Icon className="fa-brands fa-youtube" />
            </ListItem>
          </SocialLinks>
        </CenteredContainer>
      </CopyrightContainer>
    </>
  );
};

export default Footer;
