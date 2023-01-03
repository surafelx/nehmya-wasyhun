import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ImageBlock from './ImageBlock';

describe('ImageBlock component', () => {
  const props = {
    label: 'Test Block Label',
    path: '/test-block-path',
    img: '../assets/test-block-image',
  };

  it('Renders correctly with props', () => {
    const { getByText, getByRole } = render(<ImageBlock {...props} />, {
      wrapper: MemoryRouter,
    });

    expect(getByText(props.label)).toBeInTheDocument();
    expect(getByRole('link')).toHaveAttribute('href', props.path);
    expect(getByRole('img')).toHaveAttribute('src', props.img);
  });

  it('Renders with provided className', () => {
    const classNames = 'px-5 py-5';

    const { getByRole } = render(
      <ImageBlock className={classNames} {...props} />,
      {
        wrapper: MemoryRouter,
      },
    );

    expect(getByRole('link')).toHaveClass(classNames);
  });
});
