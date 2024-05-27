import '@/styles/globals.scss';

import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import authorLogo from '@/assets/icons/Business.svg';

import messagesEn from '../../../messages/en.json';

import CategoryCard from '.';

const meta: Meta<typeof CategoryCard> = {
  title: 'CategoryCard',
  component: CategoryCard,
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const Category: Story = {
  args: {
    icon: authorLogo,
    label: 'startup',
    text: 'Just a stories text',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
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
