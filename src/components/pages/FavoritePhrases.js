import styled from 'styled-components';
import PhraseCard from '../PhraseCard.js';
import ModalEmptyPhraseMessage from '../ModalEmptyPhraseMessage.js';
import breakpoint from '../commons/breakpoints.js';

export default function FavoritePhrases({ onBookmarkClick, phrases, onDeleteClick, onUpload, cloudname, onImageDeleteClick}) {
  const emptyPhrases = phrases.filter(phrase => phrase.isBookmarked);

  const emptyPhrasesMessage =
    emptyPhrases.length === 0 ? (
      <ModalEmptyPhraseMessage
        emptyPhrasetext="Gehe zurück und markiere deinen Lieblingspruch einfach durch klicken auf das Herzsymbol!"
        titleText="Upps...da fehlt noch was!"
      />
    ) : null;

  return (
    <section>
      {emptyPhrasesMessage}
      <PhrasesList role="list" aria-label="phrases">
        {phrases
          .filter(phrase => phrase.isBookmarked)
          .map(phrase => {
            return (
              <PhraseItem aria-label="phrase-item" key={phrase.id}>
                <PhraseCard
                  cloudname={cloudname}
                  onBookmarkClick={() => onBookmarkClick(phrase.id)}
                  onDeleteClick={() => onDeleteClick(phrase.id)}
                  onImageDeleteClick={() => onImageDeleteClick(phrase.id)}
                  onUpload={event => onUpload(phrase.id, event)}
                  isBookmarked={phrase.isBookmarked}
                  date={phrase.date}
                  image={phrase.photo}
                  text={phrase.text}
                />
              </PhraseItem>
            );
          })}
      </PhrasesList>
    </section>
  );
}

const PhrasesList = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PhraseItem = styled.li`
  width: 100%;

  @media only screen and (${breakpoint.device.sm}) {
    width: 47%;
  }
`;
