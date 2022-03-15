import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteButton from './DeleteButton.js';

describe('DeleteButton', () => {
  it('renders a button, svg and sr-only text', () => {
    const deleteClick = jest.fn();
    render(<DeleteButton onDeletePhraseClick={deleteClick} />);
    const button = screen.getByRole('button', { name: /Delete/i });
    const deleteIcon = screen.getByTestId('deleticon');
    const srOnlyText = screen.getByText(/Delete/i);

    expect(button).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
    expect(srOnlyText).toBeInTheDocument();
  });

  it('clicking the button opens a modal message', () => {
    const deleteClick = jest.fn();
    render(<DeleteButton onBookmarkClick={deleteClick} />);

    const button = screen.getByRole('button', { name: /Delete/i });
    userEvent.click(button);

    expect(deleteClick).toHaveBeenCalled();
  });
});
