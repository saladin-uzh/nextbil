import React, { FunctionComponent, useState } from 'react'
import ArrowSvg from '../Icons/Arrow.svg'
import { Option, OptionsBox, SelectWrapper } from './Select.sc'

export interface SelectProps {
  label: string
  options: string[]
}

const Select: FunctionComponent<SelectProps> = ({ label, options }) => {
  const [selected, setSelected] = useState<number>()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(isOpen => !isOpen)

  const hasSelection = typeof selected === 'number'
  const selectedItem = hasSelection ? options[selected as number] : label
  const arrowDirection = isOpen ? 'up' : 'down'

  return (
    <SelectWrapper onClick={handleClick} hasSelection={hasSelection}>
      <span>{selectedItem}</span>
      <ArrowSvg direction={arrowDirection} />
      {isOpen && (
        <OptionsBox>
          {options.map((option, index) => {
            const key = `option-${index}`
            const isSelected = hasSelection && options[selected as number] === option
            const handleSelect = () => setSelected(index)

            return (
              <Option key={key} isSelected={isSelected} onClick={handleSelect}>
                {option}
              </Option>
            )
          })}
        </OptionsBox>
      )}
    </SelectWrapper>
  )
}

export default Select
