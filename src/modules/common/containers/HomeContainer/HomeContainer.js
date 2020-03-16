import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Searchbar,
  extendSearchButtonStyle,
  extendInputFieldStyle,
  ShowMore,
  extendShowMoreButtonStyle
} from './HomeContainer.style'
import InputField from 'modules/common/components/InputField'
import Text from 'modules/common/components/Text'
import Button from 'modules/common/components/Button'
import Loader from 'modules/common/components/Loader'
import CardsWrapper from 'modules/common/components/CardsContainer'
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
          extendStyle={extendSearchButtonStyle}
          text={'Get All'}
        />
        <Button
          handleClick={() => getReccomendedCharacters(1)}
          extendStyle={extendSearchButtonStyle}
          text={'Reccomend'}
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

  const getReccomendedCharacters = () => {
    console.log('reccomend')
  }

  return (
    <Container>
      {renderSearchBar()}
      {count && (
        <Text
          primaryText
          text={
            characterName && isSearching
              ? `Found ${count} characters from ${characterName}`
              : `Total Count is ${count}`
          }
        />
      )}

      {showLoader && page === 1 ? (
        <Loader />
      ) : (
        <>
          <CardsWrapper
            characters={characters}
            viewEpisodes={() => viewEpisodes()}
          />
          {renderShowMore()}
        </>
      )}
    </Container>
  )
}
export default HomeContainer
