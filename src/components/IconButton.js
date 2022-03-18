import styled from 'styled-components';

export default function IconButton({ onClick, disabled, children, gridArea }) {
  return (
    <IconWrapper gridArea={gridArea} disabled={disabled} onClick={onClick} type="button">
      {children}
    </IconWrapper>
  );
}

const IconWrapper = styled.button`
  border: none;
  background: transparent;
  grid-area: ${props => props.gridArea};
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
    background: transparent;
    transition: all 0.2s ease-out;
  }
`;
