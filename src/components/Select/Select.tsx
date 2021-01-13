import React, { FunctionComponent } from 'react'

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
