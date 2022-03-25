import PhraseForm from '../PhraseForm.js';
import { useEffect } from 'react';
import ModalPhraseAddedMessage from '../ModalPhraseAddedMessage.js';

export default function AddPhrases({ phrases, handlePhraseSubmit, showMessage, handleShowMessage }) {

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
      <PhraseForm phrases={phrases} handlePhraseSubmit={handlePhraseSubmit} />
    </>
  );
}
