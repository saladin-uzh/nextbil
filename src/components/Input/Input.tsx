import React, { ChangeEvent, FunctionComponent, ReactText } from 'react'
import { ErrorMessage } from '../ErrorMessage.sc'
import { InputIcon, InputWrapper } from './Input.sc'

type InputType = 'text' | 'email' | 'password'
type InputChangeEvent = (e: ChangeEvent<HTMLInputElement>) => void
type InputIconType = JSX.Element | ReactText

export interface InputProps {
  name: string
  type?: InputType
  label: string
  value: string
  onInputChange: InputChangeEvent
  icon?: InputIconType
  hasError?: boolean
  errorMessage?: string
}

const Input: FunctionComponent<InputProps> = ({
  name,
  label,
  value,
  onInputChange,
  icon,
  hasError,
  errorMessage,
  type = 'text',
}) => {
  const hasLabel = !Boolean(value)
  const hasIcon = Boolean(icon)

  return (
    <InputWrapper hasIcon={hasIcon}>
      {hasLabel && <span>{label}</span>}
      {hasIcon && <InputIcon>{icon}</InputIcon>}
      <input name={name} type={type} value={value} onChange={onInputChange} />
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  )
}

export default Input
