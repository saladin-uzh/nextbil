import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Input from './Input'

export default {
  component: Input,
  title: 'Input',
}

const Template: Story = args => <Input {...args} />

export const Default = Template.bind({})
