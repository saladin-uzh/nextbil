import { useField } from 'formik'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { ErrorMessage } from '../ErrorMessage.sc'
import { Option, RadioButton, RadioWrapper } from './Radio.sc'

export interface RadioProps {
  name: string
  options: string[]
}

const Radio: FunctionComponent<RadioProps> = ({ name, options }) => {
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
    <RadioWrapper onBlur={handleBlur}>
      {options.map((option, index) => {
        const key = `option-${index}`
        const isSelected = typeof selected === 'number' && options[selected as number] === option
        const handleSelect = () => setSelected(index)

        return (
          <Option key={key} onClick={handleSelect}>
            <RadioButton isSelected={isSelected} />
            <span>{option}</span>
          </Option>
        )
      })}
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </RadioWrapper>
  )
}

export default Radio
