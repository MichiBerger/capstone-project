import styled from 'styled-components';

export default function PhraseAddedMessage({ message }) {
  return (
    <AddMessageWrapper>
      <p>{message}</p>
    </AddMessageWrapper>
  );
}

const AddMessageWrapper = styled.article`
  color: #2a475e;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f2a122;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
