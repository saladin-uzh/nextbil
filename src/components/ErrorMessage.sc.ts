import styled from 'styled-components'
import { colors, spacings, typography } from '../constants'

export const ErrorMessage = styled.p`
  position: absolute;
  left: 0;
  top: 100%;
  color: ${colors.red};
  font-family: Roboto;
  font-size: ${typography[0].fontSize};
  line-height: ${typography[0].lineHeight};
  margin: calc(${spacings.xxSmall} / 4) 0 0 ${spacings.xSmall};
`
