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
    height
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
    />
  )
}

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  fontSize: PropTypes.string
}
InputField.defaultProps = {
  fontSize: '18px',
  type: 'text',
  handleChange: console.log('onChange Handler must be declared'),
  fontStyle: 'italic ',
  placeholderFontStyle: 'italic',
  placeholderFontSize: '18px',
  placeholderPadding: '15px',
  height :"50px"
}
export default InputField
