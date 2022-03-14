import { render, screen } from '@testing-library/react';
import PhraseCard from './PhraseCard.js';

describe('PhraseCard', () => {
  it('renders a date and a phrase text', () => {
    render(<PhraseCard date="22. Feb. 2022" phraseText="Das ist mein Papapa!" />);

    const date = screen.getByText(/22. Feb. 2022/i);
    expect(date).toBeInTheDocument();

    const phraseText = screen.getByText(/Das ist mein Papapa!/i);
    expect(phraseText).toBeInTheDocument();
  });
});
