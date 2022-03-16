import styled from 'styled-components';
import { useState } from 'react';
import ModalDeleteMessage from './ModalDeleteMessage.js';
import IconButton from './IconButton.js';
import AddPhotoIcon from './icons/AddPhotoIcon.js';
import DeleteIcon from './icons/DeleteIcon.js';
import HeartFilledIcon from './icons/HeartFilledIcon.js';
import HeartOutlinedIcon from './icons/HeartOutlinedIcon.js';

export default function PhraseCard({ date, text, isBookmarked, onBookmarkClick, onDeleteClick, image, onUpload }) {
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  function handleCancel() {
    setShowDeleteMessage(false);
  }

  return (
    <>
      <PhraseCardWrapper>

        <IconButton type="button" onClick={onBookmarkClick} gridArea="heartIconButton">
          {isBookmarked ? <HeartFilledIcon fill="#9AD21C" /> : <HeartOutlinedIcon fill="#9AD21C" />}
          <span className="sr-only">Bookmark</span>
        </IconButton>
        <IconButton
          gridArea="deleteIconButton"
          disabled={showDeleteMessage}
          onClick={() => setShowDeleteMessage(!showDeleteMessage)}
        >
          <DeleteIcon fill="#DE0C47" />
          <span className="sr-only">Delete</span>
        </IconButton>
        <IconButton gridArea="addPhotoIconButton">
          <label htmlFor="image-upload">
            <input onChange={onUpload} id="image-upload" style={{ display: 'none' }} type="file" />
            <AddPhotoIcon fill="#19337a" />
            <span className="sr-only">Upload</span>
          </label>
        </IconButton>
        <PhraseCardDate>{date}</PhraseCardDate>
        <PhraseCardText>{text}</PhraseCardText>
        {image ?
        <img src={image} alt="" style={{ width: "80px", height:"80px", gridArea: "image" }} />
       : null}
        {showDeleteMessage ? (
          <ModalDeleteMessage
            onDeleteClick={onDeleteClick}
            onCancleClick={handleCancel}
            deleteText="Löschen"
            cancelText="Abbrechen"
            messageTitle="Spruch löschen"
            messageText="Bist Du sicher, dass Du den Spruch löschen möchtest? Das kann nicht rückgängig gemacht werden"
          />
        ) : null}
      </PhraseCardWrapper>
    </>
  );
}

const PhraseCardWrapper = styled.article`
  display: grid;
  grid-template-columns: auto 40% 10% 10% 10%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'date . heartIconButton deleteIconButton addPhotoIconButton'
    'image text text text text'
    '. . . . .';
  border-radius: 15px;
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f9f9f9;
  color: #19337a;
  row-gap: 1rem;
  position: relative;
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

