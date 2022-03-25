import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import KidsCard from './KidsCard.js';

describe('KidsCard', () => {
  const kidsData = [
    {
      id: 0,
      name: 'Max',
      birthDate: '24.3.2022',
    },
    {
      id: 1,
      name: 'Paul',
      birthDate: '24.3.2022',
    },
  ];

  it('renders a card with name, birthdate and a button', () => {
    render(<KidsCard name={kidsData[0].name} birthDate={kidsData[0].birthDate} kidsId={kidsData[0].id} />);

    const name = screen.getByText(/Max/i);
    const birthDate = screen.getByText(/24.3.2022/i);
    const buttonDelete = screen.getByRole('button', { name: /Delete/i });

    expect(name).toBeInTheDocument();
    expect(birthDate).toBeInTheDocument();
    expect(buttonDelete).toBeInTheDocument();
  });

  it('renders a delete button to delete a kids card', () => {

    const handleDelteKidClick = jest.fn()

    render(<KidsCard handleDeleteKid={handleDelteKidClick} />);

    const buttonDelete = screen.getByRole('button', { name: /Delete/i });

    userEvent.click(buttonDelete);
    expect(handleDelteKidClick).toHaveBeenCalled()

  });
});
