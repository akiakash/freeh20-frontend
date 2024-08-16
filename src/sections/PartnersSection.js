import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import partnerImage from "../assets/clarity.png";

const PartnersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #333; // Dark background

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const PartnerInfo = styled.div`
  flex: 1;
`;

const PartnerTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #00bd24; // Accent color for title
`;

const PartnerDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ccc; // Light gray text
`;

const LearnMoreButton = styled(motion.button)`
  margin-top: 30px;
  padding: 15px 30px;
  background-color: #00bd24; // Accent color
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #00a81c; // Darker shade on hover
  }
`;

const PartnerImage = styled(motion.img)`
  flex: 1;
  max-width: 500px;
  @media (max-width: 768px) {
    margin-top: 30px;
    width: 100%;
  }
`;

const PartnersSection = () => {
  return (
    <PartnersContainer>
      <PartnerInfo>
        <PartnerTitle>Our Partners</PartnerTitle>
        <PartnerDescription>
          They work exclusively with local partners who build sustainable,
          community-owned water projects. Their partners also facilitate
          comprehensive water, sanitation, and hygiene programming to protect
          everyone’s long-term health.
        </PartnerDescription>
        <LearnMoreButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Learn More
        </LearnMoreButton>
      </PartnerInfo>
      <PartnerImage
        src={partnerImage}
        alt="Clarity"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </PartnersContainer>
  );
};

export default PartnersSection;
