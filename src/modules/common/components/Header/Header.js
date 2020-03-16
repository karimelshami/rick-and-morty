import React from 'react'
import Text from 'modules/common/components/Text'
import { Container, Brand, List, ListItem } from './Header.style'
import PropTypes from 'prop-types'

const Header = props => {
  const { img, listItems, handleClick } = props

  return (
    <Container>
      <Brand src={img} />
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
