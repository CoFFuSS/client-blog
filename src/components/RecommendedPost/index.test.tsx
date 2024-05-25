/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { routes } from '@/constants/routes';
import mockImage from '@/assets/images/heroBg.webp';

import RecommendedPost from '.';

const mockPost = {
  author: 'John Doe',
  createdAt: '23 May, 2023',
  title: 'Test Title',
  text: 'Test text',
  id: 1488,
  image: mockImage,
};

describe('RecommendedPost component', () => {
  beforeEach(() => {
    render(
      <RecommendedPost
        author={mockPost.author}
        date={mockPost.createdAt}
        title={mockPost.title}
        text={mockPost.text}
        id={mockPost.id}
        image={mockPost.image}
      />,
    );
  });

  it('renders post data correctly', () => {
    const authorElement = screen.getByText(mockPost.author);
    expect(authorElement).toBeInTheDocument();

    const titleElement = screen.getByText(mockPost.title);
    expect(titleElement).toBeInTheDocument();

    const textElement = screen.getByText(mockPost.text);
    expect(textElement).toBeInTheDocument();
  });

  it('has a link to the post', () => {
    const linkElement = screen.getByRole('link', { name: mockPost.title });
    expect(linkElement).toHaveAttribute('href', `${routes.blog}/${mockPost.id}`);
  });
});
