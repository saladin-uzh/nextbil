import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  component: Checkbox,
  title: 'Checkbox',
  args: {
    label: 'Label Text',
  },
}

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />

export const Default = Template.bind({})
