import React, { useContext } from "react";
import {
  ContactForm,
  ContactSectionContainer,
  ContactSubtitle,
  ContactTitle,
  Input,
  InputContainer,
  InputGroup,
  Label,
  SubmitButton,
  Textarea,
} from "./styles";
import { CursorContext } from "../../../Contexts/ContextCursor";

export const ContactSection = () => {
  const { ToggleCursorHover } = useContext(CursorContext);

  return (
    <ContactSectionContainer>
      <ContactTitle>Vamos Conversar?</ContactTitle>
      <ContactSubtitle>
        Se quiser falar sobre possiveis colaborações ou oportunidades, preencha
        abaixo.
      </ContactSubtitle>
      <ContactForm>
        <InputGroup>
          <InputContainer>
            <Label htmlFor="name">Nome</Label>
            <Input
              autoComplete="off"
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
              id="name"
              type="text"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              autoComplete="on  "
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
              id="email"
              type="email"
            />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
              name="message"
              id="message"
            ></Textarea>
          </InputContainer>
        </InputGroup>
        <SubmitButton
          onMouseOver={ToggleCursorHover}
          onMouseOut={ToggleCursorHover}
          type="submit"
        >
          Enviar
        </SubmitButton>
      </ContactForm>
    </ContactSectionContainer>
  );
};
