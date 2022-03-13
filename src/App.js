import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import PhraseData from './components/PhraseData.js';
import AllPhrases from './components/pages/AllPhrases.js';
import Navigation from './components/Navigation.js';
import FavoritePhrases from './components/pages/FavoritePhrases.js';
import AddPhrases from './components/pages/AddPhrases.js';

function App() {
  const [phrases, setPhrases] = useState(PhraseData);

  console.log(phrases);
  return (
    <AppGrid>
      <Header>title</Header>

      <Main>
        <Routes>
          <Route path="/" element={<AllPhrases phrases={phrases} onIconClick={handleIconClick} />} />
          <Route path="/favorites" element={<FavoritePhrases phrases={phrases} onIconClick={handleIconClick} />} />
          <Route path="/addphrases" element={<AddPhrases phrases={phrases} setPhrases={setPhrases} />} />
        </Routes>
      </Main>
      <NavBar />
    </AppGrid>
  );

  function handleIconClick(phraseId) {
    const nextPhrases = phrases.map(item => {
      if (item.id === phraseId) {
        return { ...item, isBookmarked: !item.isBookmarked };
      } else {
        return item;
      }
    });
    setPhrases(nextPhrases);
    console.log('click');
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr 48px;
`;

const Header = styled.h1`
  position: sticky;
  top: 0px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #efefef;
  color: #2196f3;
`;
const Main = styled.main`
  height: 100vh;
  overflow-y: scroll;
  padding: 1rem 0.5rem;
`;

const NavBar = styled(Navigation)`
  position: sticky;
  bottom: 0;
  z-index: 1;
`;

export default App;
