import { render, screen} from '@testing-library/react';
import PhraseCardList from './PhraseCardList.js';
import phrases from './PhraseData.js'

describe('PhraseCardList', () => {

  it('renders a list of phrases', () => {
    render(<PhraseCardList phrases={phrases}  />)
    const phraseList = screen.getByRole("list", {
      name: /phrases/i,
    })
    const listItem = screen.getAllByRole('listitem')

    expect(phraseList).toBeInTheDocument();
    expect(listItem).toHaveLength(6)
  })

})
