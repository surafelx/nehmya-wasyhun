import '@testing-library/jest-dom';
import Popup from './Popup';
import userEvent from '@testing-library/user-event';
import { render, waitFor, screen } from '@testing-library/react';

describe('Popup component', () => {
  beforeAll(() => {
    const localStorageMock = (() => {
      interface Store {
        [key: string]: string;
      }
      let store: Store = {};
      return {
        getItem(key: string) {
          return store[key] || null;
        },
        setItem(key: string, value: string) {
          store[key] = value.toString();
        },
        removeItem(key: string) {
          delete store[key];
        },
        clear() {
          store = {};
        },
      };
    })();
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('Should render correctly', () => {
    const { getByRole, getAllByRole } = render(<Popup />);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getAllByRole('link')).toHaveLength(2);
  });

  it('Should close correctly', async () => {
    const { getByRole, queryByRole, queryAllByRole } = render(<Popup />);
    const closeButton = getByRole('button');
    const setItemMock = jest.spyOn(localStorage, 'setItem');

    await userEvent.click(closeButton);

    expect(queryByRole('button')).toBeNull();
    expect(queryAllByRole('link')).toHaveLength(0);
    expect(setItemMock).toHaveBeenCalled();
    expect(setItemMock).toBeCalledWith('isDisclaimerClosed', 'closed');
  });

  it('Should not render if saved in LocalStorage', async () => {
    localStorage.setItem('isDisclaimerClosed', 'closed');
    const { queryByRole, queryAllByRole } = render(<Popup />);

    await waitFor(() => {
      expect(queryByRole('button')).toBeNull();
      expect(queryAllByRole('link')).toHaveLength(0);
    });
  });
});
