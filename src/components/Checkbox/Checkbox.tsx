import React, { createRef, FunctionComponent, useState } from 'react'
import { ErrorMessage } from '../ErrorMessage.sc'
import { CheckboxSC, CheckboxWrapper } from './Checkbox.sc'

export interface CheckboxProps {
  label: React.ReactText | JSX.Element
  hasError?: boolean
  errorMessage?: string
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ label, hasError, errorMessage }) => {
  const [isChecked, setIsChecked] = useState(false)

  const checkboxRef = createRef<HTMLInputElement>()

  const handleClick = () => {
    setIsChecked(Boolean(checkboxRef.current?.checked))
  }

  return (
    <CheckboxWrapper onClick={handleClick}>
      <CheckboxSC isChecked={isChecked} />
      <span>{label}</span>
      <input type="checkbox" ref={checkboxRef} />
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </CheckboxWrapper>
  )
}

export default Checkbox
