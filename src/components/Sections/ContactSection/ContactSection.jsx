import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const alert = "Preencha todos os campos!";
  const confirmation = "Mensagem enviada com sucesso!";

  function sendEmail(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.warning(alert);
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_y2u9u5h",
        "template_5epny0i",
        templateParams,
        "YWSfj3h8senTL6N1j",
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        toast.success(confirmation);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Erro ao enviar a mensagem");
      });
  }

  return (
    <ContactSectionContainer>
      <ContactTitle>Vamos Conversar?</ContactTitle>
      <ContactSubtitle>
        Se quiser falar sobre possíveis colaborações ou oportunidades, preencha
        abaixo.
      </ContactSubtitle>

      <ContactForm onSubmit={sendEmail}>
        <InputGroup>
          <InputContainer>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              name="from_name"
              value={name}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
            />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={email}
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
            />
          </InputContainer>
        </InputGroup>

        <InputGroup>
          <InputContainer>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onMouseOver={ToggleCursorHover}
              onMouseOut={ToggleCursorHover}
            />
          </InputContainer>
        </InputGroup>

        <SubmitButton
          type="submit"
          onMouseOver={ToggleCursorHover}
          onMouseOut={ToggleCursorHover}
        >
          Enviar
        </SubmitButton>
      </ContactForm>
    </ContactSectionContainer>
  );
};
