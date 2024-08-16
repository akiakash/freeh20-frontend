import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #333;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #00bd24;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  &:hover {
    color: #00bd24;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>free h2o</Logo>
      <Nav>
        <NavLink to="/packages">Packages</NavLink>
        <NavLink to="/product">Our Product</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
