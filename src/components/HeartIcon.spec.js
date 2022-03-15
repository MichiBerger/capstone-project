import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeartIcon from './HeartIcon.js';

describe('HeartIcon', () => {
  it('renders a button, img and sr-only text', () => {
    render(<HeartIcon />);
    const button = screen.getByRole('button', { name: /bookmark/i });
    const bookmarkIcon = screen.getByRole('img');
    const srOnlyText = screen.getByText('Bookmark');

    expect(button).toBeInTheDocument();
    expect(bookmarkIcon).toBeInTheDocument();
    expect(srOnlyText).toBeInTheDocument();
  });

  it('clicking the button toggles the bookmark status', () => {
    const toggle = jest.fn();
    render(<HeartIcon onBookmarkClick={toggle} />);

    const button = screen.getByRole('button', { name: /bookmark/i });
    userEvent.click(button);

    expect(toggle).toHaveBeenCalled();
  });
});
