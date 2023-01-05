import '@testing-library/jest-dom';
import Sortbar from './Sortbar';
import userEvent from '@testing-library/user-event';
import { render, waitFor, screen } from '@testing-library/react';

const renderSortbar = (props?: any) => {
  const sortbarProps = {
    options: ['Option1', 'Option2', 'Option3'],
    currentOption: 'Option1',
    setCurrentOption: jest.fn(),
  };

  render(<Sortbar {...sortbarProps} {...props} />);
};

describe('Sortbar component', () => {
  describe('On desktop', () => {
    it('Should render correctly', () => {
      renderSortbar();
      expect(screen.getAllByRole('button')).toHaveLength(3);
    });

    it('Should call proper fuction with proper argument when button clicked', async () => {
      const mockedFunction = jest.fn();
      renderSortbar({ setCurrentOption: mockedFunction });

      await userEvent.click(screen.getByText('Option1'));
      await userEvent.click(screen.getByText('Option3'));

      expect(mockedFunction).toBeCalledTimes(2);
      expect(mockedFunction).toBeCalledWith('Option1');
      expect(mockedFunction).toBeCalledWith('Option3');
    });
  });

  describe('On mobile', () => {
    beforeAll(() => {
      global.innerWidth = 750;
      global.dispatchEvent(new Event('resize'));
    });

    it('Should render correctly', () => {
      renderSortbar();

      expect(screen.getAllByRole('button')).toHaveLength(4);
      expect(screen.getByTestId('current-option')).toHaveTextContent(
        /Option1/i,
      );
      expect(screen.getByRole('list')).not.toBeVisible();
      expect(screen.getByRole('list')).toHaveStyle('pointer-events: none');
    });

    it('Should open a list with options', async () => {
      renderSortbar();
      await userEvent.click(screen.getByTestId('current-option'));

      await waitFor(() => {
        expect(screen.getByRole('list')).toBeVisible();
        expect(screen.getByRole('list')).toHaveStyle('pointer-events: auto');
      });
    });

    it('Should call proper fuction with proper argument when button clicked', async () => {
      const mockedFunction = jest.fn();
      renderSortbar({ setCurrentOption: mockedFunction });

      // Opening list menu
      await userEvent.click(screen.getByTestId('current-option'));

      //   Waiting for animation to end and testing button clicks
      await waitFor(() => {
        userEvent.click(screen.getByRole('button', { name: /Option2/i }));
        expect(mockedFunction).toBeCalledTimes(1);
        expect(mockedFunction).toBeCalledWith('Option2');
      });
    });
  });
});
