import styled from "styled-components";

export const CursorPoint = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
`;
