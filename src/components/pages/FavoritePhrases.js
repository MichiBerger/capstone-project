import PhraseCard from '../PhraseCard.js';
import styled from 'styled-components';

export default function FavoritePhrases({ onIconClick, phrases }) {
  return (
    <section>
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
