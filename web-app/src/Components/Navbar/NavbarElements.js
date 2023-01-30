import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled(Navbar)`
background: none;
position: absolute;

  display: flex;
  justify-content: center;
  width: 100%
  max-width: 1920px
  align-items: center;
  font-size: 1.3rem;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;


export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  /*max-width: 1100px;*/
`;

export const NavLogo = styled(LinkR)`
color: ${({ blue }) =>
blue ? "#0C406F" : "white"};
  margin-top: 30px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 120px;
  text-decoration: none;
  font-family: STIX Two Text


  @media screen and (max-width: 960px) {
    font-size: 1.75rem;
    margin: 0;
    padding: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.75rem;
    font-weight: normal
    font-family: STIX Two Text
    cursor: pointer;
    color: ${({ blue }) =>
    blue ? "#0C406F" : "white"};
    margin: 0;
  }
`;

export const NavMenu = styled.ul`

margin-top: 50px;

  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 80px;
  float: left;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  color: #1b262c;
  font-size: 0.9 rem;
  font-weight: bold;
  font-family: STIX Two Text
  margin-right: 24px;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid #3282b8;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const NavLinkR = styled(LinkR)`
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  color: ${({ blue }) =>
blue ? "#0C406F" : "white"};
  font-size: 0.9 rem;
  font-weight: bold;
  margin-right: 24px;
  font-family: STIX Two Text

  text-decoration: none;

  &.active {
    border-bottom: 3px solid #3282b8;
  }

  &:hover {
    text-decoration: none;
  }
`;
