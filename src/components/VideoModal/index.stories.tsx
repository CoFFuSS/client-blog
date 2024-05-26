import type { Meta, StoryObj } from '@storybook/react';

import VideoModal from '.';

const meta: Meta<typeof VideoModal> = {
  title: 'VideoModal',
  component: VideoModal,
};

export default meta;
type Story = StoryObj<typeof VideoModal>;

export const OpenModal: Story = {
  args: {
    buttonContent: 'Open modal',
  },
};
