import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { ErrorMessage } from '../ErrorMessage.sc'
import ArrowSvg from '../Icons/Arrow.svg'
import { Option, OptionsBox, SelectWrapper } from './Select.sc'

export interface SelectProps {
  name: string
  label: string
  value?: number
  onInputChange: (value: string | ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  hasError?: boolean
  errorMessage?: string
}

const Select: FunctionComponent<SelectProps> = ({
  // name,
  label,
  // value,
  // onInputChange,
  options,
  hasError,
  errorMessage,
}) => {
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
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {/* <select name={name} value={selectedItem} onChange={onInputChange} /> */}
    </SelectWrapper>
  )
}

export default Select
