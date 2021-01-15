import React, { createRef, FunctionComponent, useState } from 'react'
import { CheckboxSC, CheckboxWrapper } from './Checkbox.sc'

export interface CheckboxProps {
  label: React.ReactText | JSX.Element
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ label }) => {
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
    </CheckboxWrapper>
  )
}

export default Checkbox
