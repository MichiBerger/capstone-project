import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ModalPhraseAddedMessage from '../components/ModalPhraseAddedMessage.js';
import PhraseForm from '../components/PhraseForm.js';
import AddKidsIcon from '../icons/AddKidsIcon.js';

export default function AddPhrases({
  kidsData,
  phrases,
  handlePhraseSubmit,
  loadingProcess,
  isPreviewLoading,
  showMessage,
  handleImageUrl,
  handleShowMessage,
  handleImageUploadInPhraseForm,
  imageUrl,
}) {
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        handleShowMessage(false);
      }, 1500);
    }
  }, [handleShowMessage, showMessage]);
  return (
    <>
      {showMessage ? (
        <ModalPhraseAddedMessage message="Dein Kind wurde erfolgreich hinzugefügt! Füge nun einen Spruch hinzu!" />
      ) : null}
      {kidsData.length === 0 ? (
        <StyledLinkEmptyKidsData to="/createkids" onClick={() => handleImageUrl('')}>
          <AddKidsIcon fill="var(--color-indigo-blue)" height="40px" width="40px" />
          <span>Füge ein Kind hinzu!</span>
        </StyledLinkEmptyKidsData>
      ) : (
        <PhraseForm
          imageUrl={imageUrl}
          kidsData={kidsData}
          loadingProcess={loadingProcess}
          phrases={phrases}
          isPreviewLoading={isPreviewLoading}
          handleImageUrl={handleImageUrl}
          handlePhraseSubmit={handlePhraseSubmit}
          handleImageUploadInPhraseForm={handleImageUploadInPhraseForm}
        />
      )}
    </>
  );
}

const StyledLinkEmptyKidsData = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  gap: 10px;
  color: var(--color-indigo-blue);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 250px;
  min-width: 300px;
  border: 1px dashed var(--color-indigo-blue);
  background-color: var(--color-alabaster-grey);
  border-radius: 10px;

  span {
    display: block;
    font-size: 1.2rem;
    color: var(--color-indigo-blue);
  }
`;
