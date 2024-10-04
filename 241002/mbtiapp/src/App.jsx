import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: "SimKyungha";
  src: url("/fonts/SimKyungha.ttf") format("truetype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  font-family: "SimKyungha";
  background: url("https://cdn.imweb.me/upload/S202207202685e30f16e24/6568a2fcf9606.jpg") center/cover no-repeat;
  height: 100vh;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
