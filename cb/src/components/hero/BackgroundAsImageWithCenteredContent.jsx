import React from "react";
import styled from "styled-components";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.jsx";

const StyledHeader = styled(Header)`
  padding-top: 8px;
  max-width: none;
  width: 100%;
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    color: #d1d5db;
    &:hover {
      border-color: #d1d5db;
      color: #d1d5db;
    }
  }
  ${NavToggle}.closed {
    color: #d1d5db;
    &:hover {
      color: #667eea;
    }
  }
`;

const PrimaryLink = styled(PrimaryLinkBase)`
  border-radius: 9999px;
`;
const Container = styled.div`
  position: relative;
  margin-left: -8px;
  margin-top: -8px;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  min-height: 144px;
  background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.75;
`;

const HeroContainer = styled.div`
  z-index: 20;
  position: relative;
  padding-left: 6px;
  padding-right: 6px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  padding-left: 4px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: 900;
  color: #d1d5db;
  line-height: 1.5;
  margin-top: -24px;
  span {
    display: inline-block;
    margin-top: 2px;
  }
`;

const PrimaryAction = styled.button`
  border-radius: 9999px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 3px;
  margin-top: 10px;
  font-size: 1rem;
  background-color: #d1d5db;
  font-weight: bold;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  background-color: #667eea;
  color: #d1d5db;
  &:hover {
    background-color: #5a67d8;
    color: #f7fafc;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;
export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        About
      </NavLink>
      <NavLink href="#">
        Blog
      </NavLink>
      <NavLink href="#">
        Locations
      </NavLink>
      <NavLink href="#">
        Pricing
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            Book Music & Comedy Events
            <br />
            anywhere in New York
          </Heading>
          <PrimaryAction>Search Events Near Me</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};