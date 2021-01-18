import styled from 'styled-components'

import { colors, radii, spacings, typography } from '../../constants'

const iconPadding = `calc(${spacings.small} + ${spacings.small} + ${spacings.xxSmall})`

interface InputWrapperProps {
  hasIcon: boolean
}

export const InputWrapper = styled.label<InputWrapperProps>`
  position: relative;
  width: 100%;
  color: ${colors.grey3};
  display: flex;

  margin-bottom: ${spacings.small};

  input {
    background: ${colors.grey2};
    border-radius: ${radii.normal};
    padding: ${({ hasIcon }) =>
      hasIcon ? `${spacings.xSmall} ${spacings.xSmall} ${spacings.xSmall} ${iconPadding}` : spacings.xSmall};
    border: 0;
    outline: none;
    width: calc(100% - ${spacings.xxSmall} * 2);
    color: ${colors.grey1};

    font-size: ${typography[1].fontSize};
    line-height: ${typography[1].lineHeight};
  }

  span {
    display: block;
    position: absolute;
    top: ${spacings.xSmall};
    left: ${({ hasIcon }) => (hasIcon ? iconPadding : spacings.xSmall)};
    color: inherit;
    cursor: text;

    font-size: ${typography[1].fontSize};
    line-height: ${typography[1].lineHeight};
  }
`

export const InputIcon = styled.div`
  position: absolute;
  left: ${spacings.xSmall};
  top: calc(${spacings.xSmall} - 0.125em);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${spacings.small};
  color: ${colors.grey3};
`
