import PhraseForm from '../PhraseForm.js';
import { useEffect } from 'react';
import ModalPhraseAddedMessage from '../ModalPhraseAddedMessage.js';

export default function AddPhrases({ phrases, handlePhraseSubmit, showMessage, setShowMessage }) {

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 2500);
    }
  }, [setShowMessage, showMessage]);
  return (
    <>
      {showMessage ? (
        <ModalPhraseAddedMessage message="Dein Kind wurde erfolgreich hinzugefügt! Füge nun einen Spruch hinzu!" />
      ) : null}
      <PhraseForm phrases={phrases} handlePhraseSubmit={handlePhraseSubmit} />
    </>
  );
}
