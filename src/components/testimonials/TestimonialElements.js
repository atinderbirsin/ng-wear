import styled from "styled-components";
import { ButtonLink } from "../BannerContainer/BannerElements";

export const TestimonialsContainer = styled.div`
  width: 100%;
  padding: 5.2rem 0;
  background-color: #504c4d;
  text-align: center;
`;

export const Heading = styled.h4`
  padding: 2.7rem 0 3.7rem 0;
  font-size: 4rem;
  color: #fff;
`;

export const TestimonialsDiv = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  position: relative;
`;

export const PrevBtn = styled.button`
  position: absolute;
  bottom: -30px;
  left: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;

export const NextBtn = styled.button`
  position: absolute;
  bottom: -3rem;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;

export const DotsContainer = styled.div``;

export const TestimonialLink = styled(ButtonLink)`
  border-color: #fff;

  &:hover {
    padding-right: 1.6rem;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Div = styled.div`
  witdh: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

export const TestimonialHeading = styled.h5`
  color: rgb(15, 117, 188);
`;

export const Text = styled.p`
  color: rgb(102, 102, 102);
`;

export const Author = styled.p``;
