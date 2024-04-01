import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.jsx";

// import logo from "../../images/logo.svg";
// import MenuIcon from "feather-icons/dist/icons/menu.svg";
// import CloseIcon from "feather-icons/dist/icons/x.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: auto;
`;

export const NavLinks = styled.div`
  display: inline-block;
`;

export const NavLink = styled.a`
  font-size: 1.125rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: wider;
  transition: all 0.3s;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid transparent;
  &:hover,
  &:focus {
    border-bottom-color: #667eea;
    color: #667eea;
  }
`;

export const PrimaryLink = styled(NavLink)`
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  background-color: #667eea;
  color: #1a202c;
  &:hover,
  &:focus {
    background-color: #5a67d8;
    color: #f7fafc;
  }
  border-bottom: none;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 1.5rem;
  border-bottom: none;
  img {
    width: 2.5rem;
    margin-right: 0.75rem;
  }
`;

export const MobileNavLinksContainer = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const NavToggle = styled.button`
  z-index: 20;
  &:focus {
    outline: none;
  }
  &:hover,
  &:focus {
    color: #667eea;
  }
  transition: all 0.3s;
`;

export const MobileNavLinks = styled(motion.div)`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1.5rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  text-align: center;
  border-radius: 0.5rem;
  color: #1a202c;
  background-color: #fff;
  ${NavLinks} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DesktopNavLinks = styled.nav`
  display: none;
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/#">About</NavLink>
      <NavLink href="/#">Blog</NavLink>
      <NavLink href="/#">Pricing</NavLink>
      <NavLink href="/#">Contact Us</NavLink>
      <NavLink href="/#" className="lg:ml-12!">
        Login
      </NavLink>
      <PrimaryLink css={roundedHeaderButton && `border-radius: 9999px`} href="/#">Sign Up</PrimaryLink>
    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src="../../images/logo.svg" alt="logo" />
      Treact
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks className={collapseBreakpointClass}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer className={collapseBreakpointClass}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} className={collapseBreakpointClass}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <img src="feather-icons/dist/icons/x.svg" className="w-6 h-6" /> : <img src="feather-icons/dist/icons/menu.svg" className="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};