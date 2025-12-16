import styled from "styled-components";

export const SkillsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const HardSkillsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const HardSkillsHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

export const HardSkillsSelector = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  width: 65vw;

  li {
    padding: 20px;
    font-weight: 800;
    cursor: none;
    transition: border-color 0.2s ease;
    color: #747474ff;
  }

  li:hover {
    border-bottom: 2px solid white;
    border-bottom-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.tertiary};
  }

  li.active {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const HardSkillsButtonsArea = styled.div``;

export const HardSkillsGrid = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  flex-wrap: wrap;
  gap: 10px;
`;

export const HardSkillsButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #353535;
  padding: 12px;
  border-radius: 15px;
  height: 48px;
  transition:
    transform 0.2s ease,
    margin 0.2s ease;

  &:hover {
    transform: scale(1.1);
    margin: 0 5px;
  }

  p {
    font-weight: 800;
    line-height: 1;
    white-space: nowrap;
  }
`;

export const HardSkillsDescription = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  background-color: #353535;
  border-radius: 15px;
`;

export const HardSkillsTitle = styled.h1``;

export const HardSkillsText = styled.p`
  text-align: center;
`;
