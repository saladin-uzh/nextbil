import React, { FunctionComponent, useState } from 'react'
import { ErrorMessage } from '../ErrorMessage.sc'
import { Option, RadioButton, RadioWrapper } from './Radio.sc'

export interface RadioProps {
  options: string[]
  hasError?: boolean
  errorMessage?: string
}

const Radio: FunctionComponent<RadioProps> = ({ options, hasError, errorMessage }) => {
  const [selected, setSelected] = useState<number>()

  return (
    <RadioWrapper>
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
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </RadioWrapper>
  )
}

export default Radio
