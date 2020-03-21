import styled from 'styled-components'

export const ModalContainer = styled.div`
  padding: 20px 50px;
  vertical-align: middle; 
  width: 40%;
  overflow: auto;  
  background-color: #fff;
  position: fixed;
  top: 30%;
  bottom: 10%;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 999;
  -webkit-box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.75);
  ${props => props.theme.media.tablet`
  width: 70%;
  `}
  ${props => props.theme.media.phone`
  width: 80%;
  `}
`
export const ModelActions = styled.div`
  ${props => props.theme.media.tablet`
  height: 50px;
  `}
`
export const CloseButton = styled.img`
  float: right;
  z-index: 9999;
  padding: 10px;
  &&:hover {
    background-color: #a1a1a;
    cursor: pointer;
  }
`

export const MainContainer = styled.div`
  ${props => props.theme.media.tablet`
  flex-direction: column !important;
  `}
`


