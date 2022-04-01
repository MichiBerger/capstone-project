import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
--color-gallery-grey: #efefef;
--color-alabaster-grey: #F9F9F9;
--color-indigo-blue: #19337a;
--color-indigo-blue-light: #19337a70;
--color-amaranth-red:#DE0C47;
--color-trinidad-orange: #E64B07;
--color-atlantis-green: #9AD21C;
}

body {
  font-family: sans-serif;
  font-size: 112.5%;
  line-height: 1.5;
  color: var(--color-indigo-blue);
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
  font-family: inherit;
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
