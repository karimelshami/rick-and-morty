import styled from 'styled-components'

export const Container = styled.span``

export const CardsWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${props => props.theme.main}
    ${props => props.theme.media.phone`
  display: block;
  `};
`
