import styled, { css } from 'styled-components';

export default function IconButton({
  onClick,
  onMouseEnter,
  disabled,
  children,
  gridArea,
  alignSelf,
  justifySelf,
  hoverAndActive,
  previewDeleteIcon,
  photoDeleteIcon,
}) {
  return (
    <IconWrapper
      hoverAndActive={hoverAndActive}
      previewDeleteIcon={previewDeleteIcon}
      photoDeleteIcon={photoDeleteIcon}
      gridArea={gridArea}
      alignSelf={alignSelf}
      justifySelf={justifySelf}
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
  justify-self: ${props => (props.justifySelf ? 'end' : 'center')};
  align-self: ${props => (props.alignSelf ? 'end' : 'center')};
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
    background-color: var(--color-amaranth-red);
    position: absolute;
    border-radius: 50%;
    padding: 0.175rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;

    `}

    ${props =>
    props.previewDeleteIcon &&
    `
    background-color: var(--color-amaranth-red);
    position: absolute;
    border-radius: 50%;
    padding: 0.175rem;
    top: 5px;
    right:5px;
    opacity: 1;

    `}
`;
