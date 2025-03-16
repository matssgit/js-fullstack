import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { GlobalStyle } from "./components/styles/global";

import { defaultTheme } from "./components/styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
