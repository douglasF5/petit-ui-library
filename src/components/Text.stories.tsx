import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

//GLOBAL
export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text component'
  },
  argTypes: {
    size: {
      options: ['S', 'M', 'L'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>;

//VARIANTS
export const TextSmall: StoryObj<TextProps> = {
  args: {
    size: 'S'
  }
};
export const TextMedium: StoryObj<TextProps> = {
  args: {
    size: 'M'
  }
};
export const TextLarge: StoryObj<TextProps> = {
  args: {
    size: 'L'
  }
};
export const TextCustomHTMLTag: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text as paragraph</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
};