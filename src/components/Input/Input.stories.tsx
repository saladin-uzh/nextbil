import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Envelope from '../Icons/Envelope.svg'
import Lock from '../Icons/Lock.svg'
import Input, { InputProps } from './Input'

const icons = { envelope: <Envelope />, lock: <Lock /> }

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      defaultValue: 'Input placeholder',
      control: { type: 'text' },
    },
    icon: {
      name: 'icon',
      control: { type: 'inline-radio', options: Object.keys(icons) },
    },
  },
}

const Template: Story<InputProps> = ({ icon, ...args }) => {
  const selectedIcon: JSX.Element = icons[icon as string]
  return <Input icon={selectedIcon} {...args} />
}

export const Default = Template.bind({})
export const WithError = Template.bind({})
WithError.argTypes = {
  error: {
    name: 'error',
    control: { type: 'text' },
    defaultValue: 'Input validation error message',
  },
}
