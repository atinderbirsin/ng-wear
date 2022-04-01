import React from "react";
import { Nav, NavbarContainer, NavLinks, NavLogo } from "./NavbarElements";
import Logo from "../images/logooo.webp";

export function NavBar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLinks to="/">HOME</NavLinks>
          <NavLinks to="/">SHOP</NavLinks>
          <NavLinks to="/">TECHNOLOGY</NavLinks>
          <NavLinks to="/">FAQ</NavLinks>
          <NavLinks to="/">
            <NavLogo src={Logo} />
          </NavLinks>
          <NavLinks to="/">
            SWEAT WIKI &nbsp; <i class="fa-solid fa-angle-down"></i>
          </NavLinks>
          <NavLinks to="/">BLOG</NavLinks>
          <NavLinks to="/">MY ACCOUNT</NavLinks>
          <NavLinks to="/">
            <i class="fa-solid fa-magnifying-glass"></i>
          </NavLinks>
        </NavbarContainer>
      </Nav>
    </>
  );
}
