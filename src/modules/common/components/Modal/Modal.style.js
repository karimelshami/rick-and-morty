import styled from 'styled-components'

export const ModalContainer = styled.div`
  padding: 20px;
  width: 70%;
  background-color: #fff;
  position: absolute;
  right: 0;
  left: 0;
  top: 20%;
  margin: auto;
  z-index: 999;
  -webkit-box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.75);
`
export const ModelActions = styled.div`
  @media (max-width: 991px) {
    height: 50px;
  }
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

export const ProductImg = styled.img`
${props =>
  props.thumbnail &&
  `
  height:80px;
  margin:10px;
  cursor:pointer;`}
${props => props.selected && `border:solid 3px red;`}

${props =>
  props.mainImage &&
  `
  @media (max-width: 991px) {
    width:100%;
  }
  `}

`

export const Button = styled.div`
  background-color: rgba(173, 4, 4, 1);
  border: solid rgba(51, 51, 51, 1) 0px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  padding: 10px;
  width: 100%;
  &&:hover {
    background-color: rgba(226, 112, 90, 0.7);
    font-weight: 700;
  }
  @media (max-width: 991px) {
    width: 150px;
  }
`
export const Input = styled.input`
  font-size: 18px;
  margin: 5px 0px 20px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: solid 3px #000;
  display: flex;
  width: 50px;
  padding: 10px;
  ::placeholder {
    color: #000;
    font-style: italic;
    font-size: 13px;
  }
  &&:focus {
    outline: none;
  }
  &&:focus {
    outline: none;
  }

  height: ${({ height }) => height};
`

export const TumbNailContainer = styled.div``

export const MainImageContainer = styled.div`
  width: 80%;
`

export const InformationContainer = styled.div`
  display: inline-block;
  width: 25%;
  @media (max-width: 991px) {
    width: 35%;
  }
`
export const MainContainer = styled.div`
  display: inline-block;
  width: 60%;
  @media (max-width: 991px) {
    flex-direction: column !important;
  }
`
