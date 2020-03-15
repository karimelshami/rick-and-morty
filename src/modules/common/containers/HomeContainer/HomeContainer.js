import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  CardsWrapper,
  Searchbar,
  extendSearchButtonStyle,
  extendInputFieldStyle,
  ShowMore,
  extendShowMoreButtonStyle
} from './HomeContainer.style'
import InputField from 'modules/common/components/InputField'
import Card from 'modules/common/components/Card'
import Text from 'modules/common/components/Text'
import Button from 'modules/common/components/Button'
import Loader from 'modules/common/components/Loader'
import { commonActions } from 'modules/common'
import { constants } from 'utils'
import { characterStatus, characterGender } from './HomeContainer.constants'
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
  const search = () => {
    console.log('search')
  }
  const viewEpisodes = () => {
    console.log('view Episodes')
  }
  const renderSearchBar = () => {
    return (
      <Searchbar>
        <InputField
          placeholder="search by your favourite charachter"
          handleChange={() => handleInputChange()}
          extendStyle={extendInputFieldStyle}
        />
        <Button
          handleClick={() => search()}
          extendStyle={extendSearchButtonStyle}
          text={'Search'}
        />
      </Searchbar>
    )
  }
  const renderShowMore = () => {
    return (
      <ShowMore>
        <Button
          handleClick={() => search()}
          extendStyle={extendShowMoreButtonStyle}
          text={'Show more'}
        />
      </ShowMore>
    )
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
                  statusImg={characterStatus[character.status]}
                  status={character.status}
                  gender={characterGender[character.gender]}
                  species={character.species}
                  location={character.location.name}
                  origin={character.origin.name}
                  name={character.name}
                  buttonText={`View Episodes`}
                  handleClick={() => viewEpisodes()}
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
          {renderSearchBar()}
          {renderAllCharactersCards()}
          {renderShowMore()}
        </>
      )}
    </Container>
  )
}
export default HomeContainer
