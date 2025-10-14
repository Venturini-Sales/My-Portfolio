import React from "react";
import {
  Button,
  ButtonsArea,
  DevImage,
  IconArea,
  SubTitle,
  TextArea,
  Title,
  WelcomeSectionContainer,
} from "./styles";
import IMG from "../../../assets/Images/dev.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const WelcomeSection = () => {
  return (
    <WelcomeSectionContainer>
      <TextArea>
        <Title>Bem Vindo ao Meu Portfolio</Title>
        <SubTitle>Me chamo João, Dev Front-End</SubTitle>
        <ButtonsArea>
          <Button>
            <FontAwesomeIcon size="2xl" icon={faGithub} />
          </Button>
          <Button>
            <FontAwesomeIcon size="2xl" icon={faLinkedin} />
          </Button>
          <Button>
            <FontAwesomeIcon size="2xl" icon={faWhatsapp} />
          </Button>
          <Button>
            <FontAwesomeIcon size="2xl" icon={faDiscord} />
          </Button>
        </ButtonsArea>
      </TextArea>
      <IconArea>
        <DevImage src={IMG} alt="imagem" />
      </IconArea>
    </WelcomeSectionContainer>
  );
};
