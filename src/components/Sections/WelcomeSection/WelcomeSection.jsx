import React, { useContext } from "react";
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
import { CursorContext } from "../../../Contexts/ContextCursor";

export const WelcomeSection = () => {
  const { ToggleCursorHover } = useContext(CursorContext);

  return (
    <WelcomeSectionContainer>
      <TextArea>
        <Title>Bem-Vindo ao Meu Portfolio</Title>
        <SubTitle>Me chamo João Pedro V. Sales, sou um desenvolvedor Front-end</SubTitle>
        <ButtonsArea>
          <Button
            href="https://github.com/Venturini-Sales"
            target="blank"
            onMouseOver={ToggleCursorHover}
            onMouseOut={ToggleCursorHover}
          >
            <FontAwesomeIcon size="2xl" icon={faGithub} />
          </Button>

          <Button
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-v-462600258/"
            target="blank"
            onMouseOver={ToggleCursorHover}
            onMouseOut={ToggleCursorHover}
          >
            <FontAwesomeIcon size="2xl" icon={faLinkedin} />
          </Button>

          <Button
            href="https://api.whatsapp.com/send?phone=5521978915683"
            target="blank"
            onMouseOver={ToggleCursorHover}
            onMouseOut={ToggleCursorHover}
          >
            <FontAwesomeIcon size="2xl" icon={faWhatsapp} />
          </Button>

          <Button
            href="https://discord.com/users/457338766521139203"
            target="blank"
            onMouseOver={ToggleCursorHover}
            onMouseOut={ToggleCursorHover}
          >
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
