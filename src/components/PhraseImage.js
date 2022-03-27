import styled from 'styled-components';
import { Image, Transformation } from 'cloudinary-react';
import IconButton from './IconButton.js';
import DeleteIcon from '../icons/DeleteIcon.js';

export default function PhraseImage({
  phraseId,
  hover,
  image,
  cloudname,
  onImageDeleteClick,
  onImageClick,
  gridArea,
  handleHover,
}) {
  return (
    <PhraseImageWrapper gridArea={gridArea}>
      <Image onClick={() => onImageClick(!hover)} publicId={`${image}.png`} cloudName={cloudname} loading="lazy">
        <Transformation width={100} height={100} crop="thumb" />
        <Transformation radius="max" />
      </Image>
      {hover ? (
        <IconButton
          photoDeleteIcon
          onClick={() => {
            onImageDeleteClick(phraseId);
            handleHover(false);
          }}
        >
          <DeleteIcon fill="#fff" height="20" width="20" />
        </IconButton>
      ) : null}
    </PhraseImageWrapper>
  );
}

const PhraseImageWrapper = styled.div`
  display: flex;
  position: relative;
  grid-area: ${props => props.gridArea};
`;
