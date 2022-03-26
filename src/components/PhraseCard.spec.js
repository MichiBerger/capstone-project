import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import PhraseCard from './PhraseCard.js';

describe('PhraseCard', () => {
  const phrases = [
    {
      id: 0,
      date: '22. Feb. 2022',
      text: 'Das ist mein Papapa!',
      photo: '1121212',
      isBookmarked: false,
    },
    {
      id: 1,
      date: '10. Feb. 2022',
      text: 'Ach menno!',
      photo: '',
      isBookmarked: false,
    },
  ];
  it('renders a card with date, phrase text,3 buttons and an file upload input', () => {
    render(<PhraseCard date={phrases[0].date} text={phrases[0].text} />);

    const date = screen.getByText(/22. Feb. 2022/i);
    const phraseText = screen.getByText('Das ist mein Papapa!');
    const buttonBookmark = screen.getByRole('button', { name: /Bookmark/i });
    const buttonDelete = screen.getByRole('button', { name: /Delete/i });
    const buttonUpload = screen.getByRole('button', { name: /Upload/i });
    const photoUpload = screen.getByTestId(/photo-upload/i);

    expect(date).toBeInTheDocument();
    expect(phraseText).toBeInTheDocument();
    expect(buttonBookmark).toBeInTheDocument();
    expect(buttonDelete).toBeInTheDocument();
    expect(buttonUpload).toBeInTheDocument();
    expect(photoUpload).toBeInTheDocument();
  });

  it('renders a togglebutton to bookmark a phrase', () => {
    const toggleBookmark = jest.fn();

    render(<PhraseCard onBookmarkClick={toggleBookmark} />);

    const buttonBookmark = screen.getByRole('button', { name: /Bookmark/i });
    userEvent.click(buttonBookmark);
    expect(toggleBookmark).toHaveBeenCalled()

  });
});
