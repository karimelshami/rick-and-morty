import styled from 'styled-components'

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