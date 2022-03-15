import styled from 'styled-components';
import DeleteIcon from './DeleteIcon.js';

export default function DeleteButton({ fill, onClick, disabled }) {
  return (
    <IconWrapper disabled={disabled} onClick={onClick} type="button">
      <DeleteIcon data-testid="deleteicon" fill={fill} />
      <span className="sr-only">Delete</span>
    </IconWrapper>
  );
}

const IconWrapper = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  grid-area: deleteIconButton;
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    transform: scale(1.2);
    background: transparent;
    transition: all 0.2s ease-out;
  }
`;
