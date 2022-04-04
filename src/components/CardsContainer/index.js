import React from "react";
import {
  CardsSection,
  Container,
  CardsSubHeading,
  CardsText,
  CardsGridContainer,
  Card,
  CardImgContainer,
  SaleText,
  CardImg,
  ProductName,
  Rating,
  Reveiws,
  Price,
  StrikeThrough,
  BtnContainer,
  Overlay,
} from "./CardsElements";
import crewneck from "../images/CREWNECK.webp";
import deepvneck from "../images/DEEP-V-NECK.webp";
import vneck from "../images/V-NECK.webp";
import { Icon } from "../NavBar/NavbarElements";
import { ButtonLink } from "../BannerContainer/BannerElements";

const CardsContainer = () => {
  return (
    <>
      <CardsSection>
        <Container>
          <CardsSubHeading>
            MEN <br /> Collection
          </CardsSubHeading>
          <CardsText>
            Checkout our sweat-proof undershirts for men. We have 3 designs
            certain to fit your needs and keep you dry no matter how ‘hot’ the
            situation gets.
          </CardsText>
        </Container>

        <CardsGridContainer>
          <Card to="/">
            <CardImgContainer>
              <CardImg src={crewneck} alt="Product" />
              <SaleText>Sale!</SaleText>
              <Icon className="fa-solid fa-circle-plus" />
              <Overlay />
            </CardImgContainer>
            <ProductName>SLIM FIT - CREWNECK</ProductName>
            <Rating>
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
            </Rating>
            <Reveiws>(4 customer reviews)</Reveiws>
            <Price>
              <StrikeThrough>
                <del>&#8377; 2,499.00</del>
              </StrikeThrough>
              &#8377; 1,250.00
            </Price>
          </Card>
          <Card to="/">
            <CardImgContainer>
              <CardImg src={deepvneck} alt="Product" />
              <SaleText>Sale!</SaleText>
              <Icon className="fa-solid fa-circle-plus" />
              <Overlay />
            </CardImgContainer>
            <ProductName>SLIM FIT - DEEP V-NECK</ProductName>
            <Rating>
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
            </Rating>
            <Reveiws>(13 customer reviews)</Reveiws>
            <Price>
              <StrikeThrough>
                <del>&#8377; 2,499.00</del>
              </StrikeThrough>
              &#8377; 1,250.00
            </Price>
          </Card>
          <Card to="/">
            <CardImgContainer>
              <CardImg src={vneck} alt="Product" />
              <SaleText>Sale!</SaleText>
              <Icon className="fa-solid fa-circle-plus icon" />
              <Overlay />
            </CardImgContainer>
            <ProductName>SLIM FIT - V-NECK</ProductName>
            <Rating>
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
            </Rating>
            <Reveiws>(14 customer reviews)</Reveiws>
            <Price>
              <StrikeThrough>
                <del>&#8377; 2,499.00</del>
              </StrikeThrough>
              &#8377; 1,250.00
            </Price>
          </Card>
        </CardsGridContainer>

        <BtnContainer>
          <ButtonLink to="/" border="true" hovershadow="true">
            EXPLORE ALL <Icon className="fa-solid fa-chevron-right icon" />
          </ButtonLink>
        </BtnContainer>
      </CardsSection>
    </>
  );
};

export default CardsContainer;
