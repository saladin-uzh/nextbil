import React, { FunctionComponent, useEffect, useState } from 'react'
import { useField } from 'formik'

import { ErrorMessage } from '../ErrorMessage.sc'

import { Option, RadioButton, RadioWrapper } from './Radio.sc'

export interface RadioProps {
  name: string
  options: string[]
  dataTestId?: string
}

const Radio: FunctionComponent<RadioProps> = ({ name, options, dataTestId }) => {
  const [selected, setSelected] = useState<number>()
  const [, meta, helpers] = useField(name)

  const { error, touched } = meta
  const { setValue, setTouched } = helpers

  const handleBlur = () => setTouched(true)

  useEffect(() => {
    if (typeof selected === 'number') setValue(options[selected])
  }, [selected])

  const hasError = Boolean(touched && error)

  return (
    <RadioWrapper onBlur={handleBlur} data-testid={dataTestId}>
      {options.map((option, index) => {
        const key = `option-${index}`
        const isSelected = typeof selected === 'number' && options[selected as number] === option
        const handleSelect = () => setSelected(index)

        return (
          <Option key={key} onClick={handleSelect}>
            <RadioButton isSelected={isSelected} />
            <span>{option.toLowerCase().replace(option.charAt(0).toLowerCase(), option.charAt(0))}</span>
          </Option>
        )
      })}
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </RadioWrapper>
  )
}

export default Radio
