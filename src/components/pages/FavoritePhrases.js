import styled from 'styled-components';
import PhraseCard from '../PhraseCard.js';
import ModalEmptyPhraseMessage from '../ModalEmptyPhraseMessage.js';

export default function FavoritePhrases({ onBookmarkClick, phrases, onDeleteClick, onUpload, image }) {
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
              <li aria-label="phrase-item" key={phrase.id}>
                <PhraseCard
                  onUpload={(event) => onUpload(event, phrase.id)}
                  image={image}
                  onBookmarkClick={() => onBookmarkClick(phrase.id)}
                  onDeleteClick={() => onDeleteClick(phrase.id)}
                  isBookmarked={phrase.isBookmarked}
                  date={phrase.date}
                  text={phrase.text}
                />
              </li>
            );
          })}
      </PhrasesList>
    </section>
  );
}

const PhrasesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
