import React, { FunctionComponent } from 'react'
import { ButtonSC } from './Button.sc'

const Button: FunctionComponent<ButtonProps> = ({ label }) => {
  return <ButtonSC>{label}</ButtonSC>
}

export default Button
