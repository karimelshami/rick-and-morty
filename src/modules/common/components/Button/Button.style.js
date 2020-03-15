import styled from 'styled-components'

export const CustomButton = styled.div`
  ${props => props.extendStyle || ''};
  background-color: #edecec;
  border-color: #edecec;
  text-transform: uppercase;
  height: 40px;
  color: ${props => props.theme.main};
  font-weight: 700;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.primary};
    color: #fff;
  }
`
