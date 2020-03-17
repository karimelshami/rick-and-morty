import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Searchbar,
  extendSearchButtonStyle,
  extendInputFieldStyle,
  ShowMore,
  extendShowMoreButtonStyle,
  ListItem
} from './HomeContainer.style'
import InputField from 'modules/common/components/InputField'
import Text from 'modules/common/components/Text'
import Button from 'modules/common/components/Button'
import Loader from 'modules/common/components/Loader'
import Modal from 'modules/common/components/Modal'
import CardsContainer from 'modules/common/components/CardsContainer'
import { commonActions } from 'modules/common'
import { constants } from 'utils'
import Cookies from 'js-cookie'
const { status } = constants

const HomeContainer = () => {
  const {
    characters,
    showLoader,
    showSearchingLoader,
    page,
    characterName,
    count,
    episodes
  } = useSelector(state => ({
    characters: state.common.characters,
    showLoader:
      state.common.characters.status ===
        (status.FETCHING && state.common.page === 1) ||
      state.common.episodes.status === status.FETCHING,
    showSearchingLoader: state.common.characters.status === status.FETCHING,
    page: state.common.page,
    characterName: state.common.characterName,
    count:
      state.common.characters &&
      state.common.characters.info &&
      state.common.characters.info.count,
    episodes: state.common.episodes
  }))
  const [isSearching, setIsSearching] = useState(false)
  const [isViewingReccomended, setIsViewingReccomended] = useState(false)
  const [episodesModalState, setEpisodesModalState] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState('false')

  useEffect(() => {
    getAllCharacters(1)
  }, [])
  const dispatch = useDispatch()

  const getAllCharacters = page => {
    if (isSearching) {
      clearAllCharacters()
      setIsSearching(false)
      setIsViewingReccomended(false)
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
    setIsViewingReccomended(false)
  }

  async function clearAllCharacters() {
    let clearAll = dispatch(commonActions.clearAllCharacters())
    await clearAll
  }

  const viewEpisodes = (episodes, charachterName) => {
    let episodeIds = []
    let episodeIdsString = ''
    let apiURL = 'https://rickandmortyapi.com/api/episode/'
    for (let i = 0; i < episodes.length; i++) {
      episodeIds.concat()
      episodeIds.push(episodes[i].replace(apiURL, ''))
    }
    episodeIdsString = episodeIds.toString()
    console.log(episodeIdsString)
    console.log(characterName)
    setSelectedCharacter(charachterName)
    dispatch(commonActions.getEpisodes(episodeIdsString))
    toggleModalState()
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
  const getCharacterBySpecies = page => {
    let species = Cookies.get('reccomended-species')
    console.log(species)
    setIsViewingReccomended(true)
    setIsSearching(false)
    dispatch(
      commonActions.getCharacterBySpecies({
        species: species,
        page: page
      })
    )
  }

  const showMore = () => {
    let nextPage = page + 1
    if (isSearching) {
      getCharacterByName(nextPage)
    } else if (isViewingReccomended) {
      getCharacterBySpecies(nextPage)
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
    clearAllCharacters()
    getCharacterBySpecies(1)
  }
  const toggleModalState = () => setEpisodesModalState(!episodesModalState)

  const renderModal = () => {
    let episodesList = []
    if (episodes && episodes.results) {
      episodesList = episodes.results.map((episode, index) => {
        return (
          <ListItem key={index}>
            <Text secondaryText text={`${episode.name}(${episode.episode})`} />
          </ListItem>
        )
      })
    }
    return (
      <Modal
        title={`${selectedCharacter} Episodes`}
        onClose={() => toggleModalState()}
        content={episodesList}
      />
    )
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
          <CardsContainer
            characters={characters}
            viewEpisodes={(episodes, charachterName) =>
              viewEpisodes(episodes, charachterName)
            }
          />
          {renderShowMore()}
          {!showLoader && episodesModalState && renderModal()}
        </>
      )}
    </Container>
  )
}
export default HomeContainer
