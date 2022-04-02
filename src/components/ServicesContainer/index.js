import React from "react";
import {
  ServicesSection,
  SevicesDiv,
  ServiceContainer,
  IconContainer,
  FreeShippingText,
  Heading,
  Text,
  SecurePaymentText,
  MoneyBackText,
  ProductProsDiv,
  SubHeading,
  ProductProsHeading,
} from "./ServicesElements";

import { Icon } from "../NavBar/NavbarElements";

const ServicesContainer = () => {
  return (
    <>
      <ServicesSection>
        <SevicesDiv>
          <ServiceContainer className="container-1">
            <IconContainer>
              <Icon className="fa-solid fa-truck-fast icon" />
            </IconContainer>
            <FreeShippingText>
              <Heading>Free Shipping</Heading>
              <Text>
                All orders are delivered FREE to your doorstep. Free shipping
                will be selected by default at checkout on all orders.
              </Text>
            </FreeShippingText>
          </ServiceContainer>
          <ServiceContainer className="container-2">
            <IconContainer>
              <Icon className="fa-solid fa-credit-card icon" />
            </IconContainer>
            <SecurePaymentText>
              <Heading>Secure Payment</Heading>
              <Text>
                We value your Security. That’s why all payments are 100% secured
                by secure server technology.
              </Text>
            </SecurePaymentText>
          </ServiceContainer>
          <ServiceContainer className="container-3">
            <IconContainer>
              <Icon className="fa-solid fa-sack-dollar" />
            </IconContainer>
            <MoneyBackText>
              <Heading>100% Money Back Guarantee</Heading>
              <Text>
                If you aren’t completely satisfied, we will return your money
                without asking any questions.
              </Text>
            </MoneyBackText>
          </ServiceContainer>
        </SevicesDiv>
        <ProductProsDiv>
          <SubHeading>What Makes</SubHeading>
          <ProductProsHeading>Our Sweat Proof Shirt Unique?</ProductProsHeading>
          <Text>
            Our sweat proof undershirts are not just ordinary shirts, they have
            been made using advanced technology. They have four layers,
            delivering the best in dryness and comfort. Our high-quality
            sweat-proof shirts are made with micro modal fabric, which is known
            to be highly absorbent; combined with Spandex, it has the ability to
            stretch effectively and as such, will fit you perfect – not to
            mention being extremely comfortable as well.
          </Text>
          <Text>
            NGwear undershirts are stylish and designed to fit any body size and
            shape. Yellow stains that are usually visible on brighter shirts is
            a thing of the past – our undershirts come with antiperspirants.
            With our stylish undershirts you’ll help protect your favorite
            clothes and cleaning will be very easy.
          </Text>
          <Text>
            No sweat patches. Increased Confidence. NGwear puts you back in
            control.
          </Text>
        </ProductProsDiv>
      </ServicesSection>
    </>
  );
};

export default ServicesContainer;
