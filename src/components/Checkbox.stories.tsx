import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

//GLOBAL
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-1">
          {Story()}
          <Text size='S'>Checkbox example</Text>
        </div>
      );
    }
  ]
} as Meta<CheckboxProps>;

//VARIANTS
export const CheckboxDefault: StoryObj<CheckboxProps> = {};