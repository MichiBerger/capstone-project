import { useEffect } from 'react';
import ModalPhraseAddedMessage from '../components/ModalPhraseAddedMessage.js';
import PhraseForm from '../components/PhraseForm.js';

export default function AddPhrases({ kidsData, phrases, handlePhraseSubmit, showMessage, handleShowMessage }) {

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        handleShowMessage(false);
      }, 2500);
    }
  }, [handleShowMessage, showMessage]);
  return (
    <>
      {showMessage ? (
        <ModalPhraseAddedMessage message="Dein Kind wurde erfolgreich hinzugefügt! Füge nun einen Spruch hinzu!" />
      ) : null}
      <PhraseForm kidsData={kidsData} phrases={phrases} handlePhraseSubmit={handlePhraseSubmit} />
    </>
  );
}
