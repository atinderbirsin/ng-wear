import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLinks,
  NavLogo,
  Icon,
} from "./NavbarElements";
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
            SWEAT WIKI &nbsp; <Icon className="fa-solid fa-angle-down" />
          </NavLinks>
          <NavLinks to="/">BLOG</NavLinks>
          <NavLinks to="/">MY ACCOUNT</NavLinks>
          <NavLinks to="/">
            <Icon className="fa-solid fa-magnifying-glass" />
            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          </NavLinks>
        </NavbarContainer>
      </Nav>
    </>
  );
}
