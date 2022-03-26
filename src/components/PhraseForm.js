import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ModalPhraseAddedMessage from './ModalPhraseAddedMessage.js';
import AddIcon from '../icons/AddIcon.js';
import AddKidsIcon from '../icons/AddKidsIcon.js';

export default function PhraseForm({ kidsData, handlePhraseSubmit }) {
  const [selectedName, setSelectedName] = useState('');
  const [isSelectedName, setIsSelectedName] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [phraseText, setPhraseText] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const disabledButton = (phraseText.length === 0 || startDate === null) ?? true;

  const emptyKidsData = kidsData.length === 0;

  console.log(emptyKidsData);
  console.log(kidsData);
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(false);
        navigate('/');
      }, 2000);
    }
  }, [successMessage, navigate]);

  function handleTextAreaChange(event) {
    setPhraseText(event.target.value);
  }

  function handleNameSelectChange(event) {
    console.log(event.target.value);
    setSelectedName(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    let newDate = startDate.toLocaleDateString('de-DE', options);

    handlePhraseSubmit({ name: selectedName, date: newDate, text: phraseText.trim() });
    setPhraseText('');
    setStartDate(new Date());
    setSuccessMessage(true);
  }

  return (
    <Wrapper>
      {emptyKidsData ? (
        <StyledLinkEmptyKidsData to="/createkids">
          <AddKidsIcon fill="#19337a" height="30px" width="30px" />
          <span>Füge ein Kind hinzu!</span>
        </StyledLinkEmptyKidsData>
      ) : (
        <>
          <FormWrapper onSubmit={onFormSubmit}>
            <LabelKid htmlFor="kids">Wähle ein Kind!</LabelKid>
            <NameSelect
              autoFocus
              name="kids"
              id="kids"
              onChange={handleNameSelectChange}
              onFocus={() => setIsSelectedName(false)}
            >
              {kidsData.map(item => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </NameSelect>
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
              onChange={handleTextAreaChange}
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
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
`;

const NameSelect = styled.select`
  border-radius: 10px;
  background-color: #f9f9f9;
  border: 1px solid #19337a;
  color: #19337a;
  padding: 1rem;
  justify-self: start;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #9ad21c;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const StyledLinkEmptyKidsData = styled(Link)`
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  box-shadow: rgba(25, 51, 122, 0.3) 0px 1px 2px 0px, rgba(25, 51, 122, 0.15) 0px 1px 3px 1px;
  border: 1px dashed #19337a;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 */

  span {
    display: block;
    font-size: 1rem;
    color: #19337a;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
const LabelKid = styled.label`
  margin-bottom: 0.5rem;
`;
const LabelDate = styled(LabelKid)`
  margin-top: 1.5rem;
`;
const LabelTextArea = styled(LabelKid)`
  margin-top: 1.5rem;
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
