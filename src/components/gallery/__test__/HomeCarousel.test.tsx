import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HomeCarousel from '../HomeCarousel';

// For now this test is failing (Swiper errors)
describe('HomeCarousel component', () => {
  const albums = [
    {
      key: 'test-key',
      name: 'Test Name',
      tag: 'Test Tag',
      images: ['path-to-img-1', 'path-to-img-2', 'path-to-img-3'],
      specs: {
        aspect: 'Test Aspect',
        format: 'Test Format',
        camera: 'Test Camera',
        lenses: 'Test Lenses',
      },
      credits: {
        direc: 'Test Direc',
        photoDirec: 'Test PhotoDirec',
        colorist: 'Test Colorist',
        prod: 'Test Prod',
        postProd: 'Test PostProd',
      },
    },
  ];

  it('Should render correctly', () => {
    const { getAllByRole } = render(<HomeCarousel albums={albums} />);

    expect(getAllByRole('link')).toHaveLength(albums.length);
  });
});
