import styled from 'styled-components';
import { Link } from 'react-router-dom';

import AddKidsIcon from './icons/AddKidsIcon.js';
import HomeIcon from './icons/HomeIcon.js';

export default function Header() {
  return (
    <HeaderWrapper style>
      <StyledLink to="/">
        <HomeIcon fill="#fff" height="24px" width="24px" />
      </StyledLink>
      <h1>littleSunshine</h1>
      <StyledLink style={{}} to="/createkids">
        <AddKidsIcon fill="#fff" height="24px" width="24px" />
      </StyledLink>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0px;
  z-index: 2;
  color: white;
  background-color: #19337a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  h1 {
    font-size: 1.2rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;
