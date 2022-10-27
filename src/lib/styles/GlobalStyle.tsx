import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  
    html,body{
        font-size:10px;
        font-family: -apple-system, 'Noto Sans KR', sans-serif;
    }
    a{
        text-decoration: none;
        color:#1d1d1d;
    }
`;

export default GlobalStyle;
