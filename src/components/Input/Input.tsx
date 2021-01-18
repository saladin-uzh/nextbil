import React, { ChangeEvent, FocusEvent, FunctionComponent, ReactText } from 'react'

import { ErrorMessage } from '../ErrorMessage.sc'

import { InputIcon, InputWrapper } from './Input.sc'

type InputType = 'text' | 'email' | 'password'
type InputChangeEvent = (e: ChangeEvent<HTMLInputElement>) => void
type InputBlurEvent = (e: FocusEvent<HTMLInputElement>) => void
type InputIconType = JSX.Element | ReactText

export interface InputProps {
  name: string
  type?: InputType
  label: string
  value: string
  onInputChange: InputChangeEvent
  onInputBlur: InputBlurEvent
  icon?: InputIconType
  error?: string | false
  dataTestId?: string
}

const Input: FunctionComponent<InputProps> = ({
  name,
  label,
  value,
  onInputChange,
  onInputBlur,
  icon,
  error,
  type = 'text',
  dataTestId,
}) => {
  const hasLabel = !Boolean(value)
  const hasIcon = Boolean(icon)
  const hasError = Boolean(error)

  return (
    <InputWrapper hasIcon={hasIcon}>
      {hasLabel && <span>{label}</span>}
      {hasIcon && <InputIcon>{icon}</InputIcon>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onInputChange}
        onBlur={onInputBlur}
        data-testid={dataTestId}
      />
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  )
}

export default Input
