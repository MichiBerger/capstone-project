import PhraseCardList from './components/PhraseCardList.js';
import { useState } from 'react';
import PhraseData from './components/PhraseData.js';

function App() {
  const [phrases, setPhrases] = useState(PhraseData);

  return (
    <div>
      <PhraseCardList phrases={phrases} onIconClick={handleIconClick} />
    </div>
  );

  function handleIconClick(phraseId) {
    const nextPhrases = phrases.map(item => {
      if (item.id === phraseId) {
        return { ...item, isBookmarked: !item.isBookmarked };
      } else {
        return item;
      }
    });
    setPhrases(nextPhrases);
    console.log('click');
  }
}

export default App;
