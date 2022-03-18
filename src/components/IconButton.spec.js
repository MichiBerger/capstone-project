import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IconButton from './IconButton.js';

describe('IconButton', () => {
  const childrenTest = 'test';

  it('renders a button and children text', () => {
    render(<IconButton children={childrenTest} />);
    const button = screen.getByRole('button');
    const children = screen.getByText('test');

    expect(button).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
