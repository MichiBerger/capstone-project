import { useState } from 'react';
import PhraseCard from './PhraseCard.js';
import styled from 'styled-components';
import PhraseData from './PhraseData.js';

export default function PhraseCardList() {
  const [phrases, setPhrases] = useState(PhraseData);

  function handleIconClick(phraseId) {
    const nextPhrases = phrases.map(item => {
      if (item.id === phraseId) {
        return { ...item, isBookmarked: !item.isBookmarked };
      } else {
        return item;
      }
    });
   setPhrases(nextPhrases);
   console.log("click")
  }
  return (
    <section>
      <PhrasesList role="list" aria-label="phrases">
        {phrases.map(phrase => {
          return (
            <li aria-label="phrase-item" key={phrase.id}>
              <PhraseCard
                onIconClick={() => handleIconClick(phrase.id)}
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
