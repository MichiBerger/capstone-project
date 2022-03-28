import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import PhraseCard from './PhraseCard.js';

describe('PhraseCard', () => {
  const phrases = [
    {
      id: 0,
      date: '22. Feb. 2022',
      text: 'Das ist mein Papapa!',
      name: "Max",
      photo: '1121212',
      isBookmarked: false,
    },
    {
      id: 1,
      date: '10. Feb. 2022',
      text: 'Ach menno!',
      name: "Hannah",
      photo: '',
      isBookmarked: false,
    },
  ];
  it('renders a card with date, name, phrasetext, buttons and file upload inputs', () => {
    render(<PhraseCard date={phrases[0].date} text={phrases[0].text} name={phrases[0].name}/>);

    const date = screen.getByText(/22. Feb. 2022/i);
    const phraseText = screen.getByText(/Das ist mein Papapa/i);
    const name = screen.getByText(/Max/i)
    const buttonBookmark = screen.getByRole('button', { name: /Bookmark/i });
    const buttonDelete = screen.getByRole('button', { name: /Delete/i });
    const photoUploadInput = screen.getAllByTestId(/photo-upload/i);
    const uploadButtons = screen.getAllByRole("button", {name: /upload/i})

    expect(date).toBeInTheDocument();
    expect(phraseText).toBeInTheDocument();
    expect(name).toBeInTheDocument();

    expect(buttonBookmark).toBeInTheDocument();
    expect(buttonDelete).toBeInTheDocument();
    expect(photoUploadInput).toHaveLength(3);
    expect(uploadButtons).toHaveLength(3);
  });

  it('renders a togglebutton to bookmark a phrase', () => {
    const toggleBookmark = jest.fn();

    render(<PhraseCard onBookmarkClick={toggleBookmark} />);

    const buttonBookmark = screen.getByRole('button', { name: /Bookmark/i });
    userEvent.click(buttonBookmark);
    expect(toggleBookmark).toHaveBeenCalled()

  });
});
