import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Select from './Select'

export default {
  component: Select,
  title: 'Select',
}

const Template: Story<SelectProps> = args => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  options: [
    'option 1',
    'option 2',
    'option 3',
    'option 4',
    'option 5',
    'option 6',
    'option 7',
    'option 8',
    'option 9',
    'option 10',
  ],
}
