import styled from 'styled-components';
import AddIcon from './AddIcon.js';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function PhraseForm({ phrases, setPhrases }) {
  const [date, setDate] = useState('');
  const [phraseText, setPhraseText] = useState('');


  function onDateChange(e) {
    setDate(e.target.value);

  }

  function onTextareaChange(e) {
    setPhraseText(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    let id = nanoid();
    setPhrases([...phrases, { id: id, date: date, text: phraseText, isBookmarked: false }]);
    setDate("");
    setPhraseText("")
  }

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <LabelDate htmlFor="date">Wähle ein Datum</LabelDate>
      <DateInput onChange={onDateChange} type="date" name="date" id="date" value={date} />
      <ErrorMessage>Bitte wähle ein Datum!</ErrorMessage>
      <LabelTextArea htmlFor="phrase-text">Was hat Dein Kind gesagt?</LabelTextArea>
      <TextInput
        onChange={onTextareaChange}
        name="phrase-text"
        id="phrase-text"
        cols="30"
        rows="20"
        placeholder="...das ist mein papapa!"
      ></TextInput>
      <ErrorMessage>Füge bitte einen Spruch hinzu!</ErrorMessage>
      <AddButton>
        <AddIcon fill="#2196f3" height="30px" width="30px" />
        <AddButtonText>Füge einen Spruch hinzu!</AddButtonText>
      </AddButton>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelDate = styled.label`
  margin-bottom: 0.5rem;
`;
const LabelTextArea = styled.label`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;
const DateInput = styled.input`
  padding: 1rem 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: none;
  border: 1px solid #2a475e;
  color: #2a475e;
  &:focus {
    outline: none;
    border: 1px solid #f2a122;
  }
`;

const TextInput = styled.textarea`
  border-radius: 10px;
  background-color: #f9f9f9;
  border: 1px solid #2a475e;
  color: #2a475e;
  resize: none;
  padding: 1rem;

  &:focus {
    outline: none;
    border: 1px solid #f2a122;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.375rem;
  font-size: 0.75rem;
`;

const AddButton = styled.button`
  margin-top: 1.5rem;
  background-color: #f2a122;
  border: none;
  padding: 0.5rem 0;
  border-radius: 25px;
`;
const AddButtonText = styled.p`
  font-size: 0.75rem;
  color: #2196f3;
`;
