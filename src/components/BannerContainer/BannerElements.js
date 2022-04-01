import styled from "styled-components";
import { Link } from "react-router-dom";

export const BannerSection = styled.div`
  width: 100%;
`;

export const BannerImg = styled.img`
  max-width: 100%;
`;

export const BannerTextContainer = styled.div`
  padding: 4rem 4rem;
  background-color: rgba(5, 68, 109, 0.7);
  color: #fff;
  position: absolute;
  z-index: 1;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`;

export const BannerDiv = styled.div`
  width: 77%;
`;

export const BannerHeading = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
  padding-bottom: 1rem;
`;

export const BannerText = styled.p`
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 23px;
`;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const BtnIcon = styled.span`
  font-size: 1.9rem;
  width: 0;
  background: #028be4;
  -webkit-transition: all 0.8s ease;
  -moz-transition: all 0.8s ease;
  -ms-transition: all 0.8s ease;
  -o-transition: all 0.8s ease;
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  color: white;
  position: absolute;
  top: 0;
  right: 20px;
  opacity: 0;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  padding: 0.8rem 2rem;
  background-color: #028be4;
  border-radius: 0.5rem;
  font-size: 1.9rem;
  font-weight: 300;
  color: #fff;
  transition: all 0.5s;
`;

export const Btn = styled.div`
  width: 100%;

  &:hover {
    ${ButtonLink} {
      padding: 0.8rem 3.5rem 0.8rem 2rem;
      margin: -1rem;
    }

    ${BtnIcon} {
      opacity: 1;
      width: 1rem;
      position: absolute;
      top: 0;
      right: 4px;
      transition: all 0.5s;
    }
  }
`;
