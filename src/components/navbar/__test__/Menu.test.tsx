import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Menu, { MenuProps } from '../Menu';

const renderMenu = (props: MenuProps) => {
  const utilis = render(<Menu {...props} />, { wrapper: MemoryRouter });
  const menu = utilis.getByTestId('menu') as HTMLDivElement;
  const menuItem = utilis
    .getByText('Test Home')
    .closest('a') as HTMLAnchorElement;
  const socialLink = utilis.getByText('Test Social') as HTMLLinkElement;

  return { ...utilis, menu, menuItem, socialLink };
};

describe('Menu component', () => {
  const menuProps = {
    isOpen: false,
    setIsOpen: jest.fn(),
    menuItems: [{ name: 'Test Home', path: '/' }],
    socialLinks: [{ name: 'Test Social', href: '/social' }],
  };

  it('Should render correctly if closed', () => {
    const { menu, menuItem, socialLink } = renderMenu(menuProps);

    expect(menu).toHaveClass('pointer-events-none');

    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveAttribute('href', '/');

    expect(socialLink).toBeInTheDocument();
    expect(socialLink).toHaveAttribute('href', '/social');
  });

  it('Should render correctly if open', () => {
    const { menu, menuItem, socialLink } = renderMenu({
      ...menuProps,
      isOpen: true,
    });

    expect(menu).not.toHaveClass('pointer-events-none');

    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveAttribute('href', '/');

    expect(socialLink).toBeInTheDocument();
    expect(socialLink).toHaveAttribute('href', '/social');
  });

  it('Should close after nav link clicked', async () => {
    const { menuItem } = renderMenu({
      ...menuProps,
      isOpen: true,
    });

    await userEvent.click(menuItem);

    expect(menuProps.setIsOpen).toBeCalled();
  });
});
