import styled from 'styled-components';
import { Image, Transformation } from 'cloudinary-react';
import DeleteIcon from './icons/DeleteIcon.js';
import IconButton from './IconButton.js';

export default function PhraseImage({ hover, image, cloudname, onDeleteImageIconClick, onImageClick, gridArea }) {
  return (
    <PhraseImageWrapper gridArea={gridArea}>
      <Image onClick={onImageClick} publicId={`${image}.png`} cloudName={cloudname} loading="lazy">
        <Transformation width={100} height={100} crop="thumb" />
        <Transformation radius="max" />
      </Image>
      {hover ? (
        <IconButton photoDeleteIcon onClick={onDeleteImageIconClick}>
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
