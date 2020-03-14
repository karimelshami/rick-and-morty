import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from './HomeContainer.style'
import InputField from 'modules/common/components/InputField'
import Card from 'modules/common/components/Card'
import Text from 'modules/common/components/Text'
import { commonActions } from 'modules/common'

const HomeContainer = () => {
  const { allCharacters } = useSelector(state => ({
    allCharacters: state.common.allCharacters
  }))
  const dispatch = useDispatch()
  const getAllCharacters = () => {
    dispatch(commonActions.getAllCharacters())
  }
  useEffect(() => {
    getAllCharacters()
    console.log(allCharacters)
  }, [])



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
