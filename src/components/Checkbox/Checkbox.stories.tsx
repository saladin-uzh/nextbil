import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Checkbox from './Checkbox'

export default {
  component: Checkbox,
  title: 'Checkbox',
}

const Template: Story = args => <Checkbox {...args} />

export const Default = Template.bind({})
