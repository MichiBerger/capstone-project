import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import AllPhrases from './pages/AllPhrases.js';
import AddPhrases from './pages/AddPhrases.js';
import CreateKidsPage from './pages/CreateKidsPage.js';
import FavoritePhrases from './pages/FavoritePhrases.js';
import breakpoint from './commons/breakpoints.js';

const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;
const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;

const initialPhrase = [
  {
    name: 'Max',
    date: '25. März 2022',
    id: 'PYaHT9ymtyVHW2tCollee',
    isBookmarked: false,
    photo: 'sybgbgokbdhkutb2xbx5',
    text: 'ahh kackscheisse!',
  },
];

function App() {
  const [phrases, setPhrases] = useState(loadFromLocal('allPhrases') ?? initialPhrase);
  const [kidsData, setKidsData] = useState(loadFromLocal('kidsData') ?? []);
  const [loadingStatus, setLoadingStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false)
  const [showMessage, setShowMessage] = useState(false);
  const [imagePublicId, setImagePublicId] = useState('');
  const [imageUrl, setImageUrl] = useState('');

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
                imageUrl={imageUrl}
                kidsData={kidsData}
                phrases={phrases}
                showMessage={showMessage}
                isPreviewLoading={isPreviewLoading}
                loadingProcess={loadingStatus}
                handleImageUrl={handleImageUrl}
                handlePhraseSubmit={handlePhraseSubmit}
                handleShowMessage={handleShowMessage}
                handleImageUploadInPhraseForm={handleImageUploadInPhraseForm}
              />
            }
          />
          <Route
            path="/createkids"
            element={
              <CreateKidsPage
                kidsData={kidsData}
                showMessage={showMessage}
                handleDeleteKid={handleDeleteKid}
                handleKidSubmit={handleKidSubmit}
                setShowMessage={setShowMessage}
                handleShowMessage={handleShowMessage}
              />
            }
          />
        </Routes>
      </Main>
      <NavBar />
    </AppGrid>
  );

  //Adding a kid
  function handleKidSubmit({ name, birthDate }) {
    const id = nanoid();
    setKidsData([{ id, name, birthDate }, ...kidsData]);
  }

  //Delete a kid
  function handleDeleteKid(kidsId) {
    setKidsData(kidsData.filter(item => item.id !== kidsId));
  }

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
  function handlePhraseSubmit({ name, date, text }) {
    let id = nanoid();
    let isBookmarked = false;
    let photo = imagePublicId;

    setPhrases([{ id, name, date, text, isBookmarked, photo }, ...phrases]);
  }

  //Photoupload to phraseCard
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

  //Photo upload general

  function handleImageUploadInPhraseForm(event) {
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
          handlePreviewLoading(true);
        },
      })
      .then(response => {
        handleImagePublicId(response.data.public_id);
        handleImageUrl(response.data.url);
        handlePreviewLoading(false)
      })
      .catch(error => console.error(error));
  }

  function handleImagePublicId(response) {
    setImagePublicId(response);
  }
  function handleImageUrl(response) {
    setImageUrl(response);
  }
  function handlePreviewLoading(value){
    setIsPreviewLoading(value)
  }

  // Set showMessage
  function handleShowMessage(value) {
    setShowMessage(value);
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
  grid-template-rows: 50px 1fr 60px;
  max-width: 1024px;
  background-color: #efefef;
  margin: 0 auto;

  @media only screen and (${breakpoint.device.sm}) {
    grid-template-rows: 60px 1fr 60px;
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
