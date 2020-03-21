import styled, { css } from 'styled-components'

export const extendButtonStyle = css`
  width: 70%;
  margin: auto;

  
`
export const extendTextStyle = css`
  height: 50px;
  ${props => props.theme.media.tablet`
  height:30px;
  font-size:14px;
`}
  ${props => props.theme.media.phone`
  height:20px;
  font-size:13px;
`}
`

export const CardTitleAndImageWrapper = styled.div`
  position: relative;
`

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  ${props => props.theme.media.tablet`
    height:350px;
  `}
  ${props => props.theme.media.phone`
    height:350px;
  `}
`
export const Card = styled.div`
  background-color: #fff;
  display: block;
  -webkit-box-shadow: -8px -4px 26px 0px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: -8px -4px 26px 0px rgba(0, 0, 0, 0.39);
  box-shadow: -8px -4px 26px 0px rgba(0, 0, 0, 0.39);
  border-radius: 5px;
  width: 23%;
  margin: 1%;
  ${props => props.theme.media.tablet`
  width: 45%;
  height: unset;

  `}
  ${props => props.theme.media.phone`
  width: 100%;
  height: unset;

  `}
`

export const CardContent = styled.div`
  padding: 0px 20px;
  display: block;
  position: relative;
`
export const StatusImage = styled.img`
  height: 60px;
  ${props => props.theme.media.tablet`
  height:40px;
`}
  ${props => props.theme.media.phone`
  height:30px;
`}
`
