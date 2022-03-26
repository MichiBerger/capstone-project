import styled from 'styled-components';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ModalPhraseAddedMessage from './ModalPhraseAddedMessage.js';
import AddIcon from '../icons/AddIcon.js';

export default function PhraseForm({ handlePhraseSubmit }) {
  const [startDate, setStartDate] = useState(new Date());
  const [phraseText, setPhraseText] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const disabledButton = (phraseText.length === 0 || startDate === null) ?? true;

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(false);
      }, 2000);
    }
  }, [successMessage]);

  function onTextareaChange(event) {
    setPhraseText(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    let newDate = startDate.toLocaleDateString('de-DE', options);

    handlePhraseSubmit({ date: newDate, text: phraseText.trim() });

    setPhraseText('');
    setStartDate(new Date());
    setSuccessMessage(true);
  }

  return (
    <Wrapper>
      <FormWrapper onSubmit={onFormSubmit}>
        <LabelDate htmlFor="date">Wähle ein Datum</LabelDate>
        <DayPicker
          id="date"
          name="date"
          dateFormat="dd-MM-yyyy"
          selected={startDate}
          onChange={date => setStartDate(date)}
          maxDate={new Date()}
        />
        {startDate === null ? <ErrorMessage>Bitte wähle ein Datum!</ErrorMessage> : null}
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
        <AddButton disabled={disabledButton}>
          <AddIcon fill={disabledButton ? '#19337a' : '#fff'} height="30px" width="30px" />

          <span>Füge einen Spruch hinzu!</span>
        </AddButton>
      </FormWrapper>
      {successMessage ? <ModalPhraseAddedMessage message="Dein Spruch wurde erfolgreich hinzugefügt!" /> : null}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
`;

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

const DayPicker = styled(DatePicker)`
  padding: 1rem 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: none;
  border: 1px solid #19337a;
  color: #19337a;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #9ad21c;
  }
`;

const TextInput = styled.textarea`
  border-radius: 10px;
  background-color: #f9f9f9;
  border: 1px solid #19337a;
  color: #19337a;
  resize: none;
  padding: 1rem;

  &:focus {
    outline: none;
    border: 1px solid #9ad21c;
  }
`;

const ErrorMessage = styled.p`
  color: #de0c47;
  margin-top: 0.375rem;
  font-size: 0.75rem;
`;

const AddButton = styled.button`
  margin-top: 1.5rem;
  opacity: 1;

  :disabled {
    opacity: 0.5;
    border: none;
    color: #19337a;
    background: none;
  }

  background-color: #19337a;
  padding: 0.5rem 0;
  border-radius: 25px;
  cursor: pointer;

  span {
    display: block;
    font-size: 0.75rem;
    color: ${props => (props.disabled ? '#19337a' : '#fff')};
  }
`;
