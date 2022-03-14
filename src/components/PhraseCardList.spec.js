import { render, screen } from '@testing-library/react';
import PhraseCardList from './PhraseCardList.js';

describe('PhraseCardList', () => {
  const phrases = [
    {
      id: 0,
      date: '22. Feb. 2022',
      text: 'Das ist mein Papapa!',
      isBookmarked: false,
    },
    {
      id: 1,
      date: '10. Feb. 2022',
      text: 'Ach menno!',
      isBookmarked: false,
    },
    {
      id: 2,
      date: '02. Jan. 2022',
      text: 'Das ist mein Papapa!',
      isBookmarked: false,
    },
    {
      id: 3,
      date: '23. Dez. 2021',
      text: 'Nochmal Dosinen, Nüsse und Haferflocken! Ja...das wars!',
      isBookmarked: false,
    },
  ];
  it('renders a list of phrases', () => {
    render(<PhraseCardList phrases={phrases} />);
    const phraseList = screen.getByRole('list', {
      name: /phrases/i,
    });
   

    expect(phraseList).toBeInTheDocument();

  });
});
