import React, { FunctionComponent, memo } from 'react'

import IconRoot from './IconRoot'

const Lock: FunctionComponent = () => (
  <IconRoot viewBox="0 0 16 20" iconStyles={{ top: 0 }}>
    <path d="M13 5.9h-1V4a4 4 0 00-8 0v1.9H3a3 3 0 00-3 3v8a3 3 0 003 3h10a3 3 0 003-3v-8a3 3 0 00-3-3zM6 4a2 2 0 114 0v1.9H6zm8 12.9a1 1 0 01-1 1H3a1 1 0 01-1-1v-8a1 1 0 011-1h10a1 1 0 011 1z" />
    <path d="M8 9.9a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1z" />
  </IconRoot>
)

export default memo(Lock)
