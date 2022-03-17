import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PhraseCard from '../PhraseCard.js';
import AddIcon from '../icons/AddIcon.js';

export default function AllPhrases({ onBookmarkClick, phrases, onDeleteClick, onUpload, cloudname, preset }) {
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
            <li aria-label="phrase-item" key={phrase.id}>
              <PhraseCard
                preset={preset}
                cloudname={cloudname}
                onUpload={event => onUpload(phrase.id, event)}
                image={phrase.photo}
                onBookmarkClick={() => onBookmarkClick(phrase.id)}
                onDeleteClick={() => onDeleteClick(phrase.id)}
                isBookmarked={phrase.isBookmarked}
                date={phrase.date}
                text={phrase.text}
              />
            </li>
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
  flex-direction: column;
  gap: 1rem;
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
