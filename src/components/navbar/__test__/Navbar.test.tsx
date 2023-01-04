import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<Navbar />, { wrapper: MemoryRouter });
    const menuButton = getByText(/menu/i);

    const links = [
      'Home',
      'All work',
      'About',
      'Vimeo',
      'Instagram',
      'Contact',
    ];

    links.forEach((text) => {
      expect(getByText(text)).toBeInTheDocument();
    });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).not.toHaveClass('active');
  });

  it('Should close and open menu after button click', async () => {
    const { getByTestId, getByText } = render(<Navbar />, {
      wrapper: MemoryRouter,
    });
    const menuButton = getByText(/menu/i);

    await userEvent.click(menuButton);

    expect(menuButton).toHaveClass('active');
    expect(getByTestId('menu')).not.toHaveClass('pointer-events-none');

    await userEvent.click(menuButton);

    expect(menuButton).not.toHaveClass('active');
    expect(getByTestId('menu')).toHaveClass('pointer-events-none');
  });

  it('Should have back button when location contains /work/', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/work/test-album']}>
        <Navbar />
      </MemoryRouter>,
    );

    expect(getByText('Back')).toBeInTheDocument();
  });
});
