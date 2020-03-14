import styled from 'styled-components'

export const Button = styled.div`
  background-color: #edecec;
  border-color: #edecec;
  text-align: left;
  text-transform: uppercase;
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

export const CardTitle = styled.span`
  font-weight: 700;
  display: block;
  font-size: 18px;
  color: ${props => props.theme.main};
  ${props => props.theme.media.phone`
  font-size:15px;
  `}
`
export const CardTitleAndImageWrapper = styled.div`
  position: relative;
`
export const CardCaption = styled.span`
  font-size: 14px;
  color: ${props => props.theme.main};
  font-weight: 400;
  font-size:20px;
  font-weight:700
  display:block;
  text-align:center;
  ${props => props.theme.media.tablet`
  font-size:16px;
  `}
  ${props => props.theme.media.phone`
  font-size:15px;
  `}
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
  margin-bottom: 20px;
  display: inline-block;

  ${props => props.theme.media.tablet`
  width: 45%;
  `}
  ${props => props.theme.media.phone`
  width: 100%;
  display: block;
  margin-bottom: 20px;
  `}
`

export const CardContent = styled.div`
  padding: 5px 20px;
  height: 200px;
`
export const CaptionWrapper = styled.div`
  height: 110px;
`
