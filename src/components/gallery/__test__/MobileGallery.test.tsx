import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MobileGallery from '../MobileGallery';

describe('MobileGallery component', () => {
  const images = ['path-to-img-1', 'path-to-img-2', 'path-to-img-3'];

  it('Should render correctly', () => {
    const { getAllByRole } = render(<MobileGallery imgs={images} />);

    expect(getAllByRole('img')).toHaveLength(images.length);
  });
});
