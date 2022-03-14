import { render, screen } from '@testing-library/react';
import PhraseCard from './PhraseCard.js';

describe('PhraseCard', () => {
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
  ];
  it('renders a date and a phrase text', () => {
    render(<PhraseCard date={phrases[0].date} text={phrases[0].text} />);

    const date = screen.getByText(/22. Feb. 2022/i);
    expect(date).toBeInTheDocument();

    const phraseText = screen.getByText('Das ist mein Papapa!');
    expect(phraseText).toBeInTheDocument();
  });
});
