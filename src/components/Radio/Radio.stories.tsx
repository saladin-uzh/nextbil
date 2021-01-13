import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Radio from './Radio'

export default {
  component: Radio,
  title: 'Radio',
}

const Template: Story = args => <Radio {...args} />

export const Default = Template.bind({})
