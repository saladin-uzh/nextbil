import styled from 'styled-components'
import { colors, radii, spacings, typography } from '../../constants'

export interface ButtonSCProps {
  isDisabled: boolean
}

export const ButtonSC = styled.button<ButtonSCProps>`
  width: 100%;
  padding: ${spacings.small};
  margin-bottom: ${spacings.medium};

  border-radius: ${radii.round};
  border: 0;

  background: ${({ isDisabled }) => (isDisabled ? colors.grey3 : colors.blue1)};
  color: ${colors.white};
  font-size: ${typography[2].fontSize};
  line-height: ${typography[2].lineHeight};

  cursor: pointer;
`
