import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from './TextInput';
import { Email } from './Icons';

//GLOBAL
export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Input placeholder='Type your text here...' />,
      <TextInput.Icon>
        <Email />
      </TextInput.Icon>
    ]
  }
} as Meta<TextInputRootProps>;

//VARIANTS
export const InputText: StoryObj<TextInputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
};

export const InputTextNoIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder='Type your text here...' />,
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
};