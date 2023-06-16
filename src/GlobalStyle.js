import { createGlobalStyle } from "styled-components";
import background from "./dollar-landscape.jpg"

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*, ::after,
::before {
  box-sizing: inherit;
}
body {
  min-height: 100vh;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Inter', sans-serif;
  color: ${({ theme }) => theme.color.black};
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
}
`;