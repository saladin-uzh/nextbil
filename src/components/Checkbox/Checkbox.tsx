import React, { ChangeEvent, createRef, FocusEvent, FunctionComponent, useState } from 'react'
import { ErrorMessage } from '../ErrorMessage.sc'
import CheckmarkSvg from '../Icons/Checkmark.svg'
import { CheckboxSC, CheckboxWrapper } from './Checkbox.sc'

export interface CheckboxProps {
  name: string
  label: React.ReactText | JSX.Element
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onInputBlur?: (e: FocusEvent<HTMLInputElement>) => void
  error?: string | false
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ name, label, onInputChange, onInputBlur, error }) => {
  const [isChecked, setIsChecked] = useState(false)

  const checkboxRef = createRef<HTMLInputElement>()

  const handleClick = () => {
    setIsChecked(Boolean(checkboxRef.current?.checked))
  }

  const hasError = Boolean(error)

  return (
    <CheckboxWrapper onClick={handleClick}>
      <CheckboxSC isChecked={isChecked}>{isChecked && <CheckmarkSvg />}</CheckboxSC>
      <span>{label}</span>
      <input name={name} type="checkbox" ref={checkboxRef} onChange={onInputChange} onBlur={onInputBlur} />
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </CheckboxWrapper>
  )
}

export default Checkbox
