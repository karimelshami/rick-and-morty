import styled from 'styled-components'

export const CustomButton = styled.div`
  ${props => props.extendStyle || ''};
  background-color: ${props => props.theme.secondary};
  border-color: ${props => props.theme.secondary};
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  height: 35px;
  color: ${props => props.theme.main};
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom :10px;
  line-height: 35px;
  display:block;
  &&:hover {
    background-color: ${props => props.theme.primary};
    color: #fff;
  }
  ${props => props.theme.media.tablet`
  height:25px;
  font-size:14px;
  line-height: 25px;

`}
  ${props => props.theme.media.phone`
  height:20px;
  font-size:13px;
  padding: 10px;
  margin-bottom :10px;
  line-height: 20px;


`}
`
export const Img = styled.img`
  height: 20px;
  padding: 10px;
  float: right;
  
`
