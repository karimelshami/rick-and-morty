import styled from 'styled-components'

export const Input = styled.input`
  ${props => props.extendStyle || ''};
  margin: ${props => props.margin};
  border: none;
  display: flex;
  height: ${props => props.height};
  padding: ${props => props.padding};
  font-style: ${props => props.fontStyle};
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.main};
  width: 100%;
  ::placeholder {
    color: ${props => props.theme.primary};
    font-style: ${props => props.placeholderFontStyle};
    font-size: ${props => props.placeholderFontSize};
    padding: ${props => props.placeholderPadding};
  }
  &&:focus {
    outline: none;
  }
  &&:focus {
    outline: none;
  }
`
