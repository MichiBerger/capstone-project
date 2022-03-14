import styled from 'styled-components';
import DeleteButton from './DeleteButton.js';
import HeartIcon from './HeartIcon.js';

export default function PhraseCard({ date, text, isBookmarked, onIconClick }) {
  return (
    <>
      <PhraseCardWrapper>
        <HeartIcon onIconClick={onIconClick} isBookmarked={isBookmarked} />
        <DeleteButton fill="red"/>
        <PhraseCardDate>{date}</PhraseCardDate>
        <PhraseCardText>{text}</PhraseCardText>
      </PhraseCardWrapper>
    </>
  );
}

const PhraseCardWrapper = styled.article`
  display: grid;
  grid-template-columns: auto 2fr auto auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'date . heartIconButton deleteIconButton'
    '. text text text'
    '. . . .';
  border-radius: 15px;
  padding: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #f9f9f9;
  color: #2A475E;
  row-gap: 1rem;
`;

const PhraseCardDate = styled.time`
  grid-area: date;
  font-size: 0.75rem;
  align-self: center;
`;

const PhraseCardText = styled.p`
  grid-area: text;
  word-wrap: break-word;
`;
