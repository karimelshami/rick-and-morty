import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, CardsWrapper } from './HomeContainer.style'
import InputField from 'modules/common/components/InputField'
import Card from 'modules/common/components/Card'
import Text from 'modules/common/components/Text'
import Loader from 'modules/common/components/Loader'
import { commonActions } from 'modules/common'
import { constants } from 'utils'
import { characterStatus } from './HomeContainer.constants'
const { status } = constants
const HomeContainer = () => {
  const { allCharacters, showLoader } = useSelector(state => ({
    allCharacters: state.common.allCharacters,
    showLoader: state.common.allCharacters.status === status.FETCHING
  }))
  const dispatch = useDispatch()
  const getAllCharacters = () => {
    dispatch(commonActions.getAllCharacters())
  }
  useEffect(() => {
    getAllCharacters()
  }, [])

  const handleInputChange = () => {
    console.log('--------------')
  }

  const renderAllCharactersCards = () => {
    if (allCharacters && allCharacters.results) {
      return (
        <CardsWrapper>
          {allCharacters &&
            allCharacters.results &&
            allCharacters.results.map(character => {
              return (
                <Card
                  img={character.image}
                  status={characterStatus[character.status]}
                  species={character.species}
                  location={character.location.name}
                  origin={character.origin.name}
                  name={character.name}
                  buttonText={`View ${character.name} Episodes`}
                />
              )
            })}
        </CardsWrapper>
      )
    }
  }

  return (
    <Container>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <InputField
            placeholder="search by your favourite charachter"
            handleChange={() => handleInputChange()}
          />
          {renderAllCharactersCards()}
        </>
      )}
    </Container>
  )
}
export default HomeContainer
