import React, { CSSProperties, FunctionComponent, SVGAttributes } from 'react'

interface IconRootProps extends SVGAttributes<SVGSVGElement> {
  width?: string
  height?: string
  iconStyles?: CSSProperties
}

const IconRoot: FunctionComponent<IconRootProps> = ({
  width = '1em',
  height = '1em',
  viewBox,
  iconStyles,
  children,
}) => {
  const iconProps = {
    width,
    height,
    viewBox,
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
    style: {
      top: '0.125em',
      position: 'relative',
      ...iconStyles,
    } as CSSProperties,
  }

  return <svg {...iconProps}>{children}</svg>
}

export default IconRoot
