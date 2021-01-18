import styled from 'styled-components'

import { colors, radii, spacings, typography } from '../../constants'

export const RadioWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 0 calc(${spacings.xxSmall} + ${spacings.xSmall});
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin: 0 ${spacings.small} 0 calc(${spacings.xxSmall} / 2);
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }

  span {
    margin-left: calc(${spacings.xxSmall});
    font-size: ${typography[1].fontSize};
    line-height: ${typography[1].lineHeight};
  }
`

interface RadioButtonProps {
  isSelected: boolean
}

export const RadioButton = styled.div<RadioButtonProps>`
  height: calc(${spacings.medium} / 2);
  width: calc(${spacings.medium} / 2);
  border-radius: ${radii.circle};
  border: 1px solid ${colors.blue1};
  box-shadow: inset 0 0 0 2px ${colors.white};
  background: ${({ isSelected }) => (isSelected ? colors.blue1 : colors.white)};
`
