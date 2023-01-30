import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  MobileIcon,
  NavMenu,
  NavLinkR
} from "./NavbarElements";

import { NavLink } from "react-router-dom";


const Navbar = ({ toggle, blue }) => {
  const [scrollNav, setScrollNav] = useState(false);


  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo blue={blue}>
            AKΨ
          </NavLogo>
          <MobileIcon onClick={toggle} blue={blue}>
            <FaBars />
          </MobileIcon>
          <NavMenu className={"justify-content-end"} blue={blue}>
            <NavItem >
              <NavLinkR blue={blue}
                to="/"
                // smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                Home
              </NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR blue={blue}
                to="/brothers"
                // smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                Brothers
              </NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR blue={blue}
                to="/recruitment"
                // smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >
                Recruitment
              </NavLinkR>
            </NavItem>
            <NavItem>
              <NavLinkR blue={blue} to="/contact">Contact</NavLinkR>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
