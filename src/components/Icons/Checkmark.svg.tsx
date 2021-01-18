import React, { FunctionComponent, memo } from 'react'
import IconRoot from './IconRoot'

const Checkmark: FunctionComponent = () => (
  <IconRoot width="15" height="15" viewBox="0 0 768 768" iconStyles={{ top: '1px' }}>
    <path d="M617.4 169.4L288 498.8 150.6 361.4a32 32 0 10-45.2 45.2l160 160a32 32 0 0045.2 0l352-352a32 32 0 10-45.2-45.2z" />
  </IconRoot>
)

export default memo(Checkmark)
