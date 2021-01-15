import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Select, { SelectProps } from './Select'

export default {
  component: Select,
  title: 'Select',
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'No selection...',
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    options: {
      name: 'options',
      defaultValue: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
      type: { name: 'array', required: true },
      control: { type: 'array', separator: '; ' },
    },
    errorMessage: {
      name: 'errorMessage',
      control: { type: 'text' },
      defaultValue: 'Select validation error message',
    },
    hasError: {
      name: 'hasError',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
}

const Template: Story<SelectProps> = args => <Select {...args} />

export const Default = Template.bind({})
