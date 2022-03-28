import styled from 'styled-components';
import { useState } from 'react';
import IconButton from './IconButton.js';
import ModalDeleteMessage from './ModalDeleteMessage.js';
import AddPhotoIcon from '../icons/AddPhotoIcon.js';
import DeleteIcon from '../icons/DeleteIcon.js';
import HeartFilledIcon from '../icons/HeartFilledIcon.js';
import HeartOutlinedIcon from '../icons/HeartOutlinedIcon.js';
import ReactCardFlip from 'react-card-flip';
import CardBack from './CardBack.js';

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
  phraseId,
}) {
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [hover, setHover] = useState(false);

  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlipClick(event) {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

  console.log(isFlipped);

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <PhraseCardWrapper>
          {!image ? (
            <div
              style={{
                borderRight: '1px dashed #19337a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton hoverAndActive>
                <label>
                  <input
                    data-testid="photo-upload"
                    onChange={event => onUpload(phraseId, event)}
                    id="image-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                  />
                  <AddPhotoIcon height="30" width="30" fill="#19337a" />
                  <span className="sr-only">Upload</span>
                </label>
              </IconButton>
            </div>
          ) : (
            <BackgroundImage img={image} onClick={() => handleHover(!hover)}>
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
            </BackgroundImage>
          )}

          <ContextWrapper>
            <ContentWrapper>
              <PhraseCardDate>{date}</PhraseCardDate>
              <PhraseCardName>{name}</PhraseCardName>
              <PhraseCardText>"{text}"</PhraseCardText>
            </ContentWrapper>
            <ButtonWrapper>
              <IconButton hoverAndActive type="button" onClick={() => onBookmarkClick(phraseId)}>
                {isBookmarked ? (
                  <HeartFilledIcon fill="#9AD21C" height="30" width="30" />
                ) : (
                  <HeartOutlinedIcon fill="#9AD21C" height="30" width="30" />
                )}
                <span className="sr-only">Bookmark</span>
              </IconButton>
              <IconButton
                hoverAndActive
                disabled={showDeleteMessage}
                onClick={() => setShowDeleteMessage(!showDeleteMessage)}
              >
                <DeleteIcon fill="#DE0C47" height="30" width="30" />
                <span className="sr-only">Delete</span>
              </IconButton>
              <IconButton hoverAndActive>
                <label>
                  <input
                    data-testid="photo-upload"
                    onChange={event => onUpload(phraseId, event)}
                    id="image-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                  />
                  <AddPhotoIcon height="30" width="30" fill="#19337a" />
                  <span className="sr-only">Upload</span>
                </label>
              </IconButton>
              <button onClick={handleFlipClick}>flip</button>
            </ButtonWrapper>
          </ContextWrapper>

          {showDeleteMessage ? (
            <ModalDeleteMessage
              phraseId={phraseId}
              onDeleteClick={onDeleteClick}
              onCancelClick={handleCancel}
              deleteText="Löschen"
              cancelText="Abbrechen"
              messageTitle="Spruch löschen"
              messageText="Bist Du sicher, dass Du den Spruch löschen möchtest? Das kann nicht rückgängig gemacht werden!"
            />
          ) : null}
        </PhraseCardWrapper>

        {/* Back */}

        <PhraseCardWrapperBack>




              <button onClick={handleFlipClick}>flip</button>



        </PhraseCardWrapperBack>
      </ReactCardFlip>
    </>
  );

  function handleHover(value) {
    setHover(value);
  }

  function handleCancel(value) {
    setShowDeleteMessage(value);
  }
}

const PhraseCardWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f9f9f9;
  color: #19337a;
  gap: 1rem 0.5rem;
  position: relative;
  width: 100%;
  min-height: 200px;
`;

const PhraseCardWrapperBack = styled(PhraseCardWrapper)`
`

const BackgroundImage = styled.section`
  position: relative;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  width: 100%;
  height: 100%;
  opacity: 1;
`;

const ContextWrapper = styled.section`
  padding: 1rem;
  display: grid;
  grid-template-rows: 2fr 1fr;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

const PhraseCardDate = styled.time`
  font-size: 0.75rem;
  align-self: flex-end;
`;

const PhraseCardText = styled.p`
  font-size: 1rem;
  word-wrap: break-word;
`;

const PhraseCardName = styled.h2`
  font-size: 1.2rem;
  text-decoration: underline;
`;

const ButtonWrapper = styled.div`
  justify-self: end;
  display: flex;
  align-self: flex-end;
  gap: 5px;
`;
