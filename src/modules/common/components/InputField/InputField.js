import React from 'react'
import { Input } from './InputField.style'
import PropTypes from 'prop-types'

const InputField = props => {
  const {
    handleChange,
    margin,
    type,
    placeholder,
    fontSize,
    fontStyle,
    placeholderFontSize,
    placeholderFontStyle,
    placeholderPadding,
    height,
    value,
    extendStyle,
    onKeyPress
  } = props
  return (
    <Input
      placeholder={placeholder}
      onChange={e => handleChange(e)}
      type={type}
      fontSize={fontSize}
      fontStyle={fontStyle}
      placeholderFontSize={placeholderFontSize}
      placeholderFontStyle={placeholderFontStyle}
      placeholderPadding={placeholderPadding}
      margin={margin}
      height={height}
      extendStyle={extendStyle}
      value={value}
      data-testid="input-field"
      onKeyPress={e => onKeyPress(e)}
    />
  )
}

InputField.propTypes = {
  handleChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  placeholderFontStyle: PropTypes.string,
  placeholderPadding: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  extendStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}
InputField.defaultProps = {
  fontSize: '18px',
  type: 'text',
  fontStyle: 'italic ',
  placeholderFontStyle: 'italic',
  placeholderFontSize: '18px',
  placeholderPadding: '15px',
  height: '50px'
}
export default InputField
