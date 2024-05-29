import '@/styles/globals.scss';

import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import authorLogo from '@/assets/icons/Business.svg';
import image from '@/assets/images/post-image-1.webp';

import messagesEn from '../../../messages/en.json';

import Search from '.';

const meta: Meta<typeof Search> = {
  title: 'Search',
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const SearchStory: Story = {
  args: {
    placeholder: 'Input category',
    buttonText: 'Search',
    posts: [
      {
        category: 'startup',
        title: 'Story title',
        text: 'Story text',
        date: '23 may',
        author: 'John John',
        content: { title: 'Title', text: 'Text', points: ['ABOBA'] },
        tags: ['business'],
        icon: authorLogo,
        id: 1,
        image,
      },
    ],
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
