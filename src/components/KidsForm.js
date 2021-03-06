import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import AddIcon from '../icons/AddIcon.js';

export default function KidsForm({ kidsData, handleShowMessage, handleKidSubmit }) {
  const [startDate, setStartDate] = useState(new Date());
  const [nameInput, setNameInput] = useState('');
  const [isName, setIsName] = useState(false);
  const navigate = useNavigate();

  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  const filteredName = kidsData.filter(item => item.name.toLowerCase().trim() === nameInput.toLowerCase().trim());
  const filteredNameAndDate = kidsData.filter(
    item =>
      item.birthDate === startDate.toLocaleDateString('de-DE', options) &&
      item.name.toLowerCase().trim() === nameInput.toLowerCase().trim()
  );

  const disabledButton = nameInput.length <= 1 || startDate === null || filteredNameAndDate.length > 0 ? true : false;

  function handleTextInput(event) {
    setNameInput(event.target.value);
  }

  async function createKidFormSubmit(event) {
    event.preventDefault();
    const newDate = startDate.toLocaleDateString('de-DE', options);

    handleKidSubmit({ name: nameInput.trim(), birthDate: newDate });
    setStartDate(new Date());
    setNameInput('');
    handleShowMessage(true);
    navigate('/addphrases');
  }

  function handleEmptyNameOnFocusDate() {
    if (nameInput.length === 0) {
      setIsName(true);
    } else {
      setIsName(false);
    }
  }

  return (
    <Wrapper>
      <FormWrapper onSubmit={createKidFormSubmit}>
        <LabelInputText htmlFor="kids-name">Wie heisst Dein Kind?</LabelInputText>
        <TextInput
          type="text"
          id="kids-name"
          name="kids-name"
          onChange={handleTextInput}
          onFocus={() => setIsName(false)}
          maxLength="20"
          placeholder="Vorname (erforderlich)"
          autoFocus
          autoComplete="off"
          value={nameInput}
        />
        {filteredName.length > 0 ? <ErrorMessage>Achtung! Der eingegebene Name existiert bereits!</ErrorMessage> : null}
        {isName ? <ErrorMessage>Bitte gebe einen Namen ein!</ErrorMessage> : null}
        {nameInput.length >= 20 ? <ErrorMessage>Die maximale Eingabe an Zeichen ist erreicht!</ErrorMessage> : null}

        <LabelDate htmlFor="birthdate">Wann ist Dein Kind geboren?</LabelDate>
        <DayPicker
          id="birthdate"
          name="birthdate"
          selected={startDate}
          onChange={date => {
            if (date === null) {
              setStartDate(new Date());
            } else {
              setStartDate(date);
            }
          }}
          dateFormat="dd.MM.yyyy"
          showYearDropdown
          dropdownMode="select"
          maxDate={new Date()}
          onFocus={handleEmptyNameOnFocusDate}
        />
        {startDate === null ? (
          <ErrorMessage data-testid="birthdate">Bitte w??hle ein Geburtsdatum aus!</ErrorMessage>
        ) : null}
        {filteredNameAndDate.length > 0 ? (
          <ErrorMessage>Dein Kind existiert bereits. Eine doppelte Eingabe ist nicht m??glich!</ErrorMessage>
        ) : null}

        <AddButton type="submit" disabled={disabledButton}>
          <AddIcon fill={disabledButton ? 'var(--color-indigo-blue)' : '#fff'} height="30px" width="30px" />
          <span>Erstelle ein Kind</span>
        </AddButton>
      </FormWrapper>
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
  background-color: var(--color-alabaster-grey);
  border-radius: 10px;
  border: none;
  border: 1px solid var(--color-indigo-blue);
  color: var(--color-indigo-blue);
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid var(--color-atlantis-green);
  }
`;

const TextInput = styled.input`
  border-radius: 10px;
  background-color: var(--color-alabaster-grey);
  border: 1px solid var(--color-indigo-blue);
  color: var(--color-indigo-blue);
  resize: none;
  padding: 1rem;

  &:focus {
    outline: none;
    border: 1px solid var(--color-atlantis-green);
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-amaranth-red);
  margin-top: 0.375rem;
  font-size: 0.75rem;
`;

const AddButton = styled.button`
  margin-top: 1.5rem;
  opacity: 1;

  :disabled {
    opacity: 0.5;
    border: none;
    color: var(--color-indigo-blue);
    background: none;
  }

  background-color: var(--color-indigo-blue);
  padding: 0.5rem 0;
  border-radius: 25px;
  cursor: pointer;

  span {
    display: block;
    font-size: 0.75rem;
    color: ${props => (props.disabled ? 'var(--color-indigo-blue);' : '#fff')};
  }
`;
