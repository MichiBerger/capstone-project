import PhraseCard from './PhraseCard.js';
import styled from 'styled-components';

const phrases = [
  {
    date: '22. Feb. 2022',
    phrase: 'Das ist mein Papapa!',
  },
  {
    date: '10. Feb. 2022',
    phrase: 'Ach menno!',
  },
  {
    date: '02. Jan. 2022',
    phrase: 'Das ist mein Papapa!',
  },
  {
    date: '23. Dez. 2021',
    phrase: 'Nochmal Dosinen, Nüsse und Haferflocken! Ja...das wars!',
  },
  {
    date: '06. Jun. 2021',
    phrase: 'Badebanne',
  },
  {
    date: '06. Jun. 2021',
    phrase: 'DasIstDASLängsteWortUmZuÜberprüfenObDasWord',
  },
];

export default function PhraseCardList() {
  return (
    <section>
      <PhrasesList role="list" aria-label="phrases">
        {phrases.map((phrase, index) => {
          return (
            <li aria-label="phrase-item" key={index}>
              <PhraseCard date={phrase.date} phraseText={phrase.phrase} />
            </li>
          );
        })}
      </PhrasesList>
      <ul>
        <li>Testsdsdsds</li>
      </ul>
    </section>
  );
}

const PhrasesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
