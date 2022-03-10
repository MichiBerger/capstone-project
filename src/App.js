
import PhraseCardList from './components/PhraseCardList.js';
import styled from 'styled-components';

function App() {
  return (
    <AppGrid>
      <Header>placeholder</Header>
      <Main>
        <PhraseCardList />
      </Main>
      <Nav>placeholder</Nav>
    </AppGrid>
  );
}

export default App;

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr 48px;
  grid-template-areas: 'header' 'main' 'footer';
`;

const Header = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  grid-area: 'header';
  background-color: lightblue;
`;

const Main = styled.main`
  color: white;
  height: 100vh;
  overflow-y: scroll;
  grid-area: 'main';
  padding: 1rem;
`;

const Nav = styled.div`
  position: sticky;
  bottom: 0;
  grid-area: 'footer';
  z-index: 1;
  background-color: lightblue;
`;
