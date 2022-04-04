import styled from "styled-components";
import { Link } from "react-router-dom";
import bannerImg from "../images/banner.jpg";
import { Icon } from "../NavBar/NavbarElements";

export const BannerSection = styled.div`
  width: 100%;
  height: 56.8rem;
  overflow: hidden;
`;

// export const BannerImg = styled.img`
//   max-width: 144rem;
// `;

export const BannerImg = styled.div`
  background-image: url(${bannerImg});
  height: 56.9rem;
  background-repeat: no-repeat;
  background-size: cover;
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

export const ButtonLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 0.8rem 1.6rem;
  background-color: ${(props) =>
    props.backgroundcolor ? "#028be4" : "transparent"};
  border: ${(props) => (props.border ? "2px solid rgb(0, 102, 153)" : "none")};
  border-radius: ${(props) => (props.radius ? "0.5rem" : "0.3rem")};
  font-size: 1.9rem;
  border-color: ${(props) =>
    props.bordercolor ? "#fff" : "2px solid rgb(0, 102, 153)"};
  font-weight: 300;
  color: ${(props) => (props.color ? "#fff" : "rgb(0, 102, 153)")};
  cursor: pointer;
  font-weight: ${(props) => (props.border ? "500" : "300")};
  width: ${(props) => (props.width ? "100%" : "")};
  transition: all 0.3s ease;

  ${Icon} {
    opacity: 0;
    width: 0;
  }

  &:hover {
    padding-right: 3.2rem;
    background-color: ${(props) =>
      props.hovershadow ? "rgba(0, 0, 0, 0.05)" : "none"};

    ${Icon} {
      opacity: 1;
      width: auto;
      transform: translateX(15px);
      transition: all 0.4s ease;
    }
  }
`;
