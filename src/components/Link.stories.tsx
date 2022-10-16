import { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from './Link';

//GLOBAL
export default {
  title: 'Components/Link',
  component: Link,
  args: {
    children: 'Link example',
    url: 'https://storybook.js.org'
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<LinkProps>;

//VARIANTS
export const LinkDefault: StoryObj<LinkProps> = {};