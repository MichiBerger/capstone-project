import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteButton from './DeleteButton.js';

describe('DeleteButton', () => {
  it('renders a button, svg and sr-only text', () => {
    render(<DeleteButton />);
    const button = screen.getByRole('button', { name: /Delete/i });

    const srOnlyText = screen.getByText(/Delete/i);

    const svg = screen.getByTestId('delete-icon');
    expect(svg).toBeInTheDocument();

    expect(button).toBeInTheDocument();
    expect(srOnlyText).toBeInTheDocument();
  });

  it('calls the mock function when the button is clicked', () => {
    const deleteClick = jest.fn();
    render(<DeleteButton onClick={deleteClick} />);

    const button = screen.getByRole('button', { name: /Delete/i });
    userEvent.click(button);

    expect(deleteClick).toHaveBeenCalled();
  });
});
