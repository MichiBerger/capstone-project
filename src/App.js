import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import AllPhrases from './components/pages/AllPhrases.js';
import AddPhrases from './components/pages/AddPhrases.js';
import CreateKidsPage from './components/pages/CreateKidsPage.js';
import FavoritePhrases from './components/pages/FavoritePhrases.js';
import breakpoint from './components/commons/breakpoints.js';

const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;

function App() {
  const [phrases, setPhrases] = useState(loadFromLocal('allPhrases') ?? []);
  const [kidsData, setKidsData] = useState(loadFromLocal('kidsData') ?? []);
  const [loadingStatus, setLoadingStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    saveToLocal('allPhrases', phrases);
    saveToLocal('kidsData', kidsData);
  }, [phrases, kidsData]);

  return (
    <AppGrid>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <AllPhrases
                cloudname={CLOUDNAME}
                loadingStatus={loadingStatus}
                isLoading={isLoading}
                phrases={phrases}
                onBookmarkClick={handleBookmarkClick}
                onDeleteClick={handleDelete}
                onImageDeleteClick={handleImageDelete}
                onUpload={upload}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritePhrases
                cloudname={CLOUDNAME}
                loadingStatus={loadingStatus}
                isLoading={isLoading}
                phrases={phrases}
                onBookmarkClick={handleBookmarkClick}
                onDeleteClick={handleDelete}
                onImageDeleteClick={handleImageDelete}
                onUpload={upload}
              />
            }
          />
          <Route
            path="/addphrases"
            element={
              <AddPhrases
                showMessage={showMessage}
                setShowMessage={setShowMessage}
                phrases={phrases}
                handlePhraseSubmit={handlePhraseSubmit}
              />
            }
          />
          <Route
            path="/createkids"
            element={
              <CreateKidsPage
                kidsData={kidsData}
                setKidsData={setKidsData}
                showMessage={showMessage}
                setShowMessage={setShowMessage}
              />
            }
          />
        </Routes>
      </Main>
      <NavBar />
    </AppGrid>
  );

  //Bookmark a phrase
  function handleBookmarkClick(phraseId) {
    setPhrases(
      phrases.map(item => {
        if (item.id === phraseId) {
          return { ...item, isBookmarked: !item.isBookmarked };
        } else {
          return item;
        }
      })
    );
  }

  //Delete a phrase
  function handleDelete(phraseId) {
    setPhrases(phrases.filter(item => item.id !== phraseId));
  }

  //Delete a image
  function handleImageDelete(phraseId) {
    setPhrases(
      phrases.map(item => {
        if (item.id === phraseId) {
          return { ...item, photo: '' };
        } else {
          return item;
        }
      })
    );
  }

  //Adding a phrase
  function handlePhraseSubmit({ date, text }) {
    let id = nanoid();
    let isBookmarked = false;
    let photo = '';

    setPhrases([{ id, date, text, isBookmarked, photo }, ...phrases]);
  }

  // Photoupload to phraseCard
  function upload(phraseId, event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`;

    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          const { loaded, total } = progressEvent;
          let percentage = Math.round((loaded * 100) / total);

          setLoadingStatus(percentage);
          setIsLoading(true);
        },
      })
      .then(response => {
        setPhrases(
          phrases.map(item => {
            if (item.id === phraseId) {
              return { ...item, photo: response.data.public_id };
            } else {
              return item;
            }
          })
        );
        if (response.status === 200) {
          setIsLoading(false);
        }
      })
      .catch(error => console.error(error));
  }

  // Local Storage
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
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr 48px;

  @media only screen and (${breakpoint.device.sm}) {
    max-width: 760px;
    margin: 0 auto;
  }
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
