import styled from "styled-components";
import { motion } from "framer-motion";

export const BentoTitle = styled.h1``;

export const BentoContainer = styled.main`
  display: grid;
  height: calc(100vh - 80px);
  margin: 40px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  .card1 {
    grid-area: 1 / 1 / 3 / 5;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: clamp(20px, 5vw, 100px);
  }
  .card2 {
    grid-area: 3 / 1 / 5 / 5;
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: clamp(16px, 4vw, 70px);
    gap: 30px;
  }
  .card3 {
    grid-area: 1 / 5 / 5 / 7;
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.primary};
    flex-direction: column;
    font-size: clamp(10px, 2vw, 70px);
    gap: 1px;
  }
  .card4 {
    grid-area: 5 / 1 / 7 / 2;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.tertiary};
  }
  .card5 {
    grid-area: 5 / 2 / 7 / 5;
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: clamp(15px, 4vw, 70px);
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  .card6 {
    grid-area: 5 / 5 / 7 / 7;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.tertiary};
  }

  ${({ theme }) => theme.media.lg} {
    height: calc(100vh - 20px);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    margin: 20px;
    gap: 20px;

    .card1 {
      grid-area: 1 / 1 / 2 / 4;
    }

    .card2 {
      grid-area: 2 / 1 / 3 / 4;
    }

    .card3 {
      grid-area: 4 / 3 / 5 / 4;
    }

    .card3 ${BentoTitle} {
      display: none;
    }

    .card4 {
      grid-area: 4 / 1 / 5 / 2;
      font-size: clamp(10px, 2vw, 70px);
    }

    .card5 {
      grid-area: 4 / 2 / 5 / 3;
    }

    .card5 ${BentoTitle} {
      display: none;
    }

    .card6 {
      grid-area: 3 / 1 / 4 / 4;
    }
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    margin: 10px;
    gap: 10px;
  }
`;

export const BentoCard = styled(motion.div)`
  border-radius: 10px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;
  cursor: none;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.tertiary};
  }

  ${({ theme }) => theme.media.lg} {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const BentoCardCv = styled(motion.a)`
  border-radius: 10px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease;
  cursor: none;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.tertiary};
  }
`;

export const FileButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px 25px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 23px;
`;

export const ExpandedOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 20px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 40px;
  z-index: 800;
  cursor: none;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
