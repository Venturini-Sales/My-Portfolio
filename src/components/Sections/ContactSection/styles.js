import styled from "styled-components";

export const ContactSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactTitle = styled.h1`
  text-transform: uppercase;
  font-size: 3.5rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContactSubtitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  width: 70%;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  width: 600px;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1rem;
  outline: none;
  width: 100%;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  &:focus-within label {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -8px;
  left: 12px;
  padding: 0 6px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.secondary};
  pointer-events: none;
  transition: color 0.2s ease;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  text-transform: uppercase;
  font-weight: 800;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
