import React, { CSSProperties, FunctionComponent } from 'react'
import IconRoot from './IconRoot'

type ArrowDirection = 'up' | 'down'
interface ArrowSvgProps {
  direction: ArrowDirection
  fill?: string
}

const ArrowSvg: FunctionComponent<ArrowSvgProps> = ({ direction }) => {
  const arrowStyles = {
    transform: direction === 'up' ? 'rotate(180deg)' : 'none',
  } as CSSProperties

  return (
    <IconRoot width="11px" height="11px" viewBox="0 0 11 11" iconStyles={arrowStyles}>
      <path d="M3 3.7a.5.5 0 01.4.1L6 6.3 8.6 4a.4.4 0 01.4-.1.5.5 0 01.3.2.6.6 0 01.1.4.6.6 0 01-.2.4L6.3 7.5a.4.4 0 01-.6 0l-3-2.8a.6.6 0 01-.1-.4.6.6 0 010-.4.5.5 0 01.5-.2z" />
    </IconRoot>
  )
}

export default ArrowSvg
