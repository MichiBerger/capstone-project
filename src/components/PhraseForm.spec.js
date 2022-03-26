import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import PhraseForm from './PhraseForm.js';

describe('PhraseForm', () => {
  it('renders a form with an input, textarea and a button', () => {
    const mockFunction = jest.fn();
    render(
      <MemoryRouter>
        <PhraseForm handlePhraseSubmit={mockFunction} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText('Wähle ein Datum');
    expect(dateInput).toBeInTheDocument();

    const textInput = screen.getByLabelText('Was hat Dein Kind gesagt?');
    expect(textInput).toBeInTheDocument();

    const addButton = screen.getByRole('button', { name: 'Füge einen Spruch hinzu!' });
    expect(addButton).toBeInTheDocument();
  });
  it('renders a submit click', () => {
    const mockFunction = jest.fn();

    render(
      <MemoryRouter>
        <PhraseForm handlePhraseSubmit={mockFunction} />
      </MemoryRouter>
    );


    const textInput = screen.getByLabelText('Was hat Dein Kind gesagt?');
    const addButton = screen.getByRole('button', { name: 'Füge einen Spruch hinzu!' });


    userEvent.type(textInput, 'das ist mein papapa');

    userEvent.click(addButton);

    expect(mockFunction).toHaveBeenCalled();
  });
});
