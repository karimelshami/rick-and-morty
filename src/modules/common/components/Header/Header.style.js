import styled from 'styled-components'

export const Container = styled.div`
display:flex
padding-right: 10%;
padding-left: 5%;
margin-right: auto;
margin-left: auto;
margin-top : 0;
background-color :${props =>props.theme.main};

`

export const Brand = styled.img`
  height: 120px;
  border-radius: 0 0 5px 5px;
  opacity: 0.8;
  ${props => props.theme.media.tablet`
  height: 80px;
  opacity:1;
  `}
  ${props => props.theme.media.phone`
  height: 50px;
  opacity:1;
  `}
`
