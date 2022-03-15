import PhraseCard from './PhraseCard.js';
import styled from 'styled-components';

export default function PhraseCardList({ onBookmarkClick, phrases }) {
  return (
    <section>
      <PhrasesList role="list" aria-label="phrases">
        {phrases.map(phrase => {
          return (
            <li aria-label="phrase-item" key={phrase.id}>
              <PhraseCard
                onBookmarkClick={() => onBookmarkClick(phrase.id)}
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
