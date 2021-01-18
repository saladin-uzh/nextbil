import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import Radio, { RadioProps } from './Radio'
import { Formik } from 'formik'

export default {
  component: Radio,
  title: 'Radio',
  argTypes: {
    options: {
      name: 'options',
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
      type: { name: 'array', required: true },
      control: { type: 'array', separator: '; ' },
    },
  },
}

const Template: Story<RadioProps & { error?: string }> = args => (
  <Formik
    initialValues={{ radio: undefined }}
    onSubmit={() => null}
    initialErrors={{ radio: args.error }}
    initialTouched={{ radio: true }}
  >
    <Radio name="radio" {...args} />
  </Formik>
)

export const Default = Template.bind({})
export const WithError = Template.bind({})
WithError.argTypes = {
  error: {
    name: 'error',
    control: { type: 'text' },
    defaultValue: 'Radio validation error message',
  },
}
