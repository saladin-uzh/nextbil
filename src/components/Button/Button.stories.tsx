import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Button from './Button'

export default {
  component: Button,
  title: 'Button',
}

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Button text',
}
