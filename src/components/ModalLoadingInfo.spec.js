import ModalLoadingInfo from './ModalLoadingInfo.js';
import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

describe('ModalLoadingInfo', () => {
  it('renders a title, a message text and three buttons', () => {
    const loadingStatus = 100;
    render(
      <Router>
        <ModalLoadingInfo loadingStatus={loadingStatus} />
      </Router>
    );

    const title = screen.getByRole('heading', { level: 2 });
    const messsage = screen.getByText(/Dein Foto wird gerade hochgeladen. Wir bitten Dich um ein wenig Geduld!/i);
    const text = screen.getByText(/Lädt/i);
    const loadingStatusText = screen.getByText(`${loadingStatus}%`);
    const progressBarWrapper = screen.getByRole('article');

    expect(title).toBeInTheDocument();
    expect(messsage).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(progressBarWrapper).toBeInTheDocument();
    expect(loadingStatusText).toBeInTheDocument();
  });
});
