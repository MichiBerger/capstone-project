import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AllPhrases from './components/pages/AllPhrases.js';
import Navigation from './components/Navigation.js';
import FavoritePhrases from './components/pages/FavoritePhrases.js';
import AddPhrases from './components/pages/AddPhrases.js';
import { nanoid } from 'nanoid';

const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;

function App() {
  const [phrases, setPhrases] = useState(loadFromLocal('allPhrases') ?? []);
  const [image, setImage] = useState('');

  useEffect(() => {
    saveToLocal('allPhrases', phrases);
  }, [phrases]);

  function upload(phraseId, event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(response => {
        setImage(response.data.url);
      })
      // .then( console.log(phraseId))
      .catch(error => console.error(error));

      console.log(phraseId)

  }


 // setPhrases(
  //   phrases.map(item => {
  //     if (item.id === phraseId) {
  //       return { ...item, image: image };
  //     } else {
  //       return item;
  //     }
  //   })
  // )

  console.log(phrases);
  return (
    <AppGrid>
      <Header>LittleSunshine</Header>

      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <AllPhrases
                onUpload={upload}
                image={image}
                phrases={phrases}
                onBookmarkClick={handleBookmarkClick}
                onDeleteClick={handleDelete}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritePhrases
                onUpload={upload}
                phrases={phrases}
                onBookmarkClick={handleBookmarkClick}
                onDeleteClick={handleDelete}
              />
            }
          />
          <Route
            path="/addphrases"
            element={<AddPhrases phrases={phrases} handlePhraseSubmit={handlePhraseSubmit} />}
          />
        </Routes>
      </Main>
      <NavBar />
    </AppGrid>
  );

  function handleBookmarkClick(phraseId) {
    const nextPhrases = phrases.map(item => {
      if (item.id === phraseId) {
        return { ...item, isBookmarked: !item.isBookmarked };
      } else {
        return item;
      }
    });
    setPhrases(nextPhrases);
  }

  function handleDelete(phraseId) {
    setPhrases(phrases.filter(item => item.id !== phraseId));
  }

  // ohne useImmer
  function handlePhraseSubmit({ date, text }) {
    let id = nanoid();
    let isBookmarked = false;
    let photo = image ? image : '';

    setPhrases([{ id, date, text, isBookmarked, photo }, ...phrases]);
  }

  // function handlePhraseSubmit({ date, text }) {
  //   let id = nanoid();
  //   let isBookmarked = false;
  //   let photo = '';

  //   setPhrases(draft => {
  //     draft.push({
  //       id: id,
  //       date: date,
  //       text: text,
  //       isBookmarked: isBookmarked,
  //       image: photo,
  //     });
  //   });
  // }
  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // function testUpload(phraseId) {
  //   const uploadphrases = test.map(item => {
  //     if (item.id === phraseId) {
  //       return { ...item, image: image };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setPhrases(uploadphrases);
  // }
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
  color: #0fcbea;
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
