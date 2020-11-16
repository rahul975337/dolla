import React from "react";
import {
  Nav,
  NavbarContainer,
  NavItem,
  MobileIcon,
  NavLogo,
  NavLinkS,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinkS to="about">About</NavLinkS>
            </NavItem>
            <NavItem>
              <NavLinkS to="discover">Discover</NavLinkS>
            </NavItem>
            <NavItem>
              <NavLinkS to="about">About</NavLinkS>
            </NavItem>
            <NavItem>
              <NavLinkS to="services">Services</NavLinkS>
            </NavItem>
            <NavItem>
              <NavLinkS to="signup">Sign Up</NavLinkS>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
