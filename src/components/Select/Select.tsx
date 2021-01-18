import React, { FunctionComponent, useEffect, useState } from 'react'
import { useField } from 'formik'

import { ErrorMessage } from '../ErrorMessage.sc'

import ArrowSvg from '../Icons/Arrow.svg'

import { Option, OptionsBox, SelectWrapper } from './Select.sc'

export interface SelectProps {
  name: string
  label: string
  options: string[]
  dataTestId?: string
}

const Select: FunctionComponent<SelectProps> = ({ name, label, options, dataTestId }) => {
  const [selected, setSelected] = useState<number>()
  const [isOpen, setIsOpen] = useState(false)
  const [, meta, helpers] = useField(name)

  const { value, touched, error } = meta
  const { setValue, setTouched } = helpers

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
    if (!touched && isOpen) setTouched(true)
  }

  useEffect(() => {
    if (typeof selected === 'number') setValue(options[selected])
  }, [selected])

  const hasSelection = typeof selected === 'number'
  const selectedItem = hasSelection ? value : label
  const arrowDirection = isOpen ? 'up' : 'down'
  const hasError = Boolean(touched && error)

  return (
    <SelectWrapper onClick={handleClick} hasSelection={hasSelection} data-testid={dataTestId}>
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
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </SelectWrapper>
  )
}

export default Select
