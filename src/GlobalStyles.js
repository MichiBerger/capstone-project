import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
  line-height: 1.5;
  color: #19337A;
  margin: 0 auto;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2;
}
a {
  text-decoration: none;
  color: black;
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
input[type="text"], textarea, select, option {
  font-family: sans-serif;
  font-size: 1rem;
}

.sr-only {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
}

`;
