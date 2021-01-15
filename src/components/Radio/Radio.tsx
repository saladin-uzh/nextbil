import React, { FunctionComponent, useState } from 'react'
import { Option, RadioButton, RadioWrapper } from './Radio.sc'

export interface RadioProps {
  options: string[]
}

const Radio: FunctionComponent<RadioProps> = ({ options }) => {
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
    </RadioWrapper>
  )
}

export default Radio
