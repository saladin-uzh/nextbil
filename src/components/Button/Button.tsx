import React, { FunctionComponent } from 'react'
import LoaderSvg from '../Icons/Loader.svg'
import { ButtonSC } from './Button.sc'

export interface ButtonProps {
  label: string
  isDisabled?: boolean
  isLoading: boolean
}

const Button: FunctionComponent<ButtonProps> = ({ label, isLoading, isDisabled = false }) => (
  <ButtonSC isDisabled={isDisabled} disabled={isDisabled}>
    {isLoading ? <LoaderSvg /> : label}
  </ButtonSC>
)

export default Button
