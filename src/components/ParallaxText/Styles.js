import { motion } from "motion/react";
import styled from "styled-components";

export const LettersParallaxArea = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;

  pointer-events: none;
  overflow: hidden;
  z-index: -1;
`;

export const Parallax = styled.div`
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 1.2;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

export const Scroller = styled(motion.div)`
  text-transform: uppercase;
  font-size: 30px;
  display: flex;
  white-space: nowrap;
  display: flex;
  width: max-content;
  flex-wrap: nowrap;
  will-change: transform;

  span {
    font-weight: 900;
    display: block;
    margin-right: 10px;
    color: #f5f5f504;
  }
`;
