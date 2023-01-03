import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  const items = [{ label: 'Test Label1', value: 'Test Value1' }];

  it('Should render correctly', () => {
    const { getByText, getAllByRole } = render(<List items={items} />);

    expect(getAllByRole('listitem')).toHaveLength(1);
    expect(getByText(items[0].label)).toBeInTheDocument();
    expect(getByText(items[0].value)).toBeInTheDocument();
  });
});
