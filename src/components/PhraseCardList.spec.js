import { render, screen, within} from '@testing-library/react';
import PhraseCardList from './PhraseCardList.js';

describe('PhraseCardList', () => {
  it('renders a list of phrases', () => {
    render(<PhraseCardList />)
    const phraseList = screen.getByRole("list", {
      name: /phrases/i,
    })
    expect(phraseList).toBeInTheDocument();
  })
  it('renders listitems', () => {

    render(<PhraseCardList  />)

    const phraseItems = screen.getAllByRole("listitem")

    expect(phraseItems).toBeTruthy()

  })
})
