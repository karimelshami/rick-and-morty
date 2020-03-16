import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 0;
`

export const Brand = styled.img`
  height: 120px;
  border-radius: 0 0 5px 5px;
  opacity: 0.8;
  ${props => props.theme.media.tablet`
  height: 80px;
  opacity:1;
  `}
  ${props => props.theme.media.phone`
  height: 50px;
  opacity:1;
  `}
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  margin: 10px;
  font-size: 16px;
  font-weight: 700;

`
export const ListItem = styled.li`
  margin: 0 5px;
  font-size: 15px;
  padding: 5px;
  color: ${props => props.theme.primary};

  &:hover {
    color: ${props => props.theme.secondary};
    cursor: pointer;
  }
`
