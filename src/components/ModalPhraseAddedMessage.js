import styled from 'styled-components';

export default function ModalPhraseAddedMessage({ message }) {
  return (
    <AddMessageWrapper>
      <p>{message}</p>
    </AddMessageWrapper>
  );
}

const AddMessageWrapper = styled.article`
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 20px;
  background-color: #9ad21c;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
