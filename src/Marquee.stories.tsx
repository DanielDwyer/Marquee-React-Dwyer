import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Marquee } from './Marquee';

const meta: Meta<typeof Marquee> = {
  title: 'Marquee',
  component: Marquee
};

export default meta;

type Story = StoryObj<typeof Marquee>;

export const Basic: Story = {
  args: {
    texts: [
      'Hey There ...',
      'I was ...',
      'looking for a marquee ...',
      'to use in a ...',
      'react application.'
    ],
    changeIntervalMs: 2000,
    crossTimeMs: 10000,
    random: false,
    as: 'h3',
    color: 'purple'
  }
};
