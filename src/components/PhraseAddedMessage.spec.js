import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import PhraseAddedMessage from './PhraseAddedMessage.js';

describe('PhraseAddedMessage', () => {
  it('renders a text message', () => {
    render(
      <Router>
        <PhraseAddedMessage message="Dein Spruch wurde hinzugefügt!" />
      </Router>
    );

    const messageText = screen.getByText(/Dein Spruch wurde hinzugefügt!/i);
    expect(messageText).toBeInTheDocument();
  });
});
