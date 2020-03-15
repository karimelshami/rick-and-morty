import React from 'react'
import { CustomText } from './Text.style'
import PropTypes from 'prop-types'

const Text = props => {
  const {
    margin,
    textAlign,
    secondaryText,
    primaryText,
    text,
    mainText,
    extendStyle
  } = props
  return (
    <CustomText
      margin={margin}
      textAlign={textAlign}
      primaryText={primaryText}
      secondaryText={secondaryText}
      mainText={mainText}
      extendStyle={extendStyle}
    >
      {text}
    </CustomText>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.string,
  textAlign: PropTypes.string,
  primaryText: PropTypes.bool,
  secondaryText: PropTypes.bool,
  mainText: PropTypes.bool,
  extendStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}
export default Text
