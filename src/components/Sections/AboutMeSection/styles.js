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

  ${({ theme }) => theme.media.md} {
    gap: 60px;
  }
`;

export const IconBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.md} {
    height: 90px;
  }

  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

export const IconArea = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100%;
  width: 250px;
  height: 250px;
  overflow: hidden;

  ${({ theme }) => theme.media.md} {
    width: 150px;
    height: 150px;
  }
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
  gap: 30px;

  ${({ theme }) => theme.media.md} {
    gap: 20px;
  }
`;

export const AboutMeTitle = styled.h2`
  text-transform: uppercase;
  font-size: clamp(35px, 4vw, 90px);
  line-height: 1;
`;

export const AboutMeText = styled.p`
  width: 60vw;
  font-size: clamp(13px, 1.2vw, 70px);
  text-align: center;
`;
