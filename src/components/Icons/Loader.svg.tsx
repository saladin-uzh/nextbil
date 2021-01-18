import React, { FunctionComponent, memo } from 'react'

const Loader: FunctionComponent = props => (
  <svg
    display="block"
    preserveAspectRatio="xMidYMid"
    style={{
      margin: 'auto',
      background: '0 0',
    }}
    viewBox="0 0 100 100"
    width="1.2em"
    height="1.2em"
    {...props}
  >
    <circle cx={50} cy={50} r={35} fill="none" stroke="#fff" strokeDasharray="164.9 57" strokeWidth={10}>
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
)

export default memo(Loader)
