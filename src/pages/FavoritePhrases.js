import styled from 'styled-components';
import ModalLoadingInfo from '../components/ModalLoadingInfo.js';
import PhraseCard from '../components/PhraseCard.js';
import ModalEmptyPhraseMessage from '../components/ModalEmptyPhraseMessage.js';
import FilterList from '../components/FilterList.js';

export default function FavoritePhrases({
  onBookmarkClick,
  phrases,
  onDeleteClick,
  onUpload,
  cloudname,
  onImageDeleteClick,
  loadingStatus,
  isLoading,
}) {
  const emptyPhrases = phrases.filter(phrase => phrase.isBookmarked);

  const emptyPhrasesMessage =
    emptyPhrases.length === 0 ? (
      <ModalEmptyPhraseMessage
        emptyPhrasetext="Gehe zurück und markiere deinen Lieblingspruch einfach durch klicken auf das Herzsymbol!"
        titleText="Upps...da fehlt noch was!"
      />
    ) : null;

  return (
    <AllPhrasesWrapper>
      {emptyPhrasesMessage}

      {isLoading ? <ModalLoadingInfo loadingStatus={loadingStatus} /> : null}

      <FilterList phrases={emptyPhrases} />
      <PhrasesList isLoading={isLoading} role="list" aria-label="phrases">
        {phrases
          .filter(phrase => phrase.isBookmarked)
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
`;
