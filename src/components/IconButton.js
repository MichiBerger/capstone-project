import styled, { css } from 'styled-components';

export default function IconButton({
  onClick,
  onMouseEnter,
  disabled,
  children,
  gridArea,
  hoverAndActive,
  photoDeleteIcon,
}) {
  return (
    <IconWrapper
      hoverAndActive={hoverAndActive}
      photoDeleteIcon={photoDeleteIcon}
      gridArea={gridArea}
      disabled={disabled}
      onClick={onClick}
      type="button"
      onMouseEnter={onMouseEnter}
    >
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

  ${props =>
    props.hoverAndActive &&
    css`
      :hover {
        opacity: 1;
        transform: scale(1.1);
      }
      :active {
        transform: scale(0.9);
        background: transparent;
        transition: all 0.2s ease-out;
      }
    `}

  ${props =>
    props.photoDeleteIcon &&
    `
    background-color: #DE0C47;
    position: absolute;
    border-radius: 50%;
    padding: 0.175rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;

    `}
`;
