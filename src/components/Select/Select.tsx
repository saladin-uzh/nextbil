import React, { FunctionComponent } from 'react'

interface SelectProps {
  options: string[]
}

const Select: FunctionComponent<SelectProps> = ({ options }) => {
  return (
    <select>
      {options.map((option, index) => (
        <option key={`option-${index}`}>{option}</option>
      ))}
    </select>
  )
}

export default Select
