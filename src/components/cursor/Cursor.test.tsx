import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Cursor from './Cursor';

describe('Cursor component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = render(<Cursor />);

    expect(getByTestId('cursor')).toBeInTheDocument();
  });

  //! Testing lib creates only DOM w/o layout
  //! document.elementFromPoint is not a function
  //! Issue: https://github.com/testing-library/user-event/issues/544
  //it('Renders test correctly', () => {
  //  const { getByTestId } = render(<Cursor />);

  //  fireEvent.mouseMove(getByTestId('cursor'), { clientX: 100, clientY: 100 });

  //  expect(getByTestId('cursor')).toHaveStyle('transform: translateX(100px)');
  //  expect(getByTestId('cursor')).toHaveStyle('transform: translateY(100px)');
  //});
});
