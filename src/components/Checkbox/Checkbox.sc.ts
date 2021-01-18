import styled from 'styled-components'

import { colors, radii, spacings, typography } from '../../constants'

interface CheckboxSCProps {
  isChecked: boolean
}

export const CheckboxWrapper = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-bottom: ${spacings.xLarge};

  input {
    display: none;
  }

  span {
    font-size: ${typography[1].fontSize};
    font-family: Roboto;
    position: relative;
  }
`

export const CheckboxSC = styled.div<CheckboxSCProps>`
  width: calc(${spacings.large} / 2);
  height: calc(${spacings.large} / 2);
  border: 1px solid ${colors.blue1};
  border-radius: ${radii.sharp};
  margin-right: ${spacings.xxSmall};
  /* background: ${({ isChecked }) => (isChecked ? colors.blue1 : 'transparent')}; */
  color: ${colors.blue1};
  background: transparent;
  box-shadow: inset 0 0 0 2px ${colors.white};

  font-size: ${typography[1].fontSize};
  line-height: ${typography[1].lineHeight};
`
