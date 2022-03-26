import CancelIcon from '../icons/CancelIcon.js';
import DeleteIcon from '../icons/DeleteIcon.js';
import styled from 'styled-components';
import CancelIconCircle from '../icons/CancelIconCircle.js';

export default function ModalDeleteMessage({
  onDeleteClick,
  onCancleClick,
  deleteText,
  cancelText,
  messageTitle,
  messageText,
}) {
  return (
    <div
      style={{
        position: 'absolute',
      }}
    >
      <Wrapper>
        <CancelCircleButton onClick={onCancleClick}>
          <CancelIconCircle height="24px" width="24px" fill="#19337A" />
          <span className="sr-only">Cancel</span>
        </CancelCircleButton>
        <h2>{messageTitle}</h2>
        <p>{messageText}</p>
        <ButtonWrapper>
          <CancelButton onClick={onCancleClick}>
            <CancelIcon height="20px" width="20px" fill="#19337A" />
            <span className="sr-only">Cancel</span>
            <p>{cancelText}</p>
          </CancelButton>
          <DeleteButton onClick={onDeleteClick}>
            <DeleteIcon height="20px" width="20px" fill="#fff" />
            <span className="sr-only">Delete</span>
            <p>{deleteText}</p>
          </DeleteButton>
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.article`
  border: 1px solid #19337a;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-radius: 20px;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  z-index: 1;

  h2 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
`;

const CancelCircleButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  gap: 10px;
`;

const CancelButton = styled.button`
  color: #19337a;
  background-color: transparent;
  border: 1px solid #19337a;
  padding: 0.2rem 0;
  border-radius: 10px;
  width: 50%;
  cursor: pointer;
  p {
    font-size: 0.75rem;
  }
`;

const DeleteButton = styled.button`
  color: #fff;
  background-color: #de0c47;
  border: 1px solid #19337a;
  padding: 0.2rem 1rem;
  border-radius: 10px;
  width: 50%;
  cursor: pointer;
  p {
    font-size: 0.75rem;
  }
`;
