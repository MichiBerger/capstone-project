import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import FilterList from './FilterList.js';

describe('FilterList', () => {
  it('renders a tag list with filterbuttons', () => {
    const phrases = [
      {
        id: 0,
        date: '22. Feb. 2022',
        text: 'Das ist mein Papapa!',
        name: 'Max',
        photo: '1121212',
        isBookmarked: false,
      },
      {
        id: 1,
        date: '10. Feb. 2022',
        text: 'Ach menno!',
        name: 'Hannah',
        photo: '',
        isBookmarked: false,
      },
      {
        id: 2,
        date: '11. Feb. 2022',
        text: 'Ich mag so gern Godschillas!',
        name: 'Hannah',
        photo: '',
        isBookmarked: false,
      },
    ];
    render(
      <Router>
        <FilterList phrases={phrases} />
      </Router>
    );

    const filterList = screen.getByRole('list');
    const listItem = screen.getAllByRole('listitem');
    const tagAlle = screen.getByRole('button', { name: /Alle/i });
    const tagMax = screen.getByRole('button', { name: /Max/i });
    const tagHannah = screen.getByRole('button', { name: /Hannah/i });

    expect(filterList).toBeInTheDocument();
    expect(listItem).toHaveLength(3);
    expect(tagAlle).toBeInTheDocument();
    expect(tagMax).toBeInTheDocument();
    expect(tagHannah).toBeInTheDocument();
  });

  it('renders a tag list with "Alle" and "Hannah" tags', () => {
    const phrases = [
      {
        id: 1,
        date: '10. Feb. 2022',
        text: 'Ach menno!',
        name: 'Hannah',
        photo: '',
        isBookmarked: false,
      },
      {
        id: 2,
        date: '11. Feb. 2022',
        text: 'Ich mag so gern Godschillas!',
        name: 'Hannah',
        photo: '',
        isBookmarked: false,
      },
    ];
    render(
      <Router>
        <FilterList phrases={phrases} />
      </Router>
    );
    const filterList = screen.getByRole('list');
    const listItem = screen.getAllByRole('listitem');
    const tagAlle = screen.getByRole('button', { name: /Alle/i });
    const tagMax = screen.queryByRole('button', { name: /Max/i });
    const tagHannah = screen.queryByRole('button', { name: /Hannah/i });

    expect(filterList).toBeInTheDocument();
    expect(listItem).toHaveLength(2);
    expect(tagAlle).toBeInTheDocument();
    expect(tagMax).not.toBeInTheDocument();
    expect(tagHannah).toBeInTheDocument();
  });

  it('renders a tag list with just "Alle" tag', () => {
    const phrases = [];
    render(
      <Router>
        <FilterList phrases={phrases} />
      </Router>
    );
    const filterList = screen.getByRole('list');
    const listItem = screen.getAllByRole('listitem');
    const tagAlle = screen.getByRole('button', { name: /Alle/i });
    const tagMax = screen.queryByRole('button', { name: /Max/i });
    const tagHannah = screen.queryByRole('button', { name: /Hannah/i });

    expect(filterList).toBeInTheDocument();
    expect(listItem).toHaveLength(1);
    expect(tagAlle).toBeInTheDocument();
    expect(tagMax).not.toBeInTheDocument();
    expect(tagHannah).not.toBeInTheDocument();
  });
});
