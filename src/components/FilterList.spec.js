import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import FilterList from './FilterList.js';

describe('FilterList', () => {
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
  ];

  it('renders a tag list with filterbuttons', () => {
    render(
      <Router>
        <FilterList phrases={phrases} />
      </Router>
    );
    screen.debug()
  })
});
