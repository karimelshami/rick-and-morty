import styled, { css } from 'styled-components';

export const extendButtonStyle = css`
  width: 70%;
  position: absolute;
  bottom: 0;
`

export const CardTitleAndImageWrapper = styled.div`
  position: relative;
`

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
`
export const Card = styled.div`
  background-color: #fff;
  -webkit-box-shadow: -8px -4px 26px 0px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: -8px -4px 26px 0px rgba(0, 0, 0, 0.39);
  box-shadow: -8px -4px 26px 0px rgba(0, 0, 0, 0.39);
  border-radius: 5px;
  width: 23%;
  margin: 1%;
  height: 600px;
  ${props => props.theme.media.tablet`
  width: 45%;
  `}
  ${props => props.theme.media.phone`
  width: 100%;
  display: block;
  `}
`

export const CardContent = styled.div`
  padding: 0px 20px;
  display: block;
  height: 280px;
  position: relative;
`
export const StatusImage = styled.img`
  height: 60px;
`
