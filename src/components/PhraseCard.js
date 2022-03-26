import styled from 'styled-components';
import { useState } from 'react';
import IconButton from './IconButton.js';
import ModalDeleteMessage from './ModalDeleteMessage.js';
import PhraseImage from './PhraseImage.js';
import AddPhotoIcon from '../icons/AddPhotoIcon.js';
import DeleteIcon from '../icons/DeleteIcon.js';
import HeartFilledIcon from '../icons/HeartFilledIcon.js';
import HeartOutlinedIcon from '../icons/HeartOutlinedIcon.js';

export default function PhraseCard({
  date,
  name,
  text,
  isBookmarked,
  onBookmarkClick,
  onDeleteClick,
  onImageDeleteClick,
  image,
  onUpload,
  cloudname,
}) {
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <PhraseCardWrapper>
        <IconButton hoverAndActive type="button" onClick={onBookmarkClick} gridArea="heartIconButton">
          {isBookmarked ? (
            <HeartFilledIcon fill="#9AD21C" height="30" width="30" />
          ) : (
            <HeartOutlinedIcon fill="#9AD21C" height="30" width="30" />
          )}
          <span className="sr-only">Bookmark</span>
        </IconButton>
        <IconButton
          hoverAndActive
          gridArea="deleteIconButton"
          disabled={showDeleteMessage}
          onClick={() => setShowDeleteMessage(!showDeleteMessage)}
        >
          <DeleteIcon fill="#DE0C47" height="30" width="30" />
          <span className="sr-only">Delete</span>
        </IconButton>
        <IconButton hoverAndActive gridArea="addPhotoIconButton">
          <label>
            <input
              data-testid="photo-upload"
              onChange={onUpload}
              id="image-upload"
              type="file"
              className="sr-only"
              accept="image/*"
            />
            <AddPhotoIcon height="30" width="30" fill="#19337a" />
            <span className="sr-only">Upload</span>
          </label>
        </IconButton>
        <PhraseCardDate>{date}</PhraseCardDate>
        <PhraseCardText>{name}:<br/>
        {text}</PhraseCardText>
        {image ? (
          <PhraseImage
            gridArea="image"
            cloudname={cloudname}
            hover={hover}
            image={image}
            onImageClick={() => setHover(!hover)}
            onDeleteImageIconClick={() => {
              onImageDeleteClick();
              setHover(false);
            }}
          />
        ) : null}
        {showDeleteMessage ? (
          <ModalDeleteMessage
            onDeleteClick={onDeleteClick}
            onCancleClick={handleCancel}
            deleteText="Löschen"
            cancelText="Abbrechen"
            messageTitle="Spruch löschen"
            messageText="Bist Du sicher, dass Du den Spruch löschen möchtest? Das kann nicht rückgängig gemacht werden!"
          />
        ) : null}
      </PhraseCardWrapper>
    </>
  );

  function handleCancel() {
    setShowDeleteMessage(false);
  }
}

const PhraseCardWrapper = styled.article`
  display: grid;
  grid-template-columns: minmax(100px, 100px) minmax(100px, auto) repeat(3, 5%);
  grid-template-rows: auto 1f auto;
  grid-template-areas:
    'date name heartIconButton deleteIconButton addPhotoIconButton'
    'image text text text .'
    '. . . . .';
  border-radius: 15px;
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f9f9f9;
  color: #19337a;
  gap: 1rem 0.5rem;
  position: relative;
  width: 100%;
  min-height: 200px;
`;

const PhraseCardDate = styled.time`
  grid-area: date;
  font-size: 0.75rem;
  align-self: center;
`;

const PhraseCardText = styled.p`
  grid-area: text;
  word-wrap: break-word;
`;
