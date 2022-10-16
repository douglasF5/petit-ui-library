import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { ChevronRight } from './Icons';

//GLOBAL
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: [
      'Button component',
      <ChevronRight />
    ],
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    fullWidth: {
      type: 'boolean'
    },
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ButtonProps>;

//VARIANTS
export const ButtonPrimary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary'
  }
};

export const ButtonSecondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary'
  },
};