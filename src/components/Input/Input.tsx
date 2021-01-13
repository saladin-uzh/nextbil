import React, { FunctionComponent, InputHTMLAttributes } from 'react'

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = props => {
  return <input {...props} />
}

export default Input
