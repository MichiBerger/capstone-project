import styled from 'styled-components';
import DeleteIcon from './DeleteIcon.js';

export default function DeleteButton({ fill }) {
  return (
    <IconWrapper type="button">
      <DeleteIcon fill={fill}/>
      <span className="sr-only">Bookmark</span>
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
  justify-self: end;
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

  img {
    opacity: 0.7;
  }
`;

const HeartFilled = styled.svg`
  fill: #f2a122;
`;
const HeartOutlined = styled.svg`
  fill: #f2a122;
`;
