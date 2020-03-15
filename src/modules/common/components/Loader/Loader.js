import React from 'react'
import Portal from 'assets/portal.gif'
import { Img, Container } from './Loader.style'
const Loader = () => {
  return (
    <Container>
      <Img src={Portal} alt="loading" />
    </Container>
  )
}
export default Loader
