import React from 'react'
import { CustomButton } from './Button.style'

const Button = props => {
  const { extendStyle, text, handleClick } = props
  return (
    <CustomButton onClick={() => handleClick()} extendStyle={extendStyle}>
      {text}
    </CustomButton>
  )
}
//TODO: PROPTYPES
export default Button
