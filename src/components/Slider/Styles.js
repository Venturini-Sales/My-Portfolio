import styled from "styled-components";
import { motion } from "framer-motion";

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;

  .swiper-pagination-bullet {
    width: 18px;
    height: 18px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transition: all 0.6s ease-in-out;
    cursor: none;
  }

  .swiper-pagination-bullet-active {
    height: 36px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 14px;
  }
`;

export const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  column-gap: 30px;
  height: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 120px;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(1.94rem, 3vw, 6.88rem);
  text-transform: uppercase;
  width: max-content;
  margin-bottom: 32px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: clamp(0.84rem, 1.3vw, 2.97rem);
  color: white;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const ItemContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const ItemImage = styled.img`
  display: block;
  width: 450px;
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.a`
  padding: 12px;
  text-transform: uppercase;
  font-weight: 800;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  color: white;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
