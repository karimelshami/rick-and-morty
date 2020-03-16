import React from 'react'
import Text from 'modules/common/components/Text'
import { Container, Brand, List, ListItem } from './Header.style'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const Header = props => {
  const { img, listItems } = props
  const history = useHistory()
  const navigate = route => history.push(`/${route}`)
  return (
    <Container>
      <Brand src={img} />
      <List>
        {listItems &&
          listItems.map((listItem, index) => {
            return (
              <ListItem onClick={() => navigate(listItem.route)}>
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
  listItems: PropTypes.arrayOf({
    name: PropTypes.string,
    route: PropTypes.string
  })
}
export default Header
