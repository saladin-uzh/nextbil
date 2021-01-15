import React, { FunctionComponent } from 'react'
import { ButtonSC } from './Button.sc'

export interface ButtonProps {
  label: string
  isDisabled?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({ label, isDisabled = false }) => (
  <ButtonSC isDisabled={isDisabled}>{label}</ButtonSC>
)

export default Button
