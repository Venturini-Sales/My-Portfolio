import React from "react";
import {
  AboutMeArea,
  AboutMeSectionContainer,
  AboutMeText,
  AboutMeTitle,
  Icon,
  IconArea,
  IconBar,
} from "./styles";

import IconPfp from "../../../assets/Images/Icon2.png";

export const AboutMeSection = () => {
  return (
    <AboutMeSectionContainer>
      <IconBar>
        <IconArea>
          <Icon src={IconPfp} />
        </IconArea>
      </IconBar>
      <AboutMeArea>
        <AboutMeTitle> Sobre Mim</AboutMeTitle>
        <AboutMeText>
          Sempre fui apaixonado por tecnologia, mas foi aos 19 anos que descobri
          o mundo da programação e decidi construir uma carreira nessa área.
          Desde então, tenho me dedicado ao desenvolvimento profissional,
          estudando e implementando na prática os conhecimentos que venho
          adquirindo. No momento estou cursando Análise e Desenvolvimento de
          Sistemas e procurando uma oportunidade para colocar em prática e
          aprimorar minhas habilidades. Minha principal tecnologia é o React,
          com aproximadamente dois anos de experiência em diversos projetos,
          incluindo trabalhos como freelancer.
        </AboutMeText>
      </AboutMeArea>
    </AboutMeSectionContainer>
  );
};
