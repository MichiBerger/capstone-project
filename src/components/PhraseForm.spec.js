import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import PhraseForm from './PhraseForm.js';
import { act } from 'react-dom/test-utils';

describe('PhraseForm', () => {
  const kidsData = [
    {
      id: 0,
      name: 'Max',
      birthDate: '22.02.2022',
    },
  ];
  it('renders a form with a select field, an input, textarea and a button', () => {
    const mockFunction = jest.fn();
    render(
      <MemoryRouter>
        <PhraseForm handlePhraseSubmit={mockFunction} kidsData={kidsData} />
      </MemoryRouter>
    );

    // const test = screen.getByRole("")

    const dateInput = screen.getByLabelText(/Wähle ein Datum/i);
    const select = screen.getByLabelText(/Wähle ein Kind!/i);
    const option = screen.getByRole('option', { name: /Wähle ein Kind!/i })
    const textInput = screen.getByLabelText('Was hat Dein Kind gesagt?');
    const addButton = screen.getByRole('button', { name: /Füge einen Spruch hinzu!/i });

    expect(dateInput).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(option).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
  it('renders user inputs', () => {
    const mockFunction = jest.fn();

    render(
      <MemoryRouter>
        <PhraseForm handlePhraseSubmit={mockFunction} kidsData={kidsData}/>
      </MemoryRouter>
    );

    const textInput = screen.getByLabelText('Was hat Dein Kind gesagt?');
    const option = screen.getByRole('option', { name: /Wähle ein Kind!/i })
    // const addButton = screen.getByRole('button', { name: 'Füge einen Spruch hinzu!' });
    userEvent.type(option, /Wähle ein Kind!/)
    userEvent.type(textInput, 'das ist mein papapa');

  });


    it('handlePhraseSubmit function is not called when inputfields are empty', () => {
      const mockFunction = jest.fn();
      const onSubmit = jest.fn();

      render(
        <MemoryRouter>
          <PhraseForm handlePhraseSubmit={mockFunction(onSubmit)} />
        </MemoryRouter>
      );

      const addButton = screen.getByRole('button', { name: /Füge einen Spruch hinzu!/i });
      act(() => {
        addButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      expect(mockFunction).toHaveBeenCalled();
      expect(onSubmit).not.toHaveBeenCalled();
    });

});
