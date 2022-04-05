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

export const TestContainer = styled.div`
  max-width: 108rem;
  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1.4rem;
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

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TestimonialLink = styled(ButtonLink)`
  border-color: #fff;

  &:hover {
    padding-right: 1.6rem;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Div = styled.div`
  // witdh: 100%;
  // margin: 0 auto;
  background-color: #fff;
`;

export const TestimonialHeading = styled.h5`
  color: rgb(15, 117, 188);
  font-size: 1.8rem;
  text-align: left;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  color: rgb(102, 102, 102);
  font-size: 1.4rem;
  text-align: left;
  line-height: 2.4rem;
  margin-bottom: 1rem;
`;

export const Author = styled.p`
  text-align: left;
  font-weight: 700;
  font-style: italic;
  color: rgb(102, 102, 102);
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const Stars = styled.div`
  text-align: left;
  font-size: 2rem;
  color: rgb(255, 215, 0);
`;

export const Link = styled.a`
  font-size: 1.4rem;
  color: rgb(3, 85, 135);
  font-weight: 700;
  padding: 0;
`;

export const Span = styled.span`
  height: 3rem;
  width: 1rem;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 3.2rem;

  &::before {
    content: "";
    height: 1rem;
    width: 1rem;
    background-color: #fff;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &:hover::before {
    background-color: rgb(214, 151, 70);
  }
`;
