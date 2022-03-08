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
  grid-template-columns:  25% 25% 25% 25%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'date date . .'
    '. text text text'
    '. . . .';
  border-radius: 15px;
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #fff;
`;

const PhraseCardDate = styled.time`
  grid-area: date;
  font-size: 0.75rem;
`;

const PhraseCardText = styled.p`
  grid-area: text;
  word-wrap: break-word;
`;
