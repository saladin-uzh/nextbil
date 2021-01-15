import styled from 'styled-components'
import { colors, radii, spacings, typography } from '../../constants'

interface SelectWrapperProps {
  hasSelection: boolean
}

export const SelectWrapper = styled.div<SelectWrapperProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - ${spacings.xSmall} * 2);
  padding: ${spacings.xSmall};

  background: ${colors.grey2};
  border-radius: ${radii.normal};
  color: ${colors.grey1};
  cursor: pointer;

  span {
    color: ${({ hasSelection }) => (hasSelection ? colors.grey1 : colors.grey3)};
    font-size: ${typography[1].fontSize};
    line-height: ${typography[1].lineHeight};
  }
`

export const OptionsBox = styled.ul`
  position: absolute;
  top: calc(100% + ${spacings.xxSmall});
  left: 0;

  list-style: none;
  width: 100%;
  padding: calc(${spacings.xxSmall} / 2) 0;
  margin: 0;

  background: ${colors.white};
  border-radius: ${radii.normal};
  box-shadow: 0px 3px 8px ${colors.grey5};
`

interface OptionProps {
  isSelected: boolean
}

export const Option = styled.li<OptionProps>`
  padding: ${spacings.xxSmall};
  background: ${({ isSelected }) => (isSelected ? colors.grey2 : 'transparent')};
  color: ${colors.grey1};

  font-size: ${typography[1].fontSize};
  line-height: ${typography[1].lineHeight};

  &:hover {
    background: ${colors.grey2};
  }
`
