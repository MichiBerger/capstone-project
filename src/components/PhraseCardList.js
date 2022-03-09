import { useState } from 'react';
import PhraseCard from './PhraseCard.js';
import styled from 'styled-components';
import PhraseData from './PhraseData.js';

export default function PhraseCardList() {
  const [phrases, setPhrases] = useState(PhraseData);
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleIconClick(phraseId, nextBookmarked) {
    console.log(phrases.map(item => item.phrase));

  }
  return (
    <section>
      <PhrasesList role="list" aria-label="phrases">
        {phrases.map((phrase, index) => {
          return (
            <li aria-label="phrase-item" key={index}>
              <PhraseCard
                onIconClick={handleIconClick}
                isBookmarked={isBookmarked}
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
