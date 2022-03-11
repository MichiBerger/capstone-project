import styled from 'styled-components';
import PhraseCard from '../PhraseCard.js';
import EmptyPhraseMessage from '../FavoriteEmptyPhraseMessage.js';

export default function FavoritePhrases({ onIconClick, phrases }) {
  const emptyPhrases = phrases.filter(phrase => phrase.isBookmarked);

  const emptyPhrasesMessage =
    emptyPhrases.length === 0 ? (
      <EmptyPhraseMessage
        emptyPhrasetext="Gehe zurück und markiere deine Lieblingsprüche einfach durch anklicken auf das Herzsymbol!"
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
                  onIconClick={() => onIconClick(phrase.id)}
                  isBookmarked={phrase.isBookmarked}
                  date={phrase.date}
                  phraseText={phrase.phrase}
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
