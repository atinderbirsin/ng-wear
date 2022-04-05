import React, { useEffect, useRef } from "react";
import {
  Nav,
  NavbarContainer,
  NavLinks,
  NavLogo,
  Icon,
} from "./NavbarElements";
import Logo from "../images/logooo.webp";
import "./Nav.css";

export function NavBar() {
  // const ref = useRef(null);
  // const NavbarRef = useRef(null);

  // window.addEventListener("scroll", () => {
  //   console.log(ref);
  // });

  // const func = (entries) => {
  //   const [entry] = entries;

  // if (!entry.isIntersecting) {
  //   ref.current.classList.add("sticky");
  //   NavbarRef.current.setAttribute("id", "sticks");
  // } else {
  //   ref.current.classList.remove("sticky");
  //   NavbarRef.current.removeAttribute("id");
  // }

  // if (!entry.isIntersecting) {
  //   console.log(entry);
  //   ref.current.classList.add("sticky");
  //   NavbarRef.current.setAttribute("id", "sticks");
  // } else {
  //   console.log(entry);
  //   ref.current.classList.remove("sticky");
  // }

  // console.log(entry);
  // };

  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // };

  // useEffect(() => {
  // const nav = ref.current;

  // const navObserver = new IntersectionObserver(func, options);

  // if (ref.current) navObserver.observe(ref.current);

  // return () => {
  //   if (nav) navObserver.unobserve(nav);
  // };
  // }, [ref, options]);

  // navObserver.observe(ref.current);

  // const top = ref.current.offsetTop;

  // window.addEventListener("scroll", () => {
  //   if (ref.current.offsetTop >= 0) {
  //     ref.current.classList.add("sticky");
  //     NavbarRef.current.setAttribute("id", "sticks");
  //   } else {
  //     ref.current.classList.remove("sticky");
  //     NavbarRef.current.removeAttribute("id");
  //   }
  // });

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
