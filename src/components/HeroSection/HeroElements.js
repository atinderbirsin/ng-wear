import styled from "styled-components";

// #e7e7e7

export const HeroContainer = styled.div`
  width: 100%;
  background-color: ${(props) => (props.primary ? "#e7e7e7" : "#fff")};
  padding: 5.4rem 0;
`;

export const HeroFlexDiv = styled.div`
  max-width: 108rem;
  padding: 2.7rem 0;
  margin: 0 auto;
  display: flex;
  gap: 5.9rem;
`;

export const HeroImgBox = styled.div`
  width: 100%;
`;

export const HeroImg = styled.img`
  width: 100%;
  margin-top: 2.4rem;
`;

export const HeroTextBox = styled.div`
  width: 100%;
`;
export const HeroTextBoxHeading = styled.h3`
  font-size: 2.6rem;
  font-weight: 500;
  padding-bottom: 1rem;
  color: rgb(51, 51, 51);
`;

export const HeroText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  padding-bottom: 1.4rem;
`;
