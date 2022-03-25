import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import KidsForm from './KidsForm.js';

describe('KidsForm', () => {
  const kidsData = [
    {
      id: 0,
      name: 'Felix',
      birthDate: '22.03.2020',
    },
  ];
  it('renders a form with two input fields and a button', () => {
    const mockFunction = jest.fn();

    render(
      <MemoryRouter>
        <KidsForm kidsData={kidsData} handleKidSubmit={mockFunction} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/Wann ist Dein Kind geboren/i);
    expect(dateInput).toBeInTheDocument();

    const textInput = screen.getByLabelText(/Wie heisst Dein Kind/i);
    expect(textInput).toBeInTheDocument();

    const addButton = screen.getByRole('button', { name: /Erstelle ein Kind/i });
    expect(addButton).toBeInTheDocument();
  });
});
