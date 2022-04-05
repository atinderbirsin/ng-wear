import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.div`
  width: 100%;
  padding: 5.2rem 0;
  background-color: rgb(34, 34, 34);
`;

export const Container = styled.div`
  max-width: 108rem;
  margin: 0 auto;
  display: grid;
  gap: 4.3rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 4.6rem;
  font-weight: 500;
`;

export const FooterListHeading = styled.h5`
  font-size: 1.8rem;
  color: rgb(133, 133, 133);
`;

export const ListItem = styled(Link)`
  font-size: 1.4rem;
  display: inline-block;
  text-decoration: none;
  color: rgb(133, 133, 133);
  //   color: #cccccc;
`;

export const FooterIcon = styled.i`
  color: #fff;
  margin-right: 1.2rem;
`;

export const CopyrightContainer = styled.div`
  width: 100%;
  background-color: rgb(23, 23, 23);
  padding: 1.5rem 0 1.5rem 0;
`;

export const CenteredContainer = styled.div`
  max-width: 108rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666;
  margin: 0 auto;
`;

export const CopyrightText = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const HoverLink = styled(Link)`
  font-size: 2.4rem;
  transition: all 0.2s ease;

  &:hover {
    color: rgb(3, 85, 135);
  }
`;
