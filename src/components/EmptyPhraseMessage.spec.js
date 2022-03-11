import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import EmptyPhraseMessage from './EmptyPhraseMessage.js';

describe('EmptyPhraseMessage', () => {
  it('renders a title, a message text and link', () => {
    render(
      <Router>
        <EmptyPhraseMessage
          titleText="Upps...da fehlt noch was!"
          emptyPhrasetext="Gehe zurück und markiere deine Lieblingsprüche einfach durch anklicken auf das Herzsymbol!"
        />
      </Router>
    );

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();

    const message = screen.getByText(
      /Gehe zurück und markiere deine Lieblingsprüche einfach durch anklicken auf das Herzsymbol!/i
    );
    expect(message).toBeInTheDocument();

    const linkBackwards = screen.getByRole('link');
    console.log(linkBackwards);

    expect(linkBackwards).toBeInTheDocument();
  });
});
