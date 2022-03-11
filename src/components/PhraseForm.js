import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import AddIcon from './AddIcon.js';

export default function PhraseForm() {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data)

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <LabelText htmlFor="date">Wähle ein Datum</LabelText>
      <DateInput {...register("date")} id="date" required />
      <LabelText htmlFor="phrase-text">Was hat Dein Kind gesagt?</LabelText>
      <TextInput
        name="phrase-text"
        id="phrase-text"
        cols="30"
        rows="20"
        placeholder="...das ist mein papapa!"
        required
      ></TextInput>
      <AddButton>
        <AddIcon fill="#2a475e" height="30px" width="30px" />
        <AddButtonText>Füge einen Spruch hinzu!</AddButtonText>
      </AddButton>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelText = styled.label`
  margin-bottom: 0.5rem;
`;
const DateInput = styled.input`
  padding: 1rem 1rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  border: 1px solid #2a475e;
  color: #2a475e;
`;

const TextInput = styled.textarea`
  margin-bottom: 1.5rem;
  border-radius: 10px;
  border: 1px solid #2a475e;
  color: #2a475e;
  resize: none;
  padding: 1rem;
  &::placeholder {
    font-size: 1rem;
  }
`;

const AddButton = styled.button`
  background-color: #f2a122;
  border: none;
  padding: 0.5rem 0;
  border-radius: 25px;
`;
const AddButtonText = styled.p`
  font-size: 0.75rem;
  color: #2a475e;
`;
