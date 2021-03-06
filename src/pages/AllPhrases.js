import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ModalLoadingInfo from '../components/ModalLoadingInfo.js';
import PhraseCard from '../components/PhraseCard.js';
import AddIcon from '../icons/AddIcon.js';
import FilterList from '../components/FilterList.js';

export default function AllPhrases({
  cloudname,
  filterButtons,
  loadingStatus,
  phrases,
  isLoading,
  onBookmarkClick,
  onDeleteClick,
  onFilterClick,
  onImageDeleteClick,
  onUpload,
}) {
  return (
    <AllPhrasesWrapper>
      {isLoading && <ModalLoadingInfo loadingStatus={loadingStatus} />}

      {phrases.length === 0 ? (
        <AddButtonLink to="/addphrases">
          <AddIcon fill="var(--color-indigo-blue)" height="40px" width="40px" />
          <p>Füge einen Spruch hinzu!</p>
        </AddButtonLink>
      ) : (
        <>
          <FilterList phrases={phrases} onFilterClick={onFilterClick} filterButtons={filterButtons} />
          <PhrasesList isLoading={isLoading} role="list" aria-label="phrases">
            {phrases
              .filter(item => item.name.includes(filterButtons) || filterButtons === 'Alle')
              .map(phrase => {
                return (
                  <PhraseItem aria-label="phrase-item" key={phrase.id}>
                    <PhraseCard
                      cloudname={cloudname}
                      onBookmarkClick={onBookmarkClick}
                      onDeleteClick={onDeleteClick}
                      onImageDeleteClick={onImageDeleteClick}
                      onUpload={onUpload}
                      isBookmarked={phrase.isBookmarked}
                      phraseId={phrase.id}
                      date={phrase.date}
                      name={phrase.name}
                      image={phrase.photo}
                      text={phrase.text}
                    />
                  </PhraseItem>
                );
              })}
          </PhrasesList>
        </>
      )}
    </AllPhrasesWrapper>
  );
}

const AllPhrasesWrapper = styled.section`
  position: relative;
  height: calc(100% - 110px);
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
`;

const AddButtonLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  gap: 10px;
  color: var(--color-indigo-blue);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 250px;
  min-width: 300px;
  border: 1px dashed var(--color-indigo-blue);
  background-color: var(--color-alabaster-grey);
  border-radius: 10px;
`;
