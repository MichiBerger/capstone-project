import styled from 'styled-components';
import AddIcon from './AddIcon.js';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PhraseForm({ phrases, setPhrases }) {
  const [startDate, setStartDate] = useState(new Date());
  const [phraseText, setPhraseText] = useState('');

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  function onTextareaChange(e) {
    setPhraseText(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    let id = nanoid();

    let newDate = startDate.toLocaleDateString('de-DE', options);

    setPhrases([{ id: id, date: newDate, text: phraseText, isBookmarked: false }, ...phrases]);
    setPhraseText('');
    setStartDate(new Date());
    console.log('klick');
  }

  console.log(startDate.toLocaleDateString('de-DE', options));

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <LabelDate htmlFor="date">Wähle ein Datum</LabelDate>
      <DayPicker
        id="date"
        name="date"
        dateFormat="dd-MM-yyyy"
        selected={startDate}
        onChange={date => setStartDate(date)}
        maxDate={startDate}
      />

      {/* {date.length === 0 ? <ErrorMessage>Bitte wähle ein Datum!</ErrorMessage> : null} */}
      <LabelTextArea htmlFor="phrase-text">Was hat Dein Kind gesagt?</LabelTextArea>
      <TextInput
        onChange={onTextareaChange}
        value={phraseText}
        name="phrase-text"
        id="phrase-text"
        cols="20"
        rows="10"
        placeholder="...das ist mein papapa!"
        maxLength="300"
      ></TextInput>
      {phraseText.length === 300 ? (
        <ErrorMessage>Du hast die maximale Anzahl an Buchstaben erreicht!</ErrorMessage>
      ) : null}

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
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #f2a122;
  }
`;

const DayPicker = styled(DatePicker)`
  padding: 1rem 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: none;
  border: 1px solid #2a475e;
  color: #2a475e;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #f2a122;
  }

  button {
    background-color: #f2a122;
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
  background-color: rgba(242, 161, 34);
  border: none;
  padding: 0.5rem 0;
  border-radius: 25px;
  cursor: pointer;
  &:active {
    background-color: rgba(242, 161, 34, 0.9);
  }
`;
const AddButtonText = styled.p`
  font-size: 0.75rem;
  color: #2196f3;
`;
