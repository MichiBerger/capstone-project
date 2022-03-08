import styled from 'styled-components';

export default function PhraseCard({ date, phraseText }) {
  return (
    <PhraseCardWrapper>
      <PhraseCardDate>{date}</PhraseCardDate>
      <PhraseCardText>{phraseText}</PhraseCardText>
    </PhraseCardWrapper>
  );
}

const PhraseCardWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'date date .'
    '. text text'
    '. . .';
  align-items: center;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const PhraseCardDate = styled.time`
  grid-area: date;
`;

const PhraseCardText = styled.p`
  grid-area: text;
`;
