import React, { FunctionComponent } from 'react'

import LoaderSvg from '../Icons/Loader.svg'

import { ButtonSC } from './Button.sc'

export interface ButtonProps {
  label: string
  isDisabled?: boolean
  isLoading: boolean
  dataTestId?: string
}

const Button: FunctionComponent<ButtonProps> = ({ label, isLoading, isDisabled = false, dataTestId }) => (
  <ButtonSC isDisabled={isDisabled} disabled={isDisabled} data-testid={dataTestId}>
    {isLoading ? <LoaderSvg /> : label}
  </ButtonSC>
)

export default Button
