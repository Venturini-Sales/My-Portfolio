import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./Styles/GlobalStyles.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme.jsx";
import { CursorProvider } from "./Contexts/ContextCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CursorProvider>
        <App />
      </CursorProvider>
    </ThemeProvider>
  </StrictMode>
);
