import styled from "styled-components";

export const WelcomeSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.tertiary};
  padding: 50px;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4.5rem;
  line-height: 1;
  margin-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const IconArea = styled.div`
  width: 50%;
`;

export const DevImage = styled.img`
  width: 600px;
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.div`
  padding: 15px 13px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
`;
