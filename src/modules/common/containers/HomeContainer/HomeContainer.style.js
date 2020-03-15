import styled, { css } from 'styled-components'

export const extendButtonStyle = css`
width:30%;
text-align:center;
padding:10px;
line-height:40px;
`
export const extendInputFieldStyle = css`
width:60%;
display:flex;
`

export const Container = styled.span``

export const CardsWrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.main}
    ${props => props.theme.media.phone`
  display: block;
  `};
`
export const Searchbar = styled.div`
  display: flex;
  flex-direction:row;
`
