import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from './Button'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      required: true,
      defaultValue: 'Button Text',
      control: { type: 'text' },
    },
    isDisabled: {
      name: 'isDisabled',
      defaultValue: true,
      control: { type: 'boolean' },
    },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
