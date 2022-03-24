import styled from 'styled-components';
import AddIcon from './icons/AddIcon.js';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ModalPhraseAddedMessage from './ModalPhraseAddedMessage.js';

export default function CreateKidForm({ kidsData, setKidsData }) {
  const [startDate, setStartDate] = useState(new Date());
  const [nameInput, setNameInput] = useState('');
  const [isName, setIsName] = useState(false);
  const [isNameExisting, setIsNameExisting] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false);

  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  const disabledButton = nameInput.length <= 1 || startDate === null ? true : false;

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(false);
      }, 2000);
    }
  }, [successMessage]);

  function handleTextInput(e) {
    kidsData.filter(name =>
      name.kidsName.toLowerCase() === e.target.value.toLowerCase() ? setIsNameExisting(true) : setIsNameExisting(false)
    );

    setIsName(false);
    setNameInput(e.target.value);
  }

  function onCreateKidFormSubmit(event) {
    event.preventDefault();
    let newDate = startDate.toLocaleDateString('de-DE', options);
    let id = nanoid();

    setKidsData([...kidsData, { id: id, kidsName: nameInput.trim(), birthDate: newDate }]);
    setNameInput('');
    setStartDate(new Date());
    setSuccessMessage(true);
  }
  console.log(kidsData);

  function handleOnBlurName() {
    if (nameInput.length === 0) {
      setIsName(true);
    } else {
      setIsName(false);
    }
  }

  return (
    <Wrapper>
      <h2>Füge Dein Kind hinzu!</h2>
      <FormWrapper onSubmit={onCreateKidFormSubmit}>
        <LabelInputText htmlFor="kids-name">Wie heisst Dein Kind?</LabelInputText>
        <TextInput
          type="text"
          id="kids-name"
          name="kids-name"
          onChange={handleTextInput}
          onBlur={handleOnBlurName}
          maxLength="20"
          placeholder="Vorname (erforderlich)"
          autoFocus
          autoComplete="off"
        />
        {isNameExisting ? <ErrorMessage>Achtung! Der eingegebene Name existiert bereits!</ErrorMessage> : null}
        {isName ? <ErrorMessage>Bitte gebe einen Namen ein!</ErrorMessage> : null}
        {nameInput.length >= 20 ? <ErrorMessage>Die maximale Eingabe an Zeichen ist erreicht!</ErrorMessage> : null}

        <LabelDate htmlFor="birthdate">Wann ist Dein Kind geboren</LabelDate>
        <DayPicker
          id="birthdate"
          name="birthdate"
          selected={startDate}
          onChange={date => setStartDate(date)}
          peekNextMonth
          dateFormat="dd-MM-yyyy"
          showYearDropdown
          dropdownMode="select"
          maxDate={new Date()}
        />

        {startDate === null ? <ErrorMessage>Bitte wähle ein Geburtsdatum!</ErrorMessage> : null}

        {/* <LabelInputText htmlFor="phrase-text">Was hat Dein Kind gesagt?</LabelInputText>
        <TextInput
          onChange={onTextareaChange}
          value={nameInput}
          name="phrase-text"
          id="phrase-text"
          cols="20"
          rows="10"
          placeholder="...das ist mein papapa!"
          maxLength="300"
        ></TextInput> */}

        <AddButton disabled={disabledButton}>
          <AddIcon fill={disabledButton ? '#19337a' : '#fff'} height="30px" width="30px" />
          <p disabled={disabledButton}>Erstelle ein Kind</p>
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
  margin-top: 1.5rem;
`;
const LabelInputText = styled.label`
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

const TextInput = styled.input`
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

  p {
    font-size: 0.75rem;
    color: ${props => (props.disabled ? '#19337a' : '#fff')};
  }
`;
