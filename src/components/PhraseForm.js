import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ModalPhraseAddedMessage from './ModalPhraseAddedMessage.js';
import AddIcon from '../icons/AddIcon.js';
import AddPhotoIcon from '../icons/AddPhotoIcon.js';
import IconButton from './IconButton.js';
import DeleteIcon from '../icons/DeleteIcon.js';

export default function PhraseForm({
  imageUrl,
  kidsData,
  handleImageUrl,
  handlePhraseSubmit,
  handleImageUploadInPhraseForm,
  isPreviewLoading,
  loadingProcess
}) {
  const [selectedName, setSelectedName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [phraseText, setPhraseText] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const disabledButton =
    (phraseText.length === 0 || startDate === null || selectedName === '' || selectedName === 'Wähle ein Kind!') ??
    true;

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(false);
        navigate('/');
      }, 2000);
    }
  }, [successMessage, navigate]);


  return (
    <Wrapper>
      <FormWrapper onSubmit={onFormSubmit}>
        <LabelKid htmlFor="kids">Wähle ein Kind!</LabelKid>
        <NameSelect autoFocus name="kids" id="kids" onChange={handleNameSelectChange}>
          <option value="Wähle ein Kind!">Wähle ein Kind!</option>
          {kidsData?.map(item => (
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

        {imageUrl ? (
          <>
            <PreviewImage img={imageUrl}>
              <IconButton previewDeleteIcon onClick={() => handleImageUrl('')}>
                <DeleteIcon fill="#fff" height="20" width="20" />
                <span className="sr-only">Foto löschen</span>
              </IconButton>
            </PreviewImage>
          </>
        ) : (
          <>
            <LabelImage htmlFor="file-upload">
              <span> Wähle ein Bild (optional)</span>
              <input
                id="file-upload"
                type="file"
                onChange={event => handleImageUploadInPhraseForm(event)}
                className="sr-only"
                accept="image/*"
              />
              <PhotoUploadField>
                <AddPhotoIcon height="24px" width="24px" fill="#19337a" />
                <span className="sr-only">Fotoupload</span>
              </PhotoUploadField>
            </LabelImage>
          </>
        )}
        {isPreviewLoading ? <p>Dein Bild wird hochgeladen: {loadingProcess}%</p> : null}

        <AddButton disabled={disabledButton}>
          <AddIcon fill={disabledButton ? '#19337a' : '#fff'} height="30px" width="30px" />
          <span>Füge einen Spruch hinzu!</span>
        </AddButton>
      </FormWrapper>
      {successMessage ? <ModalPhraseAddedMessage message="Dein Spruch wurde erfolgreich hinzugefügt!" /> : null}
    </Wrapper>
  );

  function handleTextAreaChange(event) {
    setPhraseText(event.target.value);
  }

  function handleNameSelectChange(event) {
    setSelectedName(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    let newDate = startDate.toLocaleDateString('de-DE', options);

    handlePhraseSubmit({ name: selectedName, date: newDate, text: phraseText.trim(), photo: imageUrl });
    setPhraseText('');
    handleImageUrl('');
    setStartDate(new Date());
    setSuccessMessage(true);
  }
}

const PreviewImage = styled.div`
  position: relative;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-top: 1.5rem;
  height: 200px;
`;

const Wrapper = styled.section`
  position: relative;
`;

const PhotoUploadField = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #f9f9f9;
  border: 1px solid #19337a;
  color: #19337a;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  justify-content: center;
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

const LabelImage = styled(LabelKid)`
  margin-top: 1.5rem;

  span {
    display: block;
    marginbottom: 0.5rem;
  }
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
