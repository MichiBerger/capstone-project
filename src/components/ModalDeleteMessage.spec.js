import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ModalDeleteMessage from './ModalDeleteMessage.js';

describe('ModalDeleteMessage', () => {
  it('renders a title, a message text and three buttons', () => {
    render(
      <Router>
        <ModalDeleteMessage
          deleteText="Loeschen"
          cancelText="Abbrechen"
          messageTitle="Spruch löschen"
          messageText="Bist Du sicher"
        />
      </Router>
    );

    const cancelButtonOne = screen.getByRole('button', { name: 'Cancel' });
    const cancelButtonTwo = screen.getByRole('button', { name: 'Cancel Abbrechen' });
    const deleteButton = screen.getByRole('button', { name: 'Delete Loeschen' });

    const title = screen.getByRole('heading', { level: 2 });
    const text = screen.getByText(/Bist Du sicher/i);

    const cancelText = screen.getByText(/Abbrechen/i);
    const deleteText = screen.getByText(/Loeschen/i);

    expect(title).toBeInTheDocument();
    expect(cancelButtonOne).toBeInTheDocument();
    expect(cancelButtonTwo).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(cancelText).toBeInTheDocument();
    expect(deleteText).toBeInTheDocument();
  });

  it('renders clicking the buttons', () => {
    const deleteClick = jest.fn();
    const cancelClick = jest.fn();

    render(
      <Router>
        <ModalDeleteMessage
          deleteText="Loeschen"
          cancelText="Abbrechen"
          messageTitle="Spruch löschen"
          messageText="Bist Du sicher"
          onDeleteClick={deleteClick}
          onCancleClick={cancelClick}
        />
      </Router>
    );

    const cancelButtonOne = screen.getByRole('button', { name: 'Cancel' });
    const deleteButton = screen.getByRole('button', { name: 'Delete Loeschen' });
    const cancelButtonTwo = screen.getByRole('button', { name: 'Cancel Abbrechen' });

    // userEvent.click(cancelButtonOne);
    // userEvent.click(cancelButtonTwo);
    userEvent.click(deleteButton);

    expect(deleteClick).toHaveBeenCalled();
    // expect(cancelClick).toHaveBeenCalled();
    // expect(cancelClick).toHaveBeenCalled();
  });
});
