import '@/styles/globals.scss';

import type { Meta, StoryObj } from '@storybook/react';

import authorLogo from '@/assets/images/post-image-1.webp';

import BlogPostCard from '.';

const meta: Meta<typeof BlogPostCard> = {
  title: 'BlogPostCard',
  component: BlogPostCard,
};

export default meta;
type Story = StoryObj<typeof BlogPostCard>;

export const BlogPost: Story = {
  args: {
    image: authorLogo,
    category: 'Startup',
    title: 'Stories title',
    text: 'Just a stories text',
    id: 1,
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};
