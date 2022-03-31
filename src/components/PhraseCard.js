import styled from 'styled-components';
import { useState } from 'react';
import IconButton from './IconButton.js';
import ModalDeleteMessage from './ModalDeleteMessage.js';
import AddPhotoIcon from '../icons/AddPhotoIcon.js';
import DeleteIcon from '../icons/DeleteIcon.js';
import HeartFilledIcon from '../icons/HeartFilledIcon.js';
import HeartOutlinedIcon from '../icons/HeartOutlinedIcon.js';
import ReactCardFlip from 'react-card-flip';
import SwitchIcon from '../icons/SwitchIcon.js';

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

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <PhraseCardWrapper>
          {!image ? (
            <NoBackgroundImageFrontWrapper>
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

                  <AddPhotoIcon height="30" width="30" fill="var(--color-indigo-blue)" />
                  <span className="sr-only">Upload</span>
                </label>
              </IconButton>
            </NoBackgroundImageFrontWrapper>
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
                  <span className="sr-only">Photo delete</span>
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
                  <HeartFilledIcon fill="var(--color-atlantis-green)" height="30" width="30" />
                ) : (
                  <HeartOutlinedIcon fill="var(--color-atlantis-green)" height="30" width="30" />
                )}
                <span className="sr-only">Bookmark</span>
              </IconButton>
              <IconButton hoverAndActive onClick={() => setShowDeleteMessage(!showDeleteMessage)}>
                <DeleteIcon fill="var(--color-amaranth-red)" height="30" width="30" />
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
                  <AddPhotoIcon height="30" width="30" fill="var(--color-indigo-blue)" />
                  <span className="sr-only">Upload</span>
                </label>
              </IconButton>
              <IconButton hoverAndActive onClick={handleFlipClick}>
                <SwitchIcon height="30" width="30" fill="var(--color-trinidad-orange)" />
              </IconButton>
            </ButtonWrapper>
          </ContextWrapper>

          {showDeleteMessage ? (
            <ModalDeleteMessage
              data-testid="modal"
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
          {image ? (
            <BackgroundImageBack img={image}>
              <IconButton alignSelf justifySelf onClick={handleFlipClick}>
                <SwitchIcon height="30" width="30" fill="var(--color-amaranth-red)" />
              </IconButton>
            </BackgroundImageBack>
          ) : (
            <NoBackgroundImageBackWrapper>
              <div>
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
                    <AddPhotoIcon height="30" width="30" fill="var(--color-indigo-blue)" />
                    <span className="sr-only">Upload</span>
                  </label>
                </IconButton>
                <span>Füge ein Bild hinzu</span>
              </div>

              <IconButton alignSelf justifySelf onClick={handleFlipClick}>
                <SwitchIcon height="30" width="30" fill="var(--color-amaranth-red)" />
              </IconButton>
            </NoBackgroundImageBackWrapper>
          )}
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

const PhraseCardWrapperBack = styled.article`
  display: grid;
  border-radius: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  gap: 1rem 0.5rem;
  position: relative;
  width: 100%;
  min-height: 200px;
  background-color: var(--color-alabaster-grey);
`;

const PhraseCardWrapper = styled(PhraseCardWrapperBack)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  color: var(--color-indigo-blue); ;
`;

const NoBackgroundImageFrontWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px dashed var(--color-indigo-blue); ;
`;
const NoBackgroundImageBackWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  place-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
  border-radius: 15px;

  div {
    display: grid;
    place-items: center;
    gap: 5px;
  }
`;

const BackgroundImageBack = styled(NoBackgroundImageBackWrapper)`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const BackgroundImage = styled.div`
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
  grid-template-rows: 2fr auto;
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
