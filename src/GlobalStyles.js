import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
  line-height: 1.5;
  background-color: #f1f5f9;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2;
  color: black;
}
a {
  text-decoration: none;
  color: black;
}
li {
  list-style-type: none;
}

`;
