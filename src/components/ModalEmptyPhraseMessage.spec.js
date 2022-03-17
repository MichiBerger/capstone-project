import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ModalEmptyPhraseMessage from './ModalEmptyPhraseMessage.js';

describe('ModalEmptyPhraseMessage', () => {
  it('renders a title, a message text and link', () => {
    render(
      <Router>
        <ModalEmptyPhraseMessage
          titleText="Upps...da fehlt noch was!"
          emptyPhrasetext="Gehe zurück und markiere deinen Lieblingspruch einfach durch klicken auf das Herzsymbol!"
        />
      </Router>
    );

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();

    const message = screen.getByText(
      /Gehe zurück und markiere deinen Lieblingspruch einfach durch klicken auf das Herzsymbol!/i
    );
    expect(message).toBeInTheDocument();

    const linkBackwards = screen.getByRole('link');
    expect(linkBackwards).toBeInTheDocument();
  });
});
