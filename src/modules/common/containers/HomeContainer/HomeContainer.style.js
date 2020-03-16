import styled, { css } from 'styled-components'

export const extendSearchButtonStyle = css`
  width: 20%;
  text-align: center;
  line-height: 40px;
  padding: 10px;
  margin: 0 10px;
`
export const extendGetAllButtonStyle = css`
  width: 10%;
  text-align: center;
  line-height: 40px;
  padding: 10px;
  margin: 0 10px;
`

export const extendShowMoreButtonStyle = css`
  margin: 0 auto;
  width: 30%;
  text-align: center;
  line-height: 40px;
`
export const ShowMore = styled.div`
  width: 100%;
`
export const extendInputFieldStyle = css`
  width: 60%;
  display: flex;
  margin: 0 10px;
  border-bottom: 2px solid ${props => props.theme.primary}!important;
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
  flex-direction: row;
`
