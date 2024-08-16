// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CopyRight = styled.p`
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 20px;

  &:hover {
    color: #007bff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyRight>&copy; 2024 freeH2O. All rights reserved.</CopyRight>
      <SocialLinks>
        <SocialIcon href="#">
          <i className="fab fa-facebook-f"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="fab fa-twitter"></i>
        </SocialIcon>
        <SocialIcon href="#">
          <i className="fab fa-instagram"></i>
        </SocialIcon>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
