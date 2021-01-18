import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Select, { SelectProps } from './Select'
import { Formik } from 'formik'

export default {
  component: Select,
  title: 'Select',
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'No selection...',
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    options: {
      name: 'options',
      defaultValue: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
      type: { name: 'array', required: true },
      control: { type: 'array', separator: '; ' },
    },
  },
}

const Template: Story<SelectProps & { error?: string }> = args => (
  <Formik
    initialValues={{ select: undefined }}
    onSubmit={() => null}
    initialErrors={{ select: args.error }}
    initialTouched={{ select: true }}
  >
    <Select name="select" {...args} />
  </Formik>
)

export const Default = Template.bind({})
export const WithError = Template.bind({})
WithError.argTypes = {
  error: {
    name: 'error',
    control: { type: 'text' },
    defaultValue: 'Select validation error message',
  },
}
