import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import AllPhrases from './components/pages/AllPhrases.js';
import Navigation from './components/Navigation.js';
import FavoritePhrases from './components/pages/FavoritePhrases.js';
import AddPhrases from './components/pages/AddPhrases.js';
import { nanoid } from 'nanoid';

function App() {
  const [phrases, setPhrases] = useState([]);

  console.log(phrases);
  return (
    <AppGrid>
      <Header>MeinMausebär</Header>

      <Main>
        <Routes>
          <Route path="/" element={<AllPhrases phrases={phrases} onIconClick={handleIconClick} />} />
          <Route path="/favorites" element={<FavoritePhrases phrases={phrases} onIconClick={handleIconClick} />} />
          <Route
            path="/addphrases"
            element={<AddPhrases phrases={phrases} handlePhraseSubmit={handlePhraseSubmit} />}
          />
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

  function handlePhraseSubmit({ date, text }) {
    let id = nanoid();
    let isBookmarked = false;

    setPhrases([{ id, date, text, isBookmarked }, ...phrases]);
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
  font-size: 2rem;
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
