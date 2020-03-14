import React from 'react'
import { Container, Brand } from './Header.style'
import PropTypes from 'prop-types'

const Header = props => {
  const { img } = props
  return (
    <Container>
      <Brand src={img} />
    </Container>
  )
}
Header.propTypes = {
  img: PropTypes.string
}
export default Header
