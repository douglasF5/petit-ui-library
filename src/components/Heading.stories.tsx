import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

//GLOBAL
export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading component'
  },
  argTypes: {
    size: {
      options: ['S', 'M', 'L'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>;

//VARIANTS
export const HeadingSmall: StoryObj<HeadingProps> = {
  args: {
    size: 'S'
  }
};
export const HeadingMedium: StoryObj<HeadingProps> = {
  args: {
    size: 'M'
  }
};
export const HeadingLarge: StoryObj<HeadingProps> = {
  args: {
    size: 'L'
  }
};
export const HeadingCustomHTMLTag: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading as a h1 tag</h1>
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