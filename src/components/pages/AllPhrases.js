import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PhraseCard from '../PhraseCard.js';
import breakpoint from '../commons/breakpoints.js';
import AddIcon from '../icons/AddIcon.js';


export default function AllPhrases({ onBookmarkClick, phrases, onDeleteClick, onUpload, cloudname }) {
  
  const noPhrases =
    phrases.length === 0 ? (
      <AddButtonLink to="/addphrases">
        <AddIcon fill="#19337a" height="40px" width="40px" />
        <p>Füge einen Spruch hinzu!</p>
      </AddButtonLink>
    ) : null;

  return (
    <AllPhrasesWrapper>
      {noPhrases}

      <PhrasesList role="list" aria-label="phrases">
        {phrases.map(phrase => {
          return (
            <PhraseItem aria-label="phrase-item" key={phrase.id}>
              <PhraseCard
                cloudname={cloudname}
                onUpload={event => onUpload(phrase.id, event)}
                image={phrase.photo}
                onBookmarkClick={() => onBookmarkClick(phrase.id)}
                onDeleteClick={() => onDeleteClick(phrase.id)}
                isBookmarked={phrase.isBookmarked}
                date={phrase.date}
                text={phrase.text}
              />
            </PhraseItem>
          );
        })}
      </PhrasesList>
    </AllPhrasesWrapper>
  );
}

const AllPhrasesWrapper = styled.section`
  position: relative;
`;
const PhrasesList = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PhraseItem = styled.li`
  width: 100%;

  @media only screen and (${breakpoint.device.sm}) {
    width: 47%;
  }
`;

const AddButtonLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  gap: 10px;
  color: #19337a;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 250px;
  min-width: 250px;
`;
