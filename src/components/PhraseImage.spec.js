import { render, screen } from '@testing-library/react';
import { Image} from 'cloudinary-react';


describe('PhraseImage', () => {
  const cloudName = 'demo';
  const publicId = 'sample';

  it('should create an img tag', () => {
    render(<Image publicId={publicId} cloudName={cloudName} />);

    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
  });
});
