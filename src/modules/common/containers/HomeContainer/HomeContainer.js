import React from 'react'
import { Container } from './HomeContainer.style'
import InputField from 'modules/common/components/InputField'
import Card from 'modules/common/components/Card'
import Text from 'modules/common/components/Text'

const HomeContainer = () => {
  const handleInputChange = () => {
    console.log('--------------')
  }
  return (
    <Container>
      <InputField
        placeholder="search by your favourite charachter"
        handleChange={() => handleInputChange()}
      />
      {/* <Card />  */}
    </Container>
  )
}
export default HomeContainer
