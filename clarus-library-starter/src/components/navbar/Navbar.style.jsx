import styled from "styled-components";
import Flex from "../../styles/Flex";
import { NavLink } from "react-router-dom";

export const Navv = styled(Flex)`
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem 2rem;
`;

export const Logo = styled(NavLink)`
  color: ${({ theme }) => theme.colors.logoColor};
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1rem; 
  text-decoration: none;
`;
export const NavbarItems = styled(Flex)`
  font-weight: bold; 
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column; 
    width: 100%; 
    max-height: ${({showMenu}) => (showMenu ? "300px" : "0")}; 
    overflow: hidden;
  }
`;

export const Links = styled(NavLink)`
  text-align: center;
  margin-right: 1.3rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  :hover {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }
`;
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;
