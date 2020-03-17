import styled from 'styled-components'

export const CustomButton = styled.div`
  ${props => props.extendStyle || ''};
  background-color: ${props => props.theme.secondary};
  border-color: ${props => props.theme.secondary};
  text-transform: uppercase;
  cursor: pointer;
  height: 40px;
  color: ${props => props.theme.main};
  font-weight: 700;
  font-size:14px;
  padding: 10px;
  border-radius: 5px;
  &&:hover {
    background-color: ${props => props.theme.primary};
    color: #fff;
  }
`
export const Img = styled.img`
  height: 20px;
  padding: 10px;
  float: right;
`
