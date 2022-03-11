import PhraseCard from '../PhraseCard.js';
import styled from 'styled-components';

export default function FavoritePhrases({ onIconClick, phrases }) {
  const emptyPhrases = phrases.filter(phrase => phrase.isBookmarked);
  const emptyPhrasesMessage =
    emptyPhrases.length === 0 ? (
      <EmptyPhrasesMessageWrapper>
        <h2>Upps...da fehlt noch was!</h2>
        <p>
          Klicke in der Navigatoion auf "Alle" und markiere deine Lieblingsprüche einfach durch anklicken auf das
          Herzsymbol!
        </p>
      </EmptyPhrasesMessageWrapper>
    ) : null;

  return (
    <section>
      {emptyPhrasesMessage}
      <PhrasesList role="list" aria-label="phrases">
        {phrases
          .filter(phrase => phrase.isBookmarked === true)
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

const EmptyPhrasesMessageWrapper = styled.article`
  border: 1px solid #f2a122;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: rgba(242, 161, 34, 0.3) 0px 1px 2px 0px, rgba(242, 161, 34, 0.15) 0px 1px 3px 1px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
