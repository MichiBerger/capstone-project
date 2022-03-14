import PhraseForm from "../PhraseForm.js";

export default function AddPhrases({phrases, handlePhraseSubmit}) {
  return <PhraseForm phrases={phrases} handlePhraseSubmit={handlePhraseSubmit} />
}