import { render, screen} from '@testing-library/react';
import PhraseForm from './PhraseForm.js';
import phrases from './PhraseData.js'

describe('PhraseForm', () => {

  it('renders a list of phrases', () => {
    render(<PhraseForm phrases={phrases}  />)
  
  })

})
