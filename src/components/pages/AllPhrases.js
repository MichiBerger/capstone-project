import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ModalLoadingInfo from '../ModalLoadingInfo.js';
import PhraseCard from '../PhraseCard.js';
import breakpoint from '../commons/breakpoints.js';
import AddIcon from '../icons/AddIcon.js';

export default function AllPhrases({
  onBookmarkClick,
  phrases,
  onDeleteClick,
  onUpload,
  cloudname,
  onImageDeleteClick,
  loadingStatus,
  isLoading,
}) {
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

      {isLoading ? <ModalLoadingInfo loadingStatus={loadingStatus} /> : null}

      <PhrasesList isLoading={isLoading} role="list" aria-label="phrases">
        {phrases.map(phrase => {
          return (
            <PhraseItem aria-label="phrase-item" key={phrase.id}>
              <PhraseCard
                cloudname={cloudname}
                onBookmarkClick={() => onBookmarkClick(phrase.id)}
                onDeleteClick={() => onDeleteClick(phrase.id)}
                onImageDeleteClick={() => onImageDeleteClick(phrase.id)}
                onUpload={event => onUpload(phrase.id, event)}
                isBookmarked={phrase.isBookmarked}
                date={phrase.date}
                image={phrase.photo}
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
  height: calc(100% - 96px);
`;
const PhrasesList = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: ${props => (props.isLoading ? '0.2' : '1')};
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
