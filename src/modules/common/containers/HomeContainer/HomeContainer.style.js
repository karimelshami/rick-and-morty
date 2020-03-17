import styled, { css } from 'styled-components'

export const extendSearchButtonStyle = css`
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
  border-bottom: 2px solid ${props => props.theme.primary};
  ${props => props.theme.media.tablet`
  width: 100%;
  `}
  ${props => props.theme.media.phone`
  width: 100%;
  `}
`

export const Container = styled.span``

export const Searchbar = styled.div`
  display: flex;
  flex-direction: row;
`
export const ListItem = styled.div`
  padding: 10px;
  width:100%;
  border-bottom: 1px solid ${props => props.theme.primary};
`
