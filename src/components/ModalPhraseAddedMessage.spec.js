import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ModalPhraseAddedMessage from './ModalPhraseAddedMessage.js';

describe('ModalPhraseAddedMessage', () => {
  it('renders a text message', () => {
    render(
      <Router>
        <ModalPhraseAddedMessage message="Dein Spruch wurde hinzugefügt!" />
      </Router>
    );

    const messageText = screen.getByText(/Dein Spruch wurde hinzugefügt!/i);
    expect(messageText).toBeInTheDocument();
  });
});
