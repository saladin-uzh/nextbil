import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Radio, { RadioProps } from './Radio'

export default {
  component: Radio,
  title: 'Radio',
  argTypes: {
    options: {
      name: 'options',
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
      type: { name: 'array', required: true },
      control: { type: 'array', separator: '; ' },
    },
    errorMessage: {
      name: 'errorMessage',
      control: { type: 'text' },
      defaultValue: 'Radio validation error message',
    },
    hasError: {
      name: 'hasError',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
}

const Template: Story<RadioProps> = args => <Radio {...args} />

export const Default = Template.bind({})
