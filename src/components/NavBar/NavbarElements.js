import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding-top: 0.8rem;
`;

export const NavbarContainer = styled.div`
  font-size: 1.4rem;
  color: #fff;
  max-width: 115rem;
  height: 8rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10.25rem;
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;

export const NavLogo = styled.img`
  width: 100%;
`;

export const Icon = styled.i``;
