import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import heroImage from "../assets/water-bottle.png";

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 50px;
  background-color: #222;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  color: #fff;
`;

const HeroDescription = styled.p`
  font-size: 18px;
  margin-top: 20px;
  line-height: 1.6;
  color: #ccc;
`;

const HeroButton = styled(motion.button)`
  margin-top: 30px;
  padding: 15px 30px;
  background-color: #00bd24;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #00a81c;
  }
`;

const HeroImage = styled(motion.img)`
  width: 400px;
  @media (max-width: 768px) {
    margin-top: 50px;
    width: 100%;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <HeroTitle>Innovative Advertising with a Purpose</HeroTitle>
        <HeroDescription>
          freeH2O is an innovative advertising platform that utilizes premium
          spring water as a new type of advertising medium while prioritizing
          philanthropy and sustainability. 10% from each beverage is donated to
          charity to fight the global water crisis.
        </HeroDescription>
        <HeroButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Advertise with Us
        </HeroButton>
      </HeroText>
      <HeroImage
        src={heroImage}
        alt="Water Bottle"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </HeroContainer>
  );
};

export default HeroSection;
