import '@/styles/globals.scss';

import type { Meta, StoryObj } from '@storybook/react';

import authorLogo from '@/assets/images/author1.png';

import AuthorCard from '.';

const meta: Meta<typeof AuthorCard> = {
  title: 'AuthorCard',
  component: AuthorCard,
};

export default meta;
type Story = StoryObj<typeof AuthorCard>;

export const Author: Story = {
  args: {
    avatar: authorLogo,
    name: 'Russel Dianne',
    company: 'Modsen',
    role: 'Backend Developer',
    id: 1,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
