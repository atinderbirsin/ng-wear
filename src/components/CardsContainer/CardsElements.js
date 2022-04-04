import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "../NavBar/NavbarElements";

export const CardsSection = styled.div`
  width: 100%;
  padding: 5.4rem 0;
`;

export const Container = styled.div`
  text-align: center;
  font-size: 2.2rem;
  max-width: 108rem;
  margin: 0 auto;
  color: rgb(51, 51, 51);
  margin-bottom: 3rem;
`;

export const CardsSubHeading = styled.div`
  padding-bottom: 1rem;
`;

export const CardsText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const CardsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 108rem;
  margin: 0 auto;
  gap: 4rem;
  margin-bottom: 3rem;
`;

export const Card = styled(Link)`
  display: block;
  text-align: center;
  width: 100%;
  text-decoration: none;
  color: rgb(51, 51, 51);
  margin-bottom: 4.1rem;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-indez: 1;
`;

export const CardImgContainer = styled.div`
  position: relative;

  ${Icon} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%-50%);
    font-size: 3rem;
    color: rgb(3, 85, 135);
    display: none;
    transition: all 0.2s ease;
    z-indez: 2;
  }

  &:hover {
    ${Icon} {
      display: block;
    }

    ${Overlay} {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const CardImg = styled.img`
  width: 100%;
  display: block;
`;

export const SaleText = styled.div`
  position: absolute;
  padding: 0.7rem 1.8rem;
  color: #fff;
  background-color: #ef8f61;
  font-size: 2rem;
  top: 1rem;
  left: 1rem;
  border-radius: 0.3rem;
  font-weight: 500;
`;

export const ProductName = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem 0;
`;

export const Rating = styled.p`
  color: rgb(3, 85, 135);
  font-size: 1.2rem;
  border: none;
  padding-bottom: 1.8rem;
`;

export const Reveiws = styled.p`
  color: rgb(3, 85, 135);
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 2.2rem;
`;

export const Price = styled.p`
  font-weight: 700;
  color: rgb(102, 102, 102);
  font-size: 1.4rem;
`;

export const StrikeThrough = styled.span`
  font-weight: 400;
`;

export const BtnContainer = styled.div`
  width: 108rem;
  margin: 0 auto;
  text-align: center;
`;
