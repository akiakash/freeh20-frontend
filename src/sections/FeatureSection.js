import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const FeatureContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px 50px;
  background-color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeatureItem = styled(motion.div)`
  flex: 1;
  padding: 20px;
  text-align: center;
  margin: 0 20px;
  background-color: #444;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const FeatureIcon = styled.img`
  width: 80px;
  margin-bottom: 20px;
`;

const FeatureText = styled.p`
  font-size: 16px;
  color: #ddd;
`;

const FeatureSection = () => {
  return (
    <FeatureContainer>
      <FeatureItem whileHover={{ scale: 1.05 }}>
        <FeatureIcon src={icon1} alt="Cost of Water" />
        <FeatureText>
          Bottled water costs 200 times the price of tap water.
        </FeatureText>
      </FeatureItem>
      <FeatureItem whileHover={{ scale: 1.05 }}>
        <FeatureIcon src={icon2} alt="BPA Free" />
        <FeatureText>
          FreeH2O is natural spring water and all of our containers are BPA
          free.
        </FeatureText>
      </FeatureItem>
      <FeatureItem whileHover={{ scale: 1.05 }}>
        <FeatureIcon src={icon3} alt="Charity Donation" />
        <FeatureText>10% from each beverage is donated to charity.</FeatureText>
      </FeatureItem>
    </FeatureContainer>
  );
};

export default FeatureSection;
