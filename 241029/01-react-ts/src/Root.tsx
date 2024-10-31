import React from "react";
import { darktheme, lighttheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

}

ul, li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor}  
}`;

const App = () => {
  return (
    <>
      <ThemeProvider theme={darktheme}>
        <GlobalStyle />
        <Outlet />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </ThemeProvider>
    </>
  );
};

export default App;
