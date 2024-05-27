import '@/styles/globals.scss';

import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messagesEn from '../../../messages/en.json';

import PostCard from '.';

const meta: Meta<typeof PostCard> = {
  title: 'PostCard',
  component: PostCard,
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Post: Story = {
  args: {
    author: 'JACK JACK',
    date: '23 may',
    content: 'Just a stories text',
    id: 1,
  },
  decorators: [
    (Story) => (
      <div>
        <NextIntlClientProvider
          messages={messagesEn}
          locale='en'
        >
          <Story />
        </NextIntlClientProvider>
      </div>
    ),
  ],
};
