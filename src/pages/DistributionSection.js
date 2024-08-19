import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DistributionContainer = styled.section`
  display: flex;
  overflow-x: scroll;
  padding: 50px 0;
  background-color: #222;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const DistributionItem = styled(motion.div)`
  flex: 0 0 300px;
  margin: 0 20px;
  padding: 20px;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #fff;
`;

const DistributionSection = () => {
  return (
    <DistributionContainer>
      <DistributionItem whileHover={{ scale: 1.05 }}>
        Ad What We Distribute 1
      </DistributionItem>
      <DistributionItem whileHover={{ scale: 1.05 }}>
        Ad What We Distribute 2
      </DistributionItem>
      <DistributionItem whileHover={{ scale: 1.05 }}>
        Ad What We Distribute 3
      </DistributionItem>
    </DistributionContainer>
  );
};

export default DistributionSection;
