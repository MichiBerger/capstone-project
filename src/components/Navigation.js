import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export default function Navigation() {
  return (
    <NavBar>
      <StyledNavLink to="/">
        <NavItemWrapper >
          <svg

            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
          </svg>
          <NavItemText>Alle</NavItemText>
        </NavItemWrapper>
      </StyledNavLink>
      <StyledNavLink to="/favorites">
        <NavItemWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
          </svg>
          <NavItemText  >Favoriten</NavItemText>
        </NavItemWrapper>
      </StyledNavLink>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  background-color: #efefef;
  align-items: center;
  text-align: center;
  position: sticky;
  bottom: 0;
  z-index: 1;
  padding: 0.5rem 0;
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  background-color: #efefef;
  justify-self: center;
  opacity: 0.5;
  width: 50%;
  svg {
      fill: #000;
    }
  &.active {
    color: #2196f3;

    opacity: 1;
    svg {
      fill: #2196f3;
    }
  }
`;

const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavItemText = styled.span`
font-size: 0.75rem;
`
