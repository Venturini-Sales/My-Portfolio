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
          Sou um entusiasta de desenvolvimento web apaixonado por transformar
          ideias em soluções digitais eficientes e impactantes. Estou
          constantemente em busca de novos desafios para ampliar meus
          conhecimentos e habilidades, focando no aprendizado contínuo e
          aplicando as melhores práticas para criar experiências de usuário
          excepcionais. Valorizo o trabalho em equipe e acredito que a
          comunicação clara é crucial para o sucesso do projeto. Pronto para
          contribuir significativamente em ambientes dinâmicos de
          desenvolvimento web, me esforço para superar expectativas e entregar
          resultados de alta qualidade.
        </AboutMeText>
      </AboutMeArea>
    </AboutMeSectionContainer>
  );
};
