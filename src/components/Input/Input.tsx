import React, { ChangeEvent, FunctionComponent, ReactText, useState } from 'react'
import { ErrorMessage } from '../ErrorMessage.sc'
import { InputIcon, InputWrapper } from './Input.sc'
export interface InputProps {
  label: string
  type?: 'text' | 'email' | 'password'
  icon?: JSX.Element | ReactText
  hasError?: boolean
  errorMessage?: string
  inputProps?: React.IframeHTMLAttributes<HTMLInputElement>
}

const Input: FunctionComponent<InputProps> = ({ label, icon, hasError, errorMessage, inputProps, type = 'text' }) => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value ?? '')
  }

  const hasLabel = !Boolean(value)
  const hasIcon = Boolean(icon)

  return (
    <InputWrapper hasIcon={hasIcon}>
      {hasLabel && <span>{label}</span>}
      {hasIcon && <InputIcon>{icon}</InputIcon>}
      <input type={type} value={value} onChange={handleChange} {...inputProps} />
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  )
}

export default Input
