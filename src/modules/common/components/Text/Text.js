import React from 'react'
import { CustomText } from './Text.style'
import PropTypes from 'prop-types'

const Text = props => {
  const {
    size,
    color,
    fontWeight,
    margin,
    cursor,
    letterSpacing,
    fontStyle,
    textAlign
  } = props
  return (
    <CustomText
      size={size}
      color={color}
      fontWeight={fontWeight}
      margin={margin}
      pointer={cursor}
      letterSpacing={letterSpacing}
      fontStyle={fontStyle}
      textAlign={textAlign}
    />
  )
}

Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  margin: PropTypes.string,
  cursor: PropTypes.string,
  letterSpacing: PropTypes.string,
  fontStyle: PropTypes.string,
  textAlign: PropTypes.string
}
export default Text
