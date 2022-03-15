import styled from 'styled-components';
import { useState } from 'react';
import DeleteButton from './DeleteButton.js';
import HeartButton from './HeartButton.js';
import ModalDeleteMessage from './ModalDeleteMessage.js';

export default function PhraseCard({ date, text, isBookmarked, onBookmarkClick, onDeleteClick }) {
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  function handleCancel() {
    setShowDeleteMessage(false);
  }

  return (
    <>
      <PhraseCardWrapper>
        <HeartButton onBookmarkClick={onBookmarkClick} isBookmarked={isBookmarked} />
        <DeleteButton
          disabled={showDeleteMessage}
          fill="#DE0C47"
          onClick={() => setShowDeleteMessage(!showDeleteMessage)}
        />
        <PhraseCardDate>{date}</PhraseCardDate>
        <PhraseCardText>{text}</PhraseCardText>
        {showDeleteMessage ? (
          <ModalDeleteMessage
            onDeleteClick={onDeleteClick}
            onCancleClick={handleCancel}
            deleteText="Löschen"
            cancleText="Abbrechen"
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
  grid-template-columns: auto 50% 10% 10%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'date . heartIconButton deleteIconButton'
    '. text text text'
    '. . . .';
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
