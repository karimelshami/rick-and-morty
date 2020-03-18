import React from 'react'
import RickAndMorty from 'assets/rick-and-morty-illustration.png'
import { Img, Container, extendTextStyle } from './NotFound.style'
import Text from 'modules/common/components/Text'
const NotFound = () => {
  return (
    <Container>
      <Img src={RickAndMorty} alt="not found" />
      <Text
        extendStyle={extendTextStyle}
        primaryText
        text="Couldn't find what you were looking for.."
      />
    </Container>
  )
}
export default NotFound
