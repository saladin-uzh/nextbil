import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    errorMessage: {
      name: 'errorMessage',
      control: { type: 'text' },
      defaultValue: 'Checkbox validation error message',
    },
    hasError: {
      name: 'hasError',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  args: {
    label: 'Label Text',
  },
}

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />

export const Default = Template.bind({})
