import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import advertiseImage from "../assets/advertise-image.png";

const AdvertiseContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 50px;
  background-color: #111;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #00bd24;
`;

const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
  line-height: 1.6;
  color: #ccc;
`;

const Highlight = styled.span`
  color: #00bd24;
  font-weight: bold;
`;

const CallToAction = styled(motion.button)`
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

const ImageContent = styled(motion.img)`
  width: 500px;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-left: 0;
    width: 100%;
  }
`;

const AdvertiseSection = () => {
  return (
    <AdvertiseContainer>
      <TextContent>
        <Title>Advertise with FreeH2O</Title>
        <Description>
          Leverage the power of <Highlight>premium spring water</Highlight> as a
          unique advertising medium. FreeH2O provides an innovative platform
          where your brand can reach new audiences while contributing to a
          greater cause. Our water bottles not only quench thirst but also carry
          your message directly to the consumer's hands.
        </Description>
        <Description>
          <Highlight>Why choose us?</Highlight> It's simple. Each bottle
          delivers your message while donating 10% of the proceeds to charity,
          helping to fight the global water crisis. By partnering with us,
          you’re not just promoting your brand—you’re making a difference.
        </Description>
        <CallToAction whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Start Advertising Today
        </CallToAction>
      </TextContent>
      <ImageContent
        src={advertiseImage}
        alt="Advertise with FreeH2O"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </AdvertiseContainer>
  );
};

export default AdvertiseSection;
