import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Gallery, { GalleryProps } from '../Gallery';

const renderGallery = (props: GalleryProps) => {
  const utilis = render(<Gallery {...props} />);
  const mainImage = utilis.getByTestId('gallery-main-img') as HTMLImageElement;
  const navButtons = utilis.getAllByRole('button') as HTMLButtonElement[];

  return { ...utilis, mainImage, navButtons };
};

describe('Gallery component', () => {
  const images = ['path-to-img-1', 'path-to-img-2', 'path-to-img-3'];

  it('Should render correctly', () => {
    const { mainImage, navButtons } = renderGallery({ imgs: images });

    expect(mainImage).toBeInTheDocument();
    expect(mainImage.src).toContain(images[0]);
    expect(navButtons).toHaveLength(images.length);
  });

  it('Should render correct main image after user click nav button', async () => {
    const { getByTestId, navButtons } = renderGallery({ imgs: images });

    fireEvent.click(navButtons[1]);

    await waitFor(() => {
      const mainImage = getByTestId('gallery-main-img') as HTMLImageElement;
      expect(mainImage).toBeInTheDocument();
      expect(mainImage.src).toContain(images[1]);
    });
  });

  it('Should render nav button with active class', () => {
    const { navButtons } = renderGallery({ imgs: images });

    expect(navButtons[0]).toHaveClass('active');
    fireEvent.click(navButtons[2]);
    expect(navButtons[2]).toHaveClass('active');
    expect(navButtons[0]).not.toHaveClass('active');
  });

  // TODO: Test Framer-Motion drag carousel
});
