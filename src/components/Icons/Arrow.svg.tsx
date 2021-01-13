import React, { FunctionComponent, SVGAttributes } from 'react'

const ArrowSvg: FunctionComponent<SVGAttributes<SVGElement>> = ({ fill = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 11 11" {...props}>
    <path d="M3 3.7a.5.5 0 01.4.1L6 6.3 8.6 4a.4.4 0 01.4-.1.5.5 0 01.3.2.6.6 0 01.1.4.6.6 0 01-.2.4L6.3 7.5a.4.4 0 01-.6 0l-3-2.8a.6.6 0 01-.1-.4.6.6 0 010-.4.5.5 0 01.5-.2z" />
  </svg>
)

export default ArrowSvg
