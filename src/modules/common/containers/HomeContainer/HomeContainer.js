import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  CardsWrapper,
  Searchbar,
  extendSearchButtonStyle,
  extendInputFieldStyle,
  ShowMore,
  extendShowMoreButtonStyle,
  extendGetAllButtonStyle
} from './HomeContainer.style'
import InputField from 'modules/common/components/InputField'
import Text from 'modules/common/components/Text'
import Card from 'modules/common/components/Card'
import Button from 'modules/common/components/Button'
import Loader from 'modules/common/components/Loader'
import { commonActions } from 'modules/common'
import { constants } from 'utils'
import { characterStatus, characterGender } from './HomeContainer.constants'
const { status } = constants

const HomeContainer = () => {
  const {
    characters,
    showLoader,
    showSearchingLoader,
    page,
    characterName,
    count
  } = useSelector(state => ({
    characters: state.common.characters,
    showLoader:
      state.common.characters.status === status.FETCHING &&
      state.common.page === 1,
    showSearchingLoader: state.common.characters.status === status.FETCHING,
    page: state.common.page,
    characterName: state.common.characterName,
    count:
      state.common.characters &&
      state.common.characters.info &&
      state.common.characters.info.count
  }))
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    getAllCharacters(1)
  }, [])
  const dispatch = useDispatch()

  const getAllCharacters = page => {
    if (isSearching) {
      clearAllCharacters()
      setIsSearching(false)
    }
    dispatch(commonActions.getAllCharacters(page))
  }

  const handleInputChange = value =>
    dispatch(commonActions.setCharacterName(value))

  const search = () => {
    let firstPage = 1
    clearAllCharacters()
    dispatch(commonActions.setPage(firstPage))
    getCharacterByName(firstPage)
    setIsSearching(true)
  }

  async function clearAllCharacters() {
    let clearAll = dispatch(commonActions.clearAllCharacters())
    await clearAll
  }

  const viewEpisodes = () => {
    console.log('view Episodes')
  }

  const getCharacterByName = page => {
    setIsSearching(true)
    dispatch(
      commonActions.getCharacterByName({
        name: characterName,
        page: page
      })
    )
  }

  const showMore = () => {
    let nextPage = page + 1
    if (isSearching) {
      getCharacterByName(nextPage)
    } else {
      getAllCharacters(nextPage)
    }
    dispatch(commonActions.setPage(nextPage))
  }

  const renderSearchBar = () => {
    return (
      <Searchbar>
        <InputField
          placeholder={
            characterName
              ? characterName
              : 'Search by your favourite charachter'
          }
          handleChange={e => handleInputChange(e.target.value)}
          extendStyle={extendInputFieldStyle}
        />
        <Button
          handleClick={() => search()}
          extendStyle={extendSearchButtonStyle}
          text={'Search'}
          loading={showSearchingLoader}
        />
        <Button
          handleClick={() => getAllCharacters(1)}
          extendStyle={extendGetAllButtonStyle}
          text={'Get All'}
        />
      </Searchbar>
    )
  }
  const renderShowMore = () => {
    return (
      <ShowMore>
        <Button
          handleClick={() => showMore()}
          extendStyle={extendShowMoreButtonStyle}
          text={'Show more'}
        />
      </ShowMore>
    )
  }

  const renderAllCharactersCards = () => {
    if (characters && characters.results) {
      return (
        <CardsWrapper>
          {characters &&
            characters.results.map(character => {
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
      {renderSearchBar()}
      <Text
        primaryText
        text={
          characterName && isSearching
            ? `Found ${count} characters from ${characterName}`
            : `Total Count is ${count}`
        }
      />
      {showLoader && page === 1 ? (
        <Loader />
      ) : (
        <>
          {renderAllCharactersCards()}
          {renderShowMore()}
        </>
      )}
    </Container>
  )
}
export default HomeContainer
