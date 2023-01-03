import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Gallery from '../Gallery';
import HomeCarousel from '../HomeCarousel';
import MobileGallery from '../MobileGallery';

describe('Gallery component', () => {
  const images = ['path-to-img-1', 'path-to-img-2', 'path-to-img-3'];

  it('Should render correctly', () => {
    const { getByTestId, getAllByRole } = render(<Gallery imgs={images} />);
    const mainImage = getByTestId('gallery-main-img') as HTMLImageElement;

    expect(mainImage).toBeInTheDocument();
    expect(mainImage.src).toContain(images[0]);
    expect(getAllByRole('button')).toHaveLength(images.length);
  });

  it('Should render correct main image after user click nav button', async () => {
    const { getByTestId, getAllByRole } = render(<Gallery imgs={images} />);
    const navButton = getAllByRole('button')[1] as HTMLButtonElement;
    fireEvent.click(navButton);

    await waitFor(() => {
      const mainImage = getByTestId('gallery-main-img') as HTMLImageElement;
      expect(mainImage).toBeInTheDocument();
      expect(mainImage.src).toContain(images[1]);
    });
  });

  it('Should render nav button with active class', () => {
    const { getAllByRole } = render(<Gallery imgs={images} />);
    const navButtons = getAllByRole('button') as HTMLButtonElement[];

    expect(navButtons[0]).toHaveClass('active');

    fireEvent.click(navButtons[2]);

    expect(navButtons[2]).toHaveClass('active');
    expect(navButtons[0]).not.toHaveClass('active');
  });

  // TODO: Test Framer-Motion drag carousel
});
