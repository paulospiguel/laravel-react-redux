import { createGlobalStyle } from "styled-components";
import "font-awesome/css/font-awesome.css";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');


*{
  margin: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
  outline: 0
}
body, html {
  background: #eee;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}

body, input, button{
  font: 14px "Roboto", sans-serif;
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}
`;
