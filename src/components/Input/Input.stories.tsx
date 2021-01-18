import React, { ChangeEvent, useState } from 'react'
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
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const selectedIcon: JSX.Element = icons[icon as string]
  return <Input icon={selectedIcon} {...args} onInputChange={handleChange} value={value} />
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
