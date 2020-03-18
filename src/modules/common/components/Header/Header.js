import React from 'react'
import { Container, Brand, List, ListItem } from './Header.style'
import { useHistory } from 'react-router'

import PropTypes from 'prop-types'

const Header = props => {
  const { img, listItems, handleClick } = props
  const history = useHistory()

  const BackToHome = () => history.push('/')
  return (
    <Container>
      <Brand src={img} alt="logo" onClick={() => BackToHome()} />
      <List>
        {listItems &&
          listItems.map((listItem, index) => {
            return (
              <ListItem kye={index} onClick={() => handleClick(listItem.id)}>
                {listItem.name}
              </ListItem>
            )
          })}
      </List>
    </Container>
  )
}
Header.propTypes = {
  img: PropTypes.string,
  handleClick: PropTypes.func,
  listItems: PropTypes.arrayOf({
    name: PropTypes.string,
    id: PropTypes.string
  })
}
export default Header
