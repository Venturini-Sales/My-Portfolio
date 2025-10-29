import styled from "styled-components";

export const AboutMeSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const IconBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconArea = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100%;
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-position: -10px 25px;
  object-fit: cover;
`;

export const AboutMeArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const AboutMeTitle = styled.h2`
  text-transform: uppercase;
  font-size: 3.5rem;
  line-height: 1;
`;

export const AboutMeText = styled.p`
  width: 800px;
  text-align: center;
`;
