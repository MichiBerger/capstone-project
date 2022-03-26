import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from './Header.js';

describe('Header', () => {
  it('renders a title and two links', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const title = screen.getByRole('heading', { level: 1 });
    const linkBackwards = screen.getAllByRole('link');

    expect(linkBackwards).toHaveLength(2);
    expect(title).toBeInTheDocument();
  });
});
