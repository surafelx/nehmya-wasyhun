import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('Renders correctly', () => {
    const { getAllByRole, getByText } = render(<Footer />);

    const links = getAllByRole('link') as HTMLAnchorElement[];

    expect(getByText('Copyright © 2022 RAPHAËL BOURDIN')).toBeInTheDocument();
    expect(links[0]).toHaveProperty(
      'href',
      'https://francoisxaviermanceau.com/',
    );
    expect(links[1]).toHaveProperty('href', 'https://filippapiernik.pl/');
  });
});
