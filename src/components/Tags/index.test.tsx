/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { tagsList } from '@/constants/tags';

import styles from './styles.module.scss';

import Tags from '.';

const activeClassName: string = styles.active;

test('renders Tags component and checks tag selection', () => {
  const mockProps = {
    posts: [],
    setPosts: jest.fn(),
  };

  const { getByText } = render(<Tags {...mockProps} />);

  tagsList.forEach((tag) => {
    const tagElement = getByText(tag);
    fireEvent.click(tagElement);
    expect(tagElement).toHaveClass(activeClassName);
  });
});

test('checks clear tags functionality', () => {
  const mockProps = {
    posts: [],
    setPosts: jest.fn(),
  };

  const { getByText } = render(<Tags {...mockProps} />);

  const clearButton = getByText('Clear tags');
  fireEvent.click(clearButton);

  tagsList.forEach((tag) => {
    const tagElement = getByText(tag);
    expect(tagElement).not.toHaveClass(activeClassName);
  });
});
